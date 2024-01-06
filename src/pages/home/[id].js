// ** React Imports
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import socket from "src/configs/socket";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import { DataGrid } from "@mui/x-data-grid";
// ** Custom Components Imports

const statusObj = {
  true: { title: "Đang hoạt động", color: "success" },
  false: { title: "Không hoạt động", color: "secondary" },
};

const columns = [
  {
    flex: 0.25,
    minWidth: 200,
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
            {row.id}
          </Typography>
        </Box>
      );
    },
  },
  {
    flex: 0.15,
    minWidth: 160,
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
          {row.temp !== "null" ? row.temp : 0}
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
          {row.hum !== "null" ? row.hum : 0}
        </Typography>
      );
    },
  },
  {
    flex: 0.15,
    minWidth: 280,
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
          {row.mq !== "null" ? row.mq : 0}
        </Typography>
      );
    },
  },
  {
    flex: 0.15,
    minWidth: 180,
    headerName: "Trạng thái quạt",
    field: "fan",
    headerAlign: "center", // Center-align the header
    align: "center", // Center-align the cell content
    renderCell: ({ row }) => {
      return (
        <Chip
          label={statusObj[row.fan].title}
          color={statusObj[row.fan].color}
        />
      );
    },
  },
  {
    flex: 0.15,
    minWidth: 180,
    headerName: "Trạng thái đèn",
    field: "light",
    headerAlign: "center", // Center-align the header
    align: "center", // Center-align the cell content
    renderCell: ({ row }) => {
      return (
        <Chip
          label={statusObj[row.light].title}
          color={statusObj[row.light].color}
        />
      );
    },
  },
];

const UserList = () => {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState([]);

  // ** State
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  useEffect(() => {
    socket.connect();
    socket.emit("request-join-room", `${id}_status`);
  }, []);

  useEffect(() => {
    socket.on("device_status", async (msg) => {
      setData(msg.data.message.devices);
    });
  });

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Theo dõi cảm biến" />
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

UserList.acl = {
  action: "read",
  subject: "home-child-page",
};

export default UserList;
