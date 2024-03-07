'use client'
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import useAuthContext from "@/Hooks/useAuthContext";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { toast } from "react-toastify";

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
        `http://localhost:5000/api/v1/report`,
        maintenanceData
      );

      if (res.data.insertedId) {
        toast("Your request has been submitted successfully!");
        // Reset form fields after successful submission
        setMaintenanceData(initialMaintenanceData);
      }
    } catch (error) {
      // Show error message if submission fails
      toast("Failed to submit your request. Please try again later.!");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setMaintenanceData({ ...maintenanceData, [id]: value });
  };

  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} style={{height:'auto'}}>
          <Box display="flex" height="100%" >
            <Card style={{ width: "100%" }}>
              <CardMedia
                component="img"
                image="https://i.ibb.co/S0r3QvP/maintenance.jpg"
                alt="maintenance-image"
                style={{ height: "350px", maxWidth: "100%" }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Report Maintenance Issues
                </Typography>
                <Typography variant="body1">
                  Welcome! We're here to help maintain your home. If you notice
                  any issues that require our attention, please report them
                  using the form below. Our dedicated team will promptly
                  address your concerns.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit} style={{ height: "100%" }}>
            <Grid container spacing={2} style={{ height: "100%" }}>
              <Grid item xs={12}>
                <TextField
                  id="apartment"
                  label="Apartment"
                  variant="outlined"
                  fullWidth
                  value={maintenanceData.apartment}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="place"
                  label="Place"
                  variant="outlined"
                  fullWidth
                  value={maintenanceData.place}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default MaintenanceRequests;
