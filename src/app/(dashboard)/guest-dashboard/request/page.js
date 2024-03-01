"use client";
import useAuthContext from '@/Hooks/useAuthContext';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const GuestRequest = () => {

    const { user } = useAuthContext();
    const axiosPublic = useAxiosPublic();

    // Fetch User data from database
    const { data: reqData = {}, isLoading, isPending} = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/request/${user?.email}`);
            return res?.data;
        }
    })

    console.log(reqData);

    const handleResident = () => {
        Swal.fire({
            text: "Do you want to be a resident?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then((result) => {
            const userInfo = {
                email: user?.email,
                role: 'resident',
                status: 'pending'
            }

            if (result.isConfirmed) {
                axiosPublic.post('/requests', userInfo)
                    .then(result => {
                        console.log(result.data)
                        Swal.fire({
                            text: "Your request send to the admin",
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        });
    }

    const handleEmployee = () => {
        Swal.fire({
            text: "Do you want to be a employee?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then((result) => {
            const userInfo = {
                email: user?.email,
                role: 'employee',
                status: 'pending'
            }
            if (result.isConfirmed) {
                axiosPublic.post('/requests', userInfo)
                    .then(result => {
                        console.log(result.data)
                        Swal.fire({
                            text: "Your request send to the admin",
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        });
    }

    return (
        <div>
            <h3 className='text-center font-bold text-2xl text-[#363636]'>Request to Become a Resident or Employee</h3>
            <p className='text-center '>Welcome to our request page! Whether you are interested in becoming a resident or joining our team as an employee, you are in the right place. Please send a request to admin to submit your request</p>
            <div className='bg-[rgba(109,0,255,0.2)] my-10 border-2 border-[#8338EC] rounded-md flex justify-between items-center flex-wrap gap-5'>
                <p className='ml-5 font-semibold'>I want to become a resident</p>
                <button onClick={handleResident} className='btn bg-[#8338EC] px-4 py-2 rounded-md text-white' >Resident</button>
                <p className='px-5 rounded-sm w-full py-4 border-2 text-white border-[#8338EC] bg-[#8338EC]'>Status : {reqData?.role == 'resident' ? reqData?.status : 'N/A'}</p>
            </div>
            <div className='bg-[rgba(109,0,255,0.2)] border-2 border-[#8338EC] rounded-md flex justify-between items-center flex-wrap gap-5'>
                <p className='ml-5 font-semibold'>I want to become a employee</p>
                <button onClick={handleEmployee} className='btn bg-[#8338EC] px-4 py-2 rounded-md text-white' >Employee</button>
                <p className='px-5 rounded-sm w-full py-4 border-2 text-white border-[#8338EC] bg-[#8338EC]'>Status : {reqData?.role == 'employee' ? reqData?.status : 'N/A'}</p>
            </div>
        </div>
    );
};

export default GuestRequest;