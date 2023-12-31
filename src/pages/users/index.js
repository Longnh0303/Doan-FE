// ** React Imports
import { useState, useEffect, useCallback, useRef } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import { DataGrid } from "@mui/x-data-grid";
import UserDialog from "./components/Dialog";

// ** Icon Imports
import Icon from "src/@core/components/icon";

// ** Custom Components Imports
import CustomAvatar from "src/@core/components/mui/avatar";

//Api imports
import { getUsers } from "src/api/user";

// ** Custom Table Components Imports
import TableHeader from "./components/TableHeader";
import AddUserDrawer from "./components/AddUserDrawer";
import { convertTime } from "src/utils/base";
import { getDevices } from "src/api/device";

// ** renders client column
const userRoleObj = {
  admin: {
    title: "Quản trị viên",
    icon: "tabler:device-laptop",
    color: "success",
  },
  user: { title: "Người dùng", icon: "tabler:chart-pie-2", color: "primary" },
};

// ** renders client column
const renderClient = (row) => {
  if (row.role === "admin") {
    return (
      <CustomAvatar
        src="/images/avatars/admin.png"
        sx={{ width: 38, height: 38 }}
        alt={row.name}
      />
    );
  } else {
    return (
      <CustomAvatar
        src="/images/avatars/user.png"
        sx={{ width: 38, height: 38 }}
        alt={row.name}
      />
    );
  }
};

const RowOptions = ({ row, setRow, setOpenUpdate, setOpenDelete }) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null);
  const rowOptionsOpen = Boolean(anchorEl);

  const handleRowOptionsClick = (event) => {
    setAnchorEl(event.currentTarget);
    setRow(row);
  };

  const handleRowOptionsClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleRowOptionsClose();
    setOpenDelete(true);
  };
  const handleUpdate = () => {
    handleRowOptionsClose();
    setOpenUpdate(true);
  };
  return (
    <>
      <IconButton size="small" onClick={handleRowOptionsClick}>
        <Icon icon="tabler:dots-vertical" />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{ style: { minWidth: "8rem" } }}
      >
        <MenuItem onClick={handleUpdate} sx={{ "& svg": { mr: 2 } }}>
          <Icon icon="tabler:edit" fontSize={20} />
          Cập nhật
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ "& svg": { mr: 2 } }}>
          <Icon icon="tabler:trash" fontSize={20} />
          Xoá
        </MenuItem>
      </Menu>
    </>
  );
};

const UserList = () => {
  //Data column
  const columns = [
    {
      flex: 0.25,
      minWidth: 200,
      field: "username",
      headerName: "Tên người dùng",
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                mr: 2.5,
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: "#ececec",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {renderClient(row)}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography
                noWrap
                sx={{
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                {row.username}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
    {
      flex: 0.25,
      minWidth: 200,
      field: "email",
      headerName: "Email",
      renderCell: ({ row }) => {
        return (
          <Typography
            noWrap
            sx={{
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            {row.email}
          </Typography>
        );
      },
    },
    {
      flex: 0.15,
      minWidth: 180,
      field: "phone",
      headerName: "Số điện thoại",
      renderCell: ({ row }) => {
        return (
          <Typography
            noWrap
            sx={{
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            {row.phone}
          </Typography>
        );
      },
    },
    {
      flex: 0.15,
      field: "role",
      minWidth: 180,
      headerName: "Vai trò",
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomAvatar
              skin="light"
              sx={{ mr: 4, width: 30, height: 30 }}
              color={userRoleObj[row.role].color || "primary"}
            >
              <Icon icon={userRoleObj[row.role].icon} />
            </CustomAvatar>
            <Typography
              noWrap
              sx={{
                fontWeight: 500,
                textDecoration: "none",
                textTransform: "capitalize",
              }}
            >
              {userRoleObj[row.role].title || "Vận hành"}
            </Typography>
          </Box>
        );
      },
    },
    {
      flex: 0.15,
      minWidth: 180,
      field: "createdAt", // Corrected field name
      headerName: "Ngày tạo",
      renderCell: ({ row }) => {
        return (
          <Typography
            noWrap
            sx={{
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            {convertTime(row.createdAt)}
          </Typography>
        );
      },
    },
    {
      flex: 0.1,
      minWidth: 150,
      sortable: false,
      field: "actions",
      align: "center",
      headerAlign: "center",
      headerName: "Thao tác",
      renderCell: ({ row }) => (
        <RowOptions
          row={row}
          setRow={setRow}
          setOpenUpdate={setOpenUpdate}
          setOpenDelete={setOpenDelete}
        />
      ),
    },
  ];

  // ** State
  const [addUserOpen, setAddUserOpen] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [row, setRow] = useState([]);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [devicesList, setDevicesList] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  // ** Hooks
  const fetchData = useCallback(async () => {
    try {
      const response = await getUsers();
      const devices = await getDevices();
      setDevicesList(devices);
      setRowData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen);

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Danh sách người dùng" />
          <Divider sx={{ m: "0 !important" }} />
          <TableHeader toggle={toggleAddUserDrawer} />
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={rowData}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[5, 10, 20]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>
      <AddUserDrawer
        fetchData={fetchData}
        open={addUserOpen}
        toggle={toggleAddUserDrawer}
        devicesList={devicesList}
      />
      <UserDialog
        openUpdate={openUpdate}
        toggleUpdate={setOpenUpdate}
        row={row}
        refresh={fetchData}
        openDelete={openDelete}
        toggleDelete={setOpenDelete}
        devicesList={devicesList}
      ></UserDialog>
    </Grid>
  );
};

export default UserList;
