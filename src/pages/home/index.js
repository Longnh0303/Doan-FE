// ** React Imports
import { useState, useEffect, useCallback } from "react";
// ** Next Import
import { useRouter } from "next/router";
// ** MUI Imports
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
// ** Icon Imports
import Icon from "src/@core/components/icon";

//Api imports
import { getDevices } from "src/api/device";
import { getUserById } from "src/api/user";
import { useAuth } from "src/hooks/useAuth";

// ** Custom Table Components Imports
import { convertTime } from "src/utils/base";

const DeviceList = () => {
  //Data column
  const columns = [
    {
      flex: 0.1,
      minWidth: 150,
      field: "name",
      headerName: "Tên thiết bị",
      renderCell: ({ row }) => {
        return (
          <Typography
            noWrap
            sx={{
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            {row.deviceName}
          </Typography>
        );
      },
    },
    {
      flex: 0.1,
      minWidth: 140,
      field: "mac",
      headerName: "Địa chỉ MAC",
      renderCell: ({ row }) => {
        return (
          <Typography
            noWrap
            sx={{
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            {row.mac}
          </Typography>
        );
      },
    },
    {
      flex: 0.1,
      minWidth: 140,
      field: "describe",
      headerName: "Mô tả",
      renderCell: ({ row }) => {
        return (
          <Typography
            noWrap
            sx={{
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            {row.describe}
          </Typography>
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
      minWidth: 120,
      sortable: false,
      field: "actions",
      align: "center",
      headerAlign: "center",
      headerName: "Xem",
      renderCell: ({ row }) => {
        return (
          <IconButton
            onClick={() => {
              handleViewClick(row.mac);
            }}
            aria-label="view"
          >
            <VisibilityIcon />
          </IconButton>
        );
      },
    },
  ];

  const role = useAuth().user.role;
  const user = useAuth().user;
  // ** State
  const [rowData, setRowData] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const router = useRouter();

  const handleViewClick = (id) => {
    router.push(`/home/${id}`);
  };

  // ** Hooks
  const fetchData = useCallback(async () => {
    try {
      if (role === "admin") {
        const response = await getDevices();
        setRowData(response);
      } else {
        const response = await getUserById(user._id);

        const modifiedDevices = response.devices.map((device) => ({
          ...device,
          id: device._id,
        }));

        setRowData(modifiedDevices);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Danh sách thiết bị" />
          <Divider sx={{ m: "0 !important" }} />
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
    </Grid>
  );
};

DeviceList.acl = {
  action: "read",
  subject: "home-page",
};

export default DeviceList;
