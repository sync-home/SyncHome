// "use client";
import parkingcar from "@/assets/rtm/carparking.png";
import parking1 from "@/assets/rtm/park1.png";
import fuel from "@/assets/rtm/fuel.png";
import safety from "@/assets/rtm/safety.png";
import parkingviolation from "@/assets/rtm/parkingviolation.png";
import car from "@/assets/rtm/car2.png";
import bike from "@/assets/rtm/bike3.png";


import Image from "next/image";
import { Box, Grid, Popover, Typography } from "@mui/material";
// import {  useState } from "react";
import { getParkingData } from "../utils/getParkingData";
import VisitorManagement from "./VisitorManagement";
import SecurityMobitoring from "./SecurityMobitoring";
import EnergyUsesAnalytic from "./EnergyUsesAnalytic";


const ParkingSpaceAvailability = async () => {
    // const data = await getParkingData()
    const data = [
        {
            "slot_name": "A1",
            "status": "available",
            "bookedby": null,
            "starttime": null,
            "endtime": null
        },
        {
            "slot_name": "A2",
            "status": "available",
            "bookedby": null,
            "starttime": null,
            "endtime": null
        },
        {
            "slot_name": "B1",
            "status": "available",
            "bookedby": null,
            "starttime": null,
            "endtime": null
        },
        {
            "slot_name": "B2",
            "status": "available",
            "bookedby": null,
            "starttime": null,
            "endtime": null
        },
        {
            "slot_name": "C1",
            "status": "booked",
            "bookedby": "John",
            "starttime": "2024-02-06T10:00:00",
            "endtime": "2024-02-06T12:00:00"
        },
        {
            "slot_name": "C2",
            "status": "booked",
            "bookedby": "Alice",
            "starttime": "2024-02-06T13:00:00",
            "endtime": "2024-02-06T15:00:00"
        },
        {
            "slot_name": "D1",
            "status": "available",
            "bookedby": null,
            "starttime": null,
            "endtime": null
        },
        {
            "slot_name": "D2",
            "status": "available",
            "bookedby": null,
            "starttime": null,
            "endtime": null
        },
        {
            "slot_name": "E1",
            "status": "booked",
            "bookedby": "Emma",
            "starttime": "2024-02-06T11:30:00",
            "endtime": "2024-02-06T13:30:00"
        },
        {
            "slot_name": "E2",
            "status": "available",
            "bookedby": null,
            "starttime": null,
            "endtime": null
        }
    ]
    return (
        <div className="py-5">
            <h3 className='text-2xl font-semibold text-red-500'>Real Time Monitoring</h3>
            <p className='my-5 text-justify text-[#3b3a3a]'>Real-time monitoring is the delivery of continuously updated data about systems, processes or events. Such monitoring provides information streaming at zero or low latency, so there is minimal delay between data collection and analysis. It enables quick detection of anomalies, performance issues and critical events.</p>
            <Box>
                <EnergyUsesAnalytic></EnergyUsesAnalytic>
            </Box>
            <Typography className="text-rode-400 text-2xl pb-5 font-bold pt-5 w-full text-center">Find Avaiable Parking Slot</Typography>
            {/* <Box> */}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }} className="my-5">
                {
                    data.map((parking) => (
                        <Grid key={parking.slot_name} item xs={2}>
                            <div className=" h-60 w-full      rounded-xl border border-dashed  border-slate-950  p-2 font-medium">
                                <div className="space-y-2">
                                    <h1 className="text-center" >{parking.slot_name}</h1>
                                    {
                                        parking.status === "available" ?
                                            <>
                                                <h4 className="bg-green-700 text-white p-2 rounded font-bold text-[14px] text-center">Avaiable</h4>
                                                <p className="text-lg flex py-5 text-justify">Book your slot now!</p>
                                            </>
                                            :
                                            <>
                                                {/* <div> */}
                                                <h4 className="bg-rose-500 text-white p-2 rounded font-bold text-[14px] text-center">Booked </h4>
                                                <h4 className=" font-bold text-[14px] text-justify">BookedBy: {parking.bookedby} </h4>
                                                <p className="text-xs text-justify">StartTime: {parking.starttime.toLocaleString()}</p>
                                                <p className="text-xs text-justify">EndTime: {parking.endtime}</p>
                                                {/* <div /> */}

                                            </>
                                    }
                                </div>
                            </div>
                        </Grid>
                    ))
                }

            </Grid>
            <Box>
                <VisitorManagement></VisitorManagement>
            </Box>
            <Box>
                <SecurityMobitoring></SecurityMobitoring>
            </Box>
        </div>
    );
};

export default ParkingSpaceAvailability;