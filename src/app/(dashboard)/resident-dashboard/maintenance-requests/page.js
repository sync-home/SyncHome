"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Swal from "sweetalert2";
import useAuthContext from "@/Hooks/useAuthContext";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const MaintenanceRequests = () => {
  const { user } = useAuthContext();
  const email = user?.email;

  const initialMaintenanceData = {
    apartment: "",
    place: "",
    date: "",
    issue: "",
    status: "pending",
    email: email,
  };

  const [maintenanceData, setMaintenanceData] = useState(
    initialMaintenanceData
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `https://synchome-server.vercel.app/api/v1/report`,
        maintenanceData
      );

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your request has been submitted successfully.",
        });
        // Reset form fields after successful submission
        setMaintenanceData(initialMaintenanceData);
      }
    } catch (error) {
      // Show error message if submission fails
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit your request. Please try again later.",
      });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setMaintenanceData({ ...maintenanceData, [id]: value });
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom className='pb-3'>
        Maintenance Requests
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              id="apartment"
              label="Apartment"
              variant="outlined"
              fullWidth
              value={maintenanceData.apartment}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="place"
              label="Place"
              variant="outlined"
              fullWidth
              value={maintenanceData.place}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="date"
              label="Date"
              type="date"
              variant="outlined"
              fullWidth
              value={maintenanceData.date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="issue"
              label="Describe the issue"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={maintenanceData.issue}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Submit Request
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default MaintenanceRequests;
