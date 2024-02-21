"use client";
import useGetRole from "@/Hooks/useGetRole";
import DashboardLoading from "@/components/Dashboard/DashboardLoading/DashboardLoading";
import { useRouter } from "next/navigation";

const AdminDashboardLayout = ({ children }) => {

    const router = useRouter()
    const {role, isLoading, isPending} = useGetRole();

    if(isPending || isLoading){
        return <DashboardLoading/>
    }

    if (role == 'admin') {
        return children;
    }else router.push('/');
    
};

export default AdminDashboardLayout;