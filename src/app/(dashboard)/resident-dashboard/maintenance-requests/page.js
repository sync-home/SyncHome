"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const MaintenanceRequests = () => {
  const [maintenanceData, setMaintenanceData] = useState({
    apartment: "",
    place: "",
    date: "",
    issueDescription: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(maintenanceData);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setMaintenanceData({ ...maintenanceData, [id]: value });
  };

  return (
    <div className="w-full m-auto">
      <h1 className="text-xl lg:text-2xl font-bold my-5">
        Maintenance Requests
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          <div className="w-full lg:w-1/2 flex flex-col  justify-between gap-4">
            <TextField
              id="apartment"
              label="Apartment"
              variant="outlined"
              fullWidth
              value={maintenanceData.apartment}
              onChange={handleChange}
            />
            <TextField
              id="place"
              label="Place"
              variant="outlined"
              fullWidth
              value={maintenanceData.place}
              onChange={handleChange}
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-between gap-4">
            <TextField
              id="date"
              label="Date"
              type="date"
              variant="outlined"
              fullWidth
              value={maintenanceData.date}
              onChange={handleChange}
            />
          </div>

          <div className="w-full lg:w-1/2">
            <TextField
              id="issueDescription"
              label="Write your issue here..."
              multiline
              rows={3}
              fullWidth
              variant="outlined"
              value={maintenanceData.issueDescription}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MaintenanceRequests;
