import AdminSidebar from "@/components/AdminDashboard/AdminSidebar/AdminSidebar";


const AdminLayout = ({ children }) => {
    return (
        <div>
            <div className="flex gap-0">
                <div className="h-screen bg-[#8338ec]">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="flex-1 h-screen overflow-y-scroll">
                    <div className="bg-[#6962AD] py-3 w-full sticky top-0 z-10">
                        <h3 className="text-white font-bold text-center text-2xl">Admin Dashboard</h3>
                    </div>
                    <div className="m-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;