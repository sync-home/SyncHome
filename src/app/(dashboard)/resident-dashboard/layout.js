"use client";
import useGetRole from "@/Hooks/useGetRole";
import DashboardLoading from "@/components/Dashboard/DashboardLoading/DashboardLoading";
import { useRouter } from "next/navigation";

const ResidentDashboardLayout = ({ children }) => {

    const router = useRouter();
    const role = useGetRole();

    if(!role){
        return <DashboardLoading/>
    }

    if (role === 'resident') {
        return children;
    }
    
};

export default ResidentDashboardLayout;