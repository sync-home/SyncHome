"use client";
import useGetRole from "@/Hooks/useGetRole";
import DashboardLoading from "@/components/Dashboard/DashboardLoading/DashboardLoading";
import { useRouter } from "next/navigation";

const GuestDashboardLayout = ({ children }) => {

    const router = useRouter()
    const role = useGetRole();

    if(!role){
        return <DashboardLoading/>
    }

    if (role == 'guest') {
        return children;
    }else router.push('/');
    
};

export default GuestDashboardLayout;