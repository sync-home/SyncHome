import DashboardProfile from "@/components/Dashboard/DashboardProfile/DashboardProfile";

const GuestProflie = () => {
    const users = {
        "photo": "https://i.ibb.co/GMyxHDY/demo.jpg",
        "name": "Md Neamul Hoqe",
        "address": "N/A",
        "age": "N/A",
        "gender": "N/A",
        "status": "Active",
        "role": "Guest",
        "email": "neamul@gmail.com",
        "phone": "N/A",
        "region": "N/A",
        "login_activity": [
            {"date":"N/A", "time":"N/A"}, 
            {"date":"N/A", "time":"N/A"}, 
            {"date":"N/A", "time":"N/A"}
        ]
    }

    return (
        <div>
            <DashboardProfile adminData={users} />
        </div>
    );
};

export default GuestProflie;