import AllUsers from '@/components/Dashboard/AdminDashboard/AllUsers/AllUsers';
import React from 'react';

const AllUser = async() => {

    const usersData=[
        {
            "id": 1,
            "photo": "https://i.ibb.co/GMyxHDY/demo.jpg",
            "name": "John Doe",
            "role": "resident",
            "email": "john@example.com",
            "phone": "+1234567890"
        },
        {
            "id": 2,
            "photo": "https://i.ibb.co/GMyxHDY/demo.jpg",
            "name": "Jane Smith",
            "role": "resident",
            "email": "jane@example.com",
            "phone": "+1987654321"
        },
        {
            "id": 3,
            "photo": "https://i.ibb.co/GMyxHDY/demo.jpg",
            "name": "Alice Johnson",
            "role": "resident",
            "email": "alice@example.com",
            "phone": "+1122334455"
        },
        {
            "id": 4,
            "photo": "https://i.ibb.co/GMyxHDY/demo.jpg",
            "name": "Bob Williams",
            "role": "resident",
            "email": "bob@example.com",
            "phone": "+1555666777"
        },
        {
            "id": 5,
            "photo": "https://i.ibb.co/GMyxHDY/demo.jpg",
            "name": "Emily Brown",
            "role": "resident",
            "email": "emily@example.com",
            "phone": "+1444333222"
        },
        {
            "id": 6,
            "photo": "https://i.ibb.co/GMyxHDY/demo.jpg",
            "name": "Michael Davis",
            "role": "resident",
            "email": "michael@example.com",
            "phone": "+1666777888"
        },
        {
            "id": 7,
            "photo": "https://i.ibb.co/GMyxHDY/demo.jpg",
            "name": "Sarah Wilson",
            "role": "resident",
            "email": "sarah@example.com",
            "phone": "+1777888999"
        },
        {
            "id": 8,
            "photo": "https://i.ibb.co/GMyxHDY/demo.jpg",
            "name": "David Lee",
            "role": "resident",
            "email": "david@example.com",
            "phone": "+1888999000"
        },
        {
            "id": 9,
            "photo": "https://i.ibb.co/GMyxHDY/demo.jpg",
            "name": "Karen Martinez",
            "role": "resident",
            "email": "karen@example.com",
            "phone": "+1999000111"
        }
    ]

    return (
        <div>
            <AllUsers usersData={usersData} />
        </div>
    );
};

export default AllUser;