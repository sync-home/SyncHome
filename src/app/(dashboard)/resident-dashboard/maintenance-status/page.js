import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const maintenanceData = [
  {
    name: "Frozen yoghurt",
    place: "New York",
    date: "2024-02-15",
    issue: "AC not working",
    status: "Pending",
  },
  {
    name: "Ice cream sandwich",
    place: "Los Angeles",
    date: "2024-02-16",
    issue: "Leaky faucet",
    status: "Resolved",
  },
  {
    name: "Eclair",
    place: "Chicago",
    date: "2024-02-17",
    issue: "Broken window",
    status: "In Progress",
  },
  {
    name: "Cupcake",
    place: "Seattle",
    date: "2024-02-18",
    issue: "Clogged drain",
    status: "Pending",
  },
  {
    name: "Donut",
    place: "San Francisco",
    date: "2023-02-19",
    issue: "Broken door handle",
    status: "Resolved",
  },
  {
    name: "Gingerbread",
    place: "Miami",
    date: "2023-02-20",
    issue: "Faulty light fixture",
    status: "In Progress",
  },
  {
    name: "Brownie",
    place: "Boston",
    date: "2023-02-21",
    issue: "Moldy ceiling",
    status: "Pending",
  },
  {
    name: "Cheesecake",
    place: "Dallas",
    date: "2023-02-22",
    issue: "Roof leak",
    status: "Resolved",
  },
  {
    name: "Pudding",
    place: "Houston",
    date: "2023-02-23",
    issue: "Broken stairs",
    status: "In Progress",
  },
  {
    name: "Tiramisu",
    place: "Atlanta",
    date: "2023-02-24",
    issue: "Flooded basement",
    status: "Pending",
  },
];

const MaintenanceStatus = () => {
  return (
    <>
      <h1 className="text-xl lg:text-2xl font-bold my-5">
        Your Maintenance Requests Status
      </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Apartment</TableCell>
              <TableCell align="right">Place</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Issue</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {maintenanceData?.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {idx + 1}
                </TableCell>
                <TableCell>{row?.name}</TableCell>
                <TableCell align="right">{row?.place}</TableCell>
                <TableCell align="right">{row?.date}</TableCell>
                <TableCell align="right">{row?.issue}</TableCell>
                <TableCell align="right">{row?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MaintenanceStatus;
