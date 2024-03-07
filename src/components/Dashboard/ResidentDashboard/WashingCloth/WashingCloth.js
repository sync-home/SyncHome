"use client";
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
import { Typography } from "@mui/material";

const WashingCloth = () => {
  const { user } = useAuthContext();
  const email = user?.email;

  const [washingData, setWashingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://synchome-server.vercel.app/api/v1/washing-machine?email=${email}`
        );
        setWashingData(response.data);
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]);

  return (
    <>
      <Typography variant="h6" gutterBottom className="py-6">
        Your completed washing cloth
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>

              <TableCell align="right">Status</TableCell>
              <TableCell align="right">RemainingTime</TableCell>
              <TableCell align="right">Cloth Name</TableCell>
              <TableCell align="right">ClothType</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {washingData?.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {idx + 1}
                </TableCell>

                <TableCell align="right">{row?.status}</TableCell>
                <TableCell align="right">{row?.remainingTime}</TableCell>
                <TableCell align="right">{row?.clothName}</TableCell>
                <TableCell align="right">{row?.clothType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default WashingCloth;
