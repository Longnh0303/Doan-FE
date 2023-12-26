// ** React Imports
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
// ** Next Imports
import Link from "next/link";

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
import CardContent from "@mui/material/CardContent";
import { DataGrid } from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
// ** Icon Imports
import Icon from "src/@core/components/icon";

// ** Custom Components Imports
import CustomChip from "src/@core/components/mui/chip";

const userStatusObj = {
  active: { name: "Đang hoạt động", color: "success" },
  inactive: { name: "Không hoạt động", color: "secondary" },
};

const columns = [
  {
    flex: 0.25,
    minWidth: 280,
    field: "name",
    headerName: "Tên thiết bị",
    renderCell: ({ row }) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            noWrap
            sx={{
              fontWeight: 500,
              textDecoration: "none",
              color: "text.secondary",
            }}
          >
            {row.name}
          </Typography>
        </Box>
      );
    },
  },
  {
    flex: 0.15,
    minWidth: 120,
    headerName: "Nhiệt độ(độ C)",
    field: "temp",
    headerAlign: "center", // Center-align the header
    align: "center", // Center-align the cell content
    renderCell: ({ row }) => {
      return (
        <Typography
          noWrap
          sx={{
            fontWeight: 500,
            color: "text.secondary",
            textTransform: "capitalize",
          }}
        >
          {row.temp}
        </Typography>
      );
    },
  },

  {
    flex: 0.15,
    minWidth: 120,
    headerName: "Độ ẩm(%)",
    field: "hum",
    headerAlign: "center", // Center-align the header
    align: "center", // Center-align the cell content
    renderCell: ({ row }) => {
      return (
        <Typography
          noWrap
          sx={{
            fontWeight: 500,
            color: "text.secondary",
            textTransform: "capitalize",
          }}
        >
          {row.hum}
        </Typography>
      );
    },
  },
  {
    flex: 0.15,
    minWidth: 120,
    headerName: "Chất lượng không khí(ppm)",
    field: "mq135",
    headerAlign: "center", // Center-align the header
    align: "center", // Center-align the cell content
    renderCell: ({ row }) => {
      return (
        <Typography
          noWrap
          sx={{
            fontWeight: 500,
            color: "text.secondary",
            textTransform: "capitalize",
          }}
        >
          {row.mq}
        </Typography>
      );
    },
  },
  {
    flex: 0.1,
    minWidth: 110,
    field: "status",
    headerName: "Trạng thái",
    headerAlign: "center", // Center-align the header
    align: "center", // Center-align the cell content
    renderCell: ({ row }) => {
      return (
        <CustomChip
          rounded
          skin="light"
          size="small"
          label={userStatusObj[row.status].name}
          color={userStatusObj[row.status].color}
          sx={{ textTransform: "capitalize" }}
        />
      );
    },
  },
];

const data = [
  { id: 1, name: "ESP_SLAVE_1", temp: 25, hum: 35, mq: 15, status: "active" },
  { id: 2, name: "ESP_SLAVE_2", temp: 15, hum: 50, mq: 10, status: "active" },
  { id: 3, name: "ESP_SLAVE_3", temp: 10, hum: 70, mq: 30, status: "active" },
  { id: 4, name: "ESP_SLAVE_4", temp: 30, hum: 55, mq: 95, status: "active" },
  { id: 5, name: "ESP_SLAVE_5", temp: 0, hum: 0, mq: 0, status: "inactive" },
];

const UserList = () => {
  const router = useRouter();
  const id = router.query.id;
  // ** State
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Danh sách thiết bị con và cảm biến" />
          <Divider sx={{ m: "0 !important" }} />
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={data}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserList;
