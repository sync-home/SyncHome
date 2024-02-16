"use client";
import useGetRole from '@/Hooks/useGetRole';
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar/DashboardSidebar';
import { faHouse, faUser, faUsers, faChartLine, faVideo } from '@fortawesome/free-solid-svg-icons';


const DashboardLayout = ({ children }) => {

    const role = useGetRole();

    if (!role) {
        return <p>Role is coming...</p>
    }

    let sidebarData = [];

    if (role == 'admin') {
        sidebarData = [
            { 'name': 'Admin Profile', 'path': '/admin-dashboard/profile', 'icon': faUser },
            { 'name': 'All Users', 'path': '/admin-dashboard/all-users', 'icon': faUsers },
            { 'name': 'Energy', 'path': '/admin-dashboard/energy', 'icon': faChartLine },
            { 'name': 'Camera', 'path': '/admin-dashboard/camera', 'icon': faVideo },
            { 'name': 'Apartments', 'path': '/admin-dashboard/apartments', 'icon': faHouse },
            { 'name': 'Requests', 'path': '/admin-dashboard/requests', 'icon': faHouse },
            { 'name': 'Back to Home', 'path': '/', 'icon': faHouse },
        ];
    } else if (role == 'resident') {
        sidebarData = [
            { 'name': 'Resident Profile', 'path': '/admin-dashboard/profile', 'icon': faUser },
            { 'name': 'Resident All Users', 'path': '/admin-dashboard/all-users', 'icon': faUsers },
            { 'name': 'Resident Energy', 'path': '/admin-dashboard/energy', 'icon': faChartLine },
            { 'name': 'Resident Camera', 'path': '/admin-dashboard/camera', 'icon': faVideo },
            { 'name': 'Resident Apartments', 'path': '/admin-dashboard/apartments', 'icon': faHouse },
            { 'name': 'My Apartment', 'path': '/resident-dashboard/my-apartment', 'icon': faHouse },
            { 'name': 'Resident Back to Home', 'path': '/', 'icon': faHouse },
        ];
    } else if (role == 'employee') {
        sidebarData = [
            { 'name': 'Employee Profile', 'path': '/admin-dashboard/profile', 'icon': faUser },
            { 'name': 'Employee All Users', 'path': '/admin-dashboard/all-users', 'icon': faUsers },
            { 'name': 'Employee Energy', 'path': '/admin-dashboard/energy', 'icon': faChartLine },
            { 'name': 'Employee Camera', 'path': '/admin-dashboard/camera', 'icon': faVideo },
            { 'name': 'Employee Apartments', 'path': '/admin-dashboard/apartments', 'icon': faHouse },
            { 'name': 'Employee Back to Home', 'path': '/', 'icon': faHouse },
        ];
    } else if (role == 'guest') {
        sidebarData = [
            { 'name': 'Guest Profile', 'path': '/guest-dashboard/profile', 'icon': faUser },
            { 'name': 'Request', 'path': '/guest-dashboard/request', 'icon': faUser },
            { 'name': 'Back to Home', 'path': '/', 'icon': faHouse },
        ];
    };



    console.log(role);
    // console.log(user?.email);

    return (
        <>
            <div className="flex">
                <div className="m-0 p-0">
                    <DashboardSidebar sidebarData={sidebarData} />
                </div>
                <div className="flex-1 h-screen overflow-y-scroll">
                    <div className="bg-[#6962AD] py-3 w-full sticky top-0 z-10">
                        <h3 className="text-white font-bold text-center text-2xl capitalize">{role} Dashboard</h3>
                    </div>
                    <div className="lg:m-10 m-5">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;