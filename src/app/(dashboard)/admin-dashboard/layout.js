"use client";
import useGetRole from "@/Hooks/useGetRole";
import DashboardLoading from "@/components/Dashboard/DashboardLoading/DashboardLoading";

const AdminDashboardLayout = ({ children }) => {

    const role = useGetRole();

    if(!role){
        return <DashboardLoading/>
    }

    if (role == 'admin') {
        return children;
    }else router.push('/');
    
};

export default AdminDashboardLayout;