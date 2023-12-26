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

const data = [
  {
    id: 1,
    name: "ESP_MASTER_1",
    slaveNumber: [
      {
        id: 1,
        name: "ESP_SLAVE_1",
        temp: 25,
        hum: 35,
        mq: 15,
        status: "active",
      },
      {
        id: 2,
        name: "ESP_SLAVE_2",
        temp: 15,
        hum: 50,
        mq: 10,
        status: "active",
      },
      {
        id: 3,
        name: "ESP_SLAVE_3",
        temp: 10,
        hum: 70,
        mq: 30,
        status: "active",
      },
    ],
    status: "active",
  },
  {
    id: 2,
    name: "ESP_MASTER_2",
    slaveNumber: [
      {
        id: 1,
        name: "ESP_SLAVE_1",
        temp: 25,
        hum: 35,
        mq: 15,
        status: "active",
      },
      {
        id: 2,
        name: "ESP_SLAVE_2",
        temp: 15,
        hum: 50,
        mq: 10,
        status: "active",
      },
    ],
    status: "active",
  },
  {
    id: 3,
    name: "ESP_MASTER_3",
    slaveNumber: [
      {
        id: 1,
        name: "ESP_SLAVE_1",
        temp: 25,
        hum: 35,
        mq: 15,
        status: "active",
      },
      {
        id: 2,
        name: "ESP_SLAVE_2",
        temp: 15,
        hum: 50,
        mq: 10,
        status: "active",
      },
    ],
    status: "inactive",
  },
  {
    id: 4,
    name: "ESP_MASTER_4",
    slaveNumber: [
      {
        id: 1,
        name: "ESP_SLAVE_1",
        temp: 25,
        hum: 35,
        mq: 15,
        status: "active",
      },
      {
        id: 2,
        name: "ESP_SLAVE_2",
        temp: 15,
        hum: 50,
        mq: 10,
        status: "active",
      },
      {
        id: 3,
        name: "ESP_SLAVE_3",
        temp: 10,
        hum: 70,
        mq: 30,
        status: "active",
      },
      {
        id: 4,
        name: "ESP_SLAVE_4",
        temp: 30,
        hum: 55,
        mq: 95,
        status: "active",
      },
    ],
    status: "inactive",
  },
  {
    id: 5,
    name: "ESP_MASTER_5",
    slaveNumber: [
      {
        id: 1,
        name: "ESP_SLAVE_1",
        temp: 25,
        hum: 35,
        mq: 15,
        status: "active",
      },
      {
        id: 2,
        name: "ESP_SLAVE_2",
        temp: 15,
        hum: 50,
        mq: 10,
        status: "active",
      },
      {
        id: 3,
        name: "ESP_SLAVE_3",
        temp: 10,
        hum: 70,
        mq: 30,
        status: "active",
      },
      {
        id: 4,
        name: "ESP_SLAVE_4",
        temp: 30,
        hum: 55,
        mq: 95,
        status: "active",
      },
    ],
    status: "active",
  },
];

const UserList = () => {
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
      headerName: "Thiết bị con",
      field: "slaveNumber",
      headerAlign: "center", // Center-align the header
      align: "center", // Center-align the cell content
      renderCell: ({ row }) => {
        // Check if slaveNumber is an array and map the names
        const slaveDeviceNames = Array.isArray(row.slaveNumber)
          ? row.slaveNumber.map((device) => device.name).join(", ")
          : "";

        return (
          <Typography
            noWrap
            sx={{
              fontWeight: 500,
              color: "text.secondary",
              textTransform: "capitalize",
            }}
          >
            {slaveDeviceNames}
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
  // ** State
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const router = useRouter();

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Danh sách thiết bị của bạn" />
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
