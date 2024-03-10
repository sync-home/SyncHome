"use client";
import useGetRole from '@/Hooks/useGetRole';
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar/DashboardSidebar';
import Loader from '@/components/loader/Loader';
import { faHouse, faUser, faUsers, faChartLine, faVideo, faGears, faGear, faCalendar, faTriangleExclamation, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';


const DashboardLayout = ({ children }) => {

    const { role, isLoading, isPending } = useGetRole();


    if (isPending || isLoading) {
        return <Loader loaderOpen={isPending || isLoading} />
    }

    if (!role) {
        return
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
            { 'name': 'Profile', 'path': '/resident-dashboard/profile', 'icon': faUser },
            { 'name': 'Used Energy', 'path': '/resident-dashboard/energy-usage', 'icon': faChartLine },
            { 'name': 'Camera', 'path': '/resident-dashboard/camera', 'icon': faVideo },
            { 'name': 'Apartments', 'path': '/resident-dashboard/my-apartment', 'icon': faHouse },
            { 'name': 'Maintenance Request', 'path': '/resident-dashboard/maintenance-requests', 'icon': faGear },
            { 'name': 'Maintenance Status', 'path': '/resident-dashboard/maintenance-status', 'icon': faGears },
            { 'name': 'Washing Machine', 'path': '/resident-dashboard/washing-machine', 'icon': faClockRotateLeft },
            { 'name': 'Community Events', 'path': '/resident-dashboard/community-events', 'icon': faCalendar },
            { 'name': 'Back to Home', 'path': '/', 'icon': faHouse },
        ];
    } else if (role == 'employee') {
        sidebarData = [
            { 'name': 'Employee Profile', 'path': '/employee-dashboard/profile', 'icon': faUser },
            { 'name': 'Control Room', 'path': '/employee-dashboard/services', 'icon': faHouse },
            { 'name': 'Report', 'path': '/employee-dashboard/Report', 'icon': faTriangleExclamation },
            { 'name': 'Employee Back to Home', 'path': '/', 'icon': faHouse },
        ];
    } else if (role == 'guest') {
        sidebarData = [
            { 'name': 'Guest Profile', 'path': '/guest-dashboard/profile', 'icon': faUser },
            { 'name': 'Request', 'path': '/guest-dashboard/request', 'icon': faUser },
            { 'name': 'Back to Home', 'path': '/', 'icon': faHouse },
        ];
    };


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