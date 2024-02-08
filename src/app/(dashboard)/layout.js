import DashboardSidebar from '@/components/Dashboard/DashboardSidebar/DashboardSidebar';
import { faHouse, faUser, faUsers, faChartLine, faVideo } from '@fortawesome/free-solid-svg-icons';

const DashboardLayout = ({ children }) => {

    const adminSidebarData = [
        {'name': 'Profile', 'path': '/admin-dashboard/profile', 'icon': faUser},
        {'name': 'All Users', 'path': '/admin-dashboard/all-users', 'icon': faUsers},
        {'name': 'Energy', 'path': '/admin-dashboard/energy', 'icon': faChartLine},
        {'name': 'Camera', 'path': '/admin-dashboard/camera', 'icon': faVideo},
        {'name': 'Apartments', 'path': '/admin-dashboard/apartments', 'icon': faHouse},
        {'name': 'Back to Home', 'path': '/', 'icon': faHouse},
        {'name': 'Control Room', 'path': '/employee-dashboard/services', 'icon': faHouse},
    ];

    return (
        <>
            <div className="flex">
                <div className="m-0 p-0">
                    <DashboardSidebar adminSidebarData={adminSidebarData} />
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

export default DashboardLayout;