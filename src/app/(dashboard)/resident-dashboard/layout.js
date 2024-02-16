"use client";
import useGetRole from "@/Hooks/useGetRole";
import DashboardLoading from "@/components/Dashboard/DashboardLoading/DashboardLoading";

const ResidentDashboardLayout = ({ children }) => {

    const role = useGetRole();

    if(!role){
        return <DashboardLoading/>
    }

    if (role == 'resident') {
        return children;
    }else router.push('/');
    
};

export default ResidentDashboardLayout;