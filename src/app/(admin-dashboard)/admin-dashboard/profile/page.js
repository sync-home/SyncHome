import AdminProfile from "@/components/AdminDashboard/AdminProfile/AdminProfile";


const Profile = () => {

    const users = {
        "photo": "https://i.ibb.co/GMyxHDY/demo.jpg",
        "name": "Alice Smith",
        "address": "789 Oak St, Village, Country",
        "age": 35,
        "gender": "Male",
        "status": "Active",
        "role": "Admin",
        "email": "alice.smith@example.com",
        "phone": "+1122334455",
        "region": "Asia",
        "login_activity": [
            {"date":"05-02-2024", "time":"10.00 am"}, 
            {"date":"05-02-2024", "time":"10.00 am"}, 
            {"date":"05-02-2024", "time":"10.00 am"}
        ]
    }

    return (
        <div>
            <AdminProfile adminData={users}></AdminProfile>
        </div>
    );
};

export default Profile;