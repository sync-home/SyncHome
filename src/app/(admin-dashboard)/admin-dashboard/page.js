import AllUsers from '@/components/AdminDashboard/AllUsers/AllUsers';

const Allusers = async() => {

    const res = await fetch("http://localhost:5000/users");
    const usersData = await res.json();

    return (
        <div>
            <AllUsers usersData={usersData}></AllUsers>
        </div>
    );
};

export default Allusers;