"use client";

import { CircularProgress } from "@mui/material";


const DashboardLoading = () => {
    return (
        <div className="h-full w-full flex justify-center items-center bg-yellow-500 absolute top-0 left-0 z-50">
            <div className="bg-yellow-500">
                <CircularProgress />
                <h3>Loading...</h3>
            </div>
        </div>
    );
};

export default DashboardLoading;