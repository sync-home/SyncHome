"use client";

import useAuthContext from "@/Hooks/useAuthContext";
import DashboardLoading from "@/components/Dashboard/DashboardLoading/DashboardLoading";
import { getRole } from "@/utils/getRole";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

const AdminDashboardLayout = ({ children }) => {
    const [role, setRole] = useState(null);
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        getRole(user?.email).then(data => {
            if (data?.role) setRole(data.role)
        });
    }, [])

    if(!role){
        return <DashboardLoading/>
    }



    if (role == 'admin') {
        return children;
    }else router.push('/');
    

};

export default AdminDashboardLayout;