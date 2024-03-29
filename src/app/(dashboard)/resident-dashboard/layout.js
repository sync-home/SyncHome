"use client";
import useGetRole from "@/Hooks/useGetRole";
import DashboardLoading from "@/components/Dashboard/DashboardLoading/DashboardLoading";
import { useRouter } from "next/navigation";

const ResidentDashboardLayout = ({ children }) => {

    const router = useRouter();
    const {role, isLoading, isPending} = useGetRole();

    if(isPending || isLoading){
        return <DashboardLoading/>
    }

    if (role === 'resident') {
        return children;
    }else router.push('/')
    
};

export default ResidentDashboardLayout;