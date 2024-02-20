import DashboardProfile from "@/components/Dashboard/DashboardProfile/DashboardProfile";
import React from 'react';

const ResidentProfile = () => {
    const users = {
        "photo": "https://i.ibb.co/cYL1xTf/alexander-hipp-i-EEBWg-Y-6l-A-unsplash-1.jpg",
        "name": "Alice Johnson",
        "address": "123 Maple Ave, Town, Country",
        "age": 40,
        "gender": "male",
        "status": "active",
        "role": "Resident",
        "email": "alice.johnson@example.com",
        "phone": "+112233445566",
        "region": "Europe",
        "login_activity": [
            {"date": "06-02-2024", "time": "11.00 am"}, 
            {"date": "07-02-2024", "time": "9.00 am"}, 
            {"date": "08-02-2024", "time": "12.00 pm"}
        ]
    };
    

    return (
        <div>
            <DashboardProfile adminData={users}></DashboardProfile>
        </div>
    );
};

export default ResidentProfile;