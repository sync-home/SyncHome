'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuthContext from "@/Hooks/useAuthContext";
import {Typography} from '@mui/material';


const MaintenanceStatus = () => {
  const { user } = useAuthContext();
  const email = user?.email;

  const [maintenanceData, setMaintenanceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://synchome-server.vercel.app/api/v1/report?email=${email}`);
        setMaintenanceData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]); 

  return (
    <>
      <Typography variant="h5" gutterBottom className='pb-3'>
      Your Maintenance Status
      </Typography>
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
                <TableCell>{row?.apartment}</TableCell>
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
