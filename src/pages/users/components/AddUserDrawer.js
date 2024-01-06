// ** React Imports
import { useState, useCallback } from "react";
import toast from "react-hot-toast";

// ** MUI Imports
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import CustomChip from "src/@core/components/mui/chip";

// ** Custom Component Import
import CustomTextField from "src/@core/components/mui/text-field";

// ** Third Party Imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

// ** Icon Imports
import Icon from "src/@core/components/icon";

// ** Actions Imports
import { createUser } from "src/api/user";
import { VALID_PASSWORD_REGEX, VALID_PHONE_REGEX } from "src/constants/regex";

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(6),
  justifyContent: "space-between",
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Email là trường bắt buộc"),
  password: yup
    .string()
    .required("Mật khẩu là trường bắt buộc")
    .min(6, "Mật khẩu phải có ít nhất 6 kí tự")
    .required()
    .matches(
      VALID_PASSWORD_REGEX,
      "Mật khẩu phải có ít nhất 6 kí tự, 1 kí tự thường và 1 chữ số"
    ),
  phone: yup
    .string()
    .matches(VALID_PHONE_REGEX, "Số điện thoại chỉ được chứa số")
    .min(10, "Số điện thoại phải có ít nhất 10 số ")
    .max(15, "Số điện thoại tối đa 15 số"),
  username: yup
    .string()
    .required("Tên là trường bắt buộc")
    .min(3, "Tên phải có ít nhất 3 kí tự")
    .max(30, "Tên tối đa chỉ chứa 30 kí tự"),
});

const defaultValues = {
  email: "",
  username: "",
  password: "",
  phone: "",
};

const SidebarAddUser = (props) => {
  // ** Props
  const { open, toggle, fetchData, devicesList } = props;

  // ** State
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const [devices, setDevices] = useState([]);

  // ** Hooks

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleChange = (event) => {
    const selectedValues = event.target.value;
    const chosedDevices = devicesList.filter((device) =>
      selectedValues.includes(device.id)
    );
    setDevices(chosedDevices);
  };

  const onSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const deviceIds = devices.map((device) => device.id);
        const combinedData = {
          ...data,
          role: role,
          devices: deviceIds,
        };
        await createUser(combinedData).then(() => {
          toggle();
          reset();
          setRole("user");
          setDevices([]);
          setTimeout(function () {
            setLoading(false);
          }, 500);
          if (fetchData) {
            fetchData();
            toast.success("Add user successfully!");
          }
        });
      } catch (error) {
        toggle();
        reset();
        setLoading(false);
      }
    },
    [role, devices, toggle, reset, fetchData]
  );

  const handleClose = () => {
    setRole("user");
    setDevices([]);
    toggle();
    reset();
  };

  return (
    <Drawer
      open={open}
      anchor="right"
      variant="temporary"
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ "& .MuiDrawer-paper": { width: { xs: "100vw", sm: 400 } } }}
    >
      <Header>
        <Typography variant="h5">Thêm người dùng</Typography>
        <IconButton
          size="small"
          onClick={handleClose}
          sx={{
            p: "0.438rem",
            borderRadius: 1,
            color: "text.primary",
            backgroundColor: "action.selected",
            "&:hover": {
              backgroundColor: (theme) =>
                `rgba(${theme.palette.customColors.main}, 0.16)`,
            },
          }}
        >
          <Icon icon="tabler:x" fontSize="1.125rem" />
        </IconButton>
      </Header>
      <Box sx={{ p: (theme) => theme.spacing(0, 6, 6) }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label="Tên người dùng"
                onChange={onChange}
                error={Boolean(errors.username)}
                {...(errors.username && {
                  helperText: errors.username.message,
                })}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                type="email"
                label="Email"
                value={value}
                sx={{ mb: 4 }}
                onChange={onChange}
                error={Boolean(errors.email)}
                {...(errors.email && { helperText: errors.email.message })}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                label="Số điện thoại"
                value={value}
                sx={{ mb: 4 }}
                onChange={onChange}
                error={Boolean(errors.phone)}
                {...(errors.phone && { helperText: errors.phone.message })}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                label="Mật khẩu"
                value={value}
                sx={{ mb: 4 }}
                onChange={onChange}
                error={Boolean(errors.password)}
                {...(errors.password && {
                  helperText: errors.password.message,
                })}
              />
            )}
          />

          <CustomTextField
            select
            fullWidth
            value={role}
            sx={{ mb: 4 }}
            label="Vai trò"
            onChange={(e) => setRole(e.target.value)}
            SelectProps={{
              value: role,
              onChange: (e) => setRole(e.target.value),
            }}
          >
            <MenuItem value="admin">Quản trị viên</MenuItem>
            <MenuItem value="user">Người dùng</MenuItem>
          </CustomTextField>
          {role === "user" && (
            <CustomTextField
              select
              fullWidth
              label="Thiết bị"
              id="select-multiple-chip"
              SelectProps={{
                MenuProps,
                multiple: true,
                value: devices ? devices.map((s) => s.id) : [],
                onChange: handleChange,
                displayEmpty: true, //
                renderValue: (selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {selected.length === 0
                      ? "Chọn thiết bị của người dùng"
                      : selected.map((value) => (
                          <CustomChip
                            key={value}
                            label={
                              devicesList.find((s) => s.id === value)
                                ?.deviceName
                            }
                            sx={{ m: 0.75 }}
                            skin="light"
                            color="primary"
                          />
                        ))}
                  </Box>
                ),
              }}
            >
              <MenuItem disabled value="">
                <em>Chọn thiết bị của người dùng</em>
              </MenuItem>
              {devicesList.map((device) => (
                <MenuItem key={device.id} value={device.id}>
                  {device.deviceName}
                </MenuItem>
              ))}
            </CustomTextField>
          )}

          <Box sx={{ display: "flex", alignItems: "center", pt: 6 }}>
            <LoadingButton
              loading={loading}
              variant="contained"
              sx={{ mr: 3 }}
              type="submit"
            >
              Xác nhận
            </LoadingButton>
            <Button
              variant="tonal"
              color="secondary"
              onClick={() => {
                handleClose();
                toast.success("Đã huỷ thao tác!");
              }}
            >
              Thoát
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  );
};

export default SidebarAddUser;
