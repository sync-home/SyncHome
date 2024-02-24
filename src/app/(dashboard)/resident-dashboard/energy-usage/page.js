import React from "react";
import { Typography, Grid, Paper, Card, CardContent } from '@mui/material';
import EnergyConsumptionChart from "@/components/Dashboard/ResidentDashboard/EnergyConsumptionChart/EnergyConsumptionChart";

const EnergyUsage = () => {
  const energyConsumptionData = [
    { name: "Last 24 Hours", consumption: 20 },
    { name: "Last 7 Days", consumption: 500 },
    { name: "Last 30 Days", consumption: 1200 },
  ];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Your Energy Usage
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Energy Consumption
            </Typography>
            {/* Display energy consumption data */}
            {energyConsumptionData.map((item, index) => (
              <div key={index} style={{ marginBottom: 20 }}>
                <Typography variant="body1">{item.name}</Typography>
                <Typography variant="h6">{item.consumption} kWh</Typography>
              </div>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Energy Consumption Chart
            </Typography>
            {/* Render energy consumption chart */}
            <EnergyConsumptionChart energyConsumptionData={energyConsumptionData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Understanding Your Energy Usage
              </Typography>
              <Typography variant="body1">
                Analyzing your energy consumption patterns can help you make informed decisions about energy usage optimization. By tracking your energy usage over different time periods, you can identify trends and adjust your habits accordingly to save energy and reduce costs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Energy Saving Tips
              </Typography>
              <Typography variant="body1">
                Consider implementing energy-saving measures such as using energy-efficient appliances, adjusting your thermostat settings, and turning off lights and electronics when not in use. These simple actions can help reduce your energy consumption and lower your utility bills.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Additional related cards */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Renewable Energy Options
              </Typography>
              <Typography variant="body1">
                Explore renewable energy options such as solar panels, wind turbines, and geothermal heating to reduce your reliance on traditional energy sources and lower your carbon footprint.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Smart Home Automation
              </Typography>
              <Typography variant="body1">
                Invest in smart home automation technologies to optimize energy usage, such as smart thermostats, lighting controls, and energy monitoring systems that provide real-time insights into your energy consumption.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default EnergyUsage;
