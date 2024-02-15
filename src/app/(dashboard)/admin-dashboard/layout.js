"use client";


import useAuthContext from "@/Hooks/useAuthContext";
import DashboardLoading from "@/components/Dashboard/DashboardLoading/DashboardLoading";
import { getRole } from "@/utils/getRole";
import { useRouter } from 'next/navigation'
import { useState } from "react";


const AdminDashboardLayout = ({ children }) => {

    const {user} = useAuthContext();
    const [ role, setRole ] = useState(null)
    const router = useRouter();

    getRole(user?.email).then(data => {
        if (data?.role) setRole(data.role)
    });

    if(!role){
        return <DashboardLoading/>
    }



    if (role == 'admin') {
        return children;
    }else router.push('/');
    

};

export default AdminDashboardLayout;