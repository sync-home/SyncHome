import AdminSidebar from "@/components/AdminDashboard/AdminSidebar/AdminSidebar";
import { faHouse, faUser, faUsers, faChartLine, faVideo } from '@fortawesome/free-solid-svg-icons';

const AdminLayout = ({ children }) => {

    const adminSidebarData = [
        {'name': 'Home', 'path': '/', 'icon': faHouse},
        {'name': 'Profile', 'path': '/admin-dashboard/profile', 'icon': faUser},
        {'name': 'All Users', 'path': '/admin-dashboard/all-users', 'icon': faUsers},
        {'name': 'Energy', 'path': '/admin-dashboard/energy', 'icon': faChartLine},
        {'name': 'Camera', 'path': '/admin-dashboard/camera', 'icon': faVideo}
    ]

    return (
        <>
            <div className="flex">
                <div className="m-0 p-0">
                    <AdminSidebar adminSidebarData={adminSidebarData}></AdminSidebar>
                </div>
                <div className="flex-1 h-screen overflow-y-scroll">
                    <div className="bg-[#6962AD] py-3 w-full sticky top-0 z-10">
                        <h3 className="text-white font-bold text-center text-2xl">Admin Dashboard</h3>
                    </div>
                    <div className="lg:m-10 m-5">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;