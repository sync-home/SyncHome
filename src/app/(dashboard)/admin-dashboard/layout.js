"use client";

import useAuthContext from "@/Hooks/useAuthContext";
import DashboardLoading from "@/components/Dashboard/DashboardLoading/DashboardLoading";
import { useRouter } from 'next/navigation'


const AdminDashboardLayout = ({ children }) => {

    const { role } = useAuthContext();
    const router = useRouter();

    if(!role){
        return <DashboardLoading/>
    }



    if (role == 'admin') {
        return children;
    }else router.push('/');
    

};

export default AdminDashboardLayout;