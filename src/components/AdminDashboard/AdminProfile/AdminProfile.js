import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { FaLocationDot, FaPhone, FaRegCircleUser, FaRegEnvelope } from "react-icons/fa6";

const AdminProfile = ({ adminData }) => {
    return (
        <div style={{background: 'linear-gradient(180deg, #ffffff 100%, #0093E9 0%)'}}>
            <Box sx={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)', height: '150px', width: '100%', position: 'relative' }}>
                <div className='h-[120px] absolute top-20 left-10 w-[120px] rounded-full flex justify-center items-center bg-white'>
                    <Image className='rounded-full border-2 border-[#96E9C6]' src={adminData.photo} alt="admin photo" height={100} width={100} />
                </div>
            </Box>
            <div className='mt-16 flex gap-10'>
                <div className='flex-1'>
                    <h4 className='font-semibold'>{adminData.name}</h4>
                    <p className='font-semibold my-3'>{adminData.address}</p>
                    <div className='flex gap-3 font-semibold'>
                        <p>Age : {adminData.age}</p>|
                        <p>Gender : {adminData.gender}</p>|
                        <p>Status : <span className='text-green-500'>{adminData.status}</span></p>
                    </div>
                    <div className='flex mt-10 gap-20'>
                        <div className='space-y-5'>
                            <h3 className='flex gap-2 items-center font-bold text-[#363636]'><FaRegCircleUser /> Role</h3>
                            <h3 className='flex gap-2 items-center font-bold text-[#363636]'><FaRegEnvelope /> Email</h3>
                            <h3 className='flex gap-2 items-center font-bold text-[#363636]'><FaPhone /> Phone</h3>
                            <h3 className='flex gap-2 items-center font-bold text-[#363636]'><FaLocationDot /> Region</h3>
                        </div>
                        <div className='space-y-5'>
                            <p>: {adminData.role}</p>
                            <p>: {adminData.email}</p>
                            <p>: {adminData.phone}</p>
                            <p>: {adminData.region}</p>
                        </div>
                    </div>
                </div>
                <div style={{ border: '1px solid black' }} className='flex-1 p-5'>
                    <h3 className='font-bold text-[#363636] text-xl mb-5'>Login Activity</h3>
                    <hr />
                    {
                        adminData.login_activity.map((data, idx) => (
                            <>
                                <div key={idx} className='py-2 flex gap-5'>
                                    <span>{idx + 1}.</span>
                                    <span>Logged in at </span>
                                    <span>Date : {data.date}</span>
                                    <span>Time : {data.time}</span>
                                </div>
                                <hr />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;