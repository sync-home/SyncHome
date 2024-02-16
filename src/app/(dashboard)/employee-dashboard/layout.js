"use client";
import useGetRole from "@/Hooks/useGetRole";
import DashboardLoading from "@/components/Dashboard/DashboardLoading/DashboardLoading";

const EmployeeDashboardLayout = ({ children }) => {

    const role = useGetRole();

    if(!role){
        return <DashboardLoading/>
    }

    if (role == 'employee') {
        return children;
    }else router.push('/');
    
};

export default EmployeeDashboardLayout;