"use client"
import { Avatar, Card, CardMedia, } from "@mui/material";
import { useEffect, useState } from "react";
import './services.css'
import { FaAngleRight, FaBath, FaHome, FaTv, FaWifi } from "react-icons/fa";
import useAxiosPublic from "@/Hooks/useAxiosPublic";

const ServicesPage = () => {

    const axiosPublic = useAxiosPublic()

    // device controller
    const [isGateVisible, setIsGateVisible] = useState(false);
    const [isGateVisible2, setIsGateVisible2] = useState(false);
    const [isGateVisible3, setIsGateVisible3] = useState(false);
    const [isGateVisible4, setIsGateVisible4] = useState(false);

    useEffect(() => {
        const storedState = localStorage.getItem('isGateVisible');
        if (storedState !== null) {
            setIsGateVisible(storedState === 'true');
        }

        const storedState2 = localStorage.getItem('isGateVisible2');
        if (storedState2 !== null) {
            setIsGateVisible2(storedState2 === 'true');
        }

        const storedState3 = localStorage.getItem('isGateVisible3');
        if (storedState3 !== null) {
            setIsGateVisible3(storedState3 === 'true');
        }

        const storedState4 = localStorage.getItem('isGateVisible4');
        if (storedState4 !== null) {
            setIsGateVisible4(storedState4 === 'true');
        }

    }, []);

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

    const toggleGate = () => {
        const newVisibility = !isGateVisible;
        setIsGateVisible(newVisibility);
        localStorage.setItem('isGateVisible', newVisibility);

        // post the backed side
        const notiData = {
            bgColor: "#6601CB",
            title: `${isGateVisible ? 'Main gate is Close' : 'Main Gate Is Open'}`,
            date: formattedDate,
        }
        axiosPublic.post('/notifications', notiData)
    };

    const toggleGate2 = () => {
        const newVisibility = !isGateVisible2;
        setIsGateVisible2(newVisibility);
        localStorage.setItem('isGateVisible2', newVisibility);

        // post the backed side
        const notiData = {
            bgColor: "#009931",
            title: `${isGateVisible2 ? 'Tv is Off' : 'Tv is On'}`,
            date: formattedDate
        }
        axiosPublic.post('/notifications', notiData)
    };

    const toggleGate3 = () => {
        const newVisibility = !isGateVisible3;
        setIsGateVisible3(newVisibility);
        localStorage.setItem('isGateVisible3', newVisibility);

        // post the backed side
        const notiData = {
            bgColor: "#FF9A01",
            title: `${isGateVisible3 ? 'Wifi is Off' : 'Wifi is On'}`,
            date: formattedDate
        }
        axiosPublic.post('/notifications', notiData)
    };

    const toggleGate4 = () => {
        const newVisibility = !isGateVisible4;
        setIsGateVisible4(newVisibility);
        localStorage.setItem('isGateVisible4', newVisibility);

        // post the backed side
        const notiData = {
            bgColor: "#FF9A01",
            title: `${isGateVisible4 ? 'Bath Tub is Off' : 'Bath Tub is On'}`,
            date: formattedDate
        }
        axiosPublic.post('/notifications', notiData)
    };

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-5 mt-12">
                <div className='lg:col-span-5'>
                    <Card className="w-full px-4 pb-6 pt-3">
                        <h2 className="text-xl mb-2 font-semibold">Home</h2>
                        <CardMedia
                            sx={{ height: 400 }}
                            style={{ display: isGateVisible ? 'block' : 'none' }}
                            image="https://i.ibb.co/BcqS8Cp/scenarios-management-1.jpg"
                            title="Home"
                        />
                        <CardMedia
                            sx={{ height: 400 }}
                            style={{ display: isGateVisible ? 'none' : 'block' }}
                            image="https://i.ibb.co/026wjqw/gate.jpg"
                            title="Gate"
                        />
                    </Card>
                    {/* device controller */}
                    <div>
                        <Card sx={{ minWidth: 275 }} className="mt-12">
                            <h2 className="text-xl font-bold p-2 px-4">Device Control</h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mx-5 my-5">
                                {/* 1st nested card */}
                                <div className={`w-full px-2 h-[160px] rounded-3xl border-2 ${isGateVisible ? 'gateOpen' : 'homeOpen'}`}>
                                    <div className="flex items-center justify-between">
                                        <FaHome className="text-2xl"></FaHome>
                                        <button className="px-3 btn bg-white rounded-full py-2" onClick={toggleGate}>{isGateVisible ? 'Open' : 'Close'}</button>
                                    </div>
                                    <p className="font-medium top-12 relative">Home</p>
                                </div>

                                {/* 2nd nested card */}
                                <div className={`w-full px-2 h-[160px] rounded-3xl border-2 bg-[#F4F1F5] ${isGateVisible2 ? 'gateOpen' : 'homeOpen'}`}>
                                    <div className="flex items-center justify-between">
                                        <FaTv className="text-2xl"></FaTv>
                                        <button className="px-3 btn bg-white rounded-full py-2" onClick={toggleGate2}>{isGateVisible2 ? 'On' : 'Off'}</button>
                                    </div>
                                    <p className="font-medium top-12 relative">Tv</p>
                                </div>

                                {/* 3rd nested card */}
                                <div className={`w-full px-2 h-[160px] rounded-3xl border-2 bg-[#F4F1F5] ${isGateVisible3 ? 'gateOpen' : 'homeOpen'}`}>
                                    <div className="flex items-center justify-between">
                                        <FaWifi className="text-2xl"></FaWifi>
                                        <button className="px-3 btn bg-white rounded-full py-2" onClick={toggleGate3}>{isGateVisible3 ? 'On' : 'Off'}</button>
                                    </div>
                                    <p className="font-medium top-12 relative">Wifi</p>
                                </div>

                                {/* 4th nested card */}
                                <div className={`w-full px-2 h-[160px] rounded-3xl border-2 bg-[#F4F1F5] ${isGateVisible4 ? 'gateOpen' : 'homeOpen'}`}>
                                    <div className="flex items-center justify-between">
                                        <FaBath className="text-2xl"></FaBath>
                                        <button className="px-3 btn bg-white rounded-full py-2" onClick={toggleGate4}>{isGateVisible4 ? 'On' : 'Off'}</button>
                                    </div>
                                    <p className="font-medium top-12 relative">Bath Tub</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                </div>

                <div className='lg:col-span-3'>
                    {/* temperature*/}
                    <div className="bg-[#81D2D8] rounded-lg text-[#fff] shadow-md">
                        <div className="mb-6 px-8">
                            <div className="flex justify-between item-center py-5">
                                <div>
                                    <p>Weather Today</p>
                                    <h2 className="text-3xl font-bold my-1">
                                        24°C
                                    </h2>
                                    <p className="text-xl">Satkhira</p>
                                </div>
                                <div>
                                    <img className="w-[80px]" src="https://i.ibb.co/4Fp6bt4/cloudy-removebg-preview.png" alt="" />
                                    <p className="text-center">Cloudy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* internet */}
                    <div className="flex justify-between gap-5 my-9">
                        <Card className="w-full text-center py-5 rounded-lg">
                            <p>Temperature</p>
                            <h2 className="text-3xl font-bold my-1 text-[#8338EC]">
                                20<small>°C</small>
                            </h2>
                            <p className="font-semibold">Inside</p>
                        </Card>
                        <Card className="w-full text-center py-5 rounded-lg">
                            <p>Internet</p>
                            <h2 className="text-3xl font-bold my-1 text-[#8338EC]">
                                888 <small>GB</small>
                            </h2>
                            <p className="font-semibold">All Device</p>
                        </Card>
                    </div>

                    {/* members section */}
                    <div className="bg-[#F4F1F5] rounded-lg shadow-md">
                        <div className="w-full px-4 pt-3 ">
                            <div className="flex justify-between items-center m-4">
                                <h2 className="text-xl mb-2 font-semibold">Members</h2>
                                <FaAngleRight className="text-xl cursor-pointer"></FaAngleRight>
                            </div>
                            <div className="flex flex-wrap justify-center mb-6 pb-6">
                                <div className="w-[130px] text-center hover:shadow-md hover:bg-[#F4F1F5] p-5 px-7 rounded-xl">
                                    <div className="flex items-center justify-center">
                                        <Avatar
                                            sx={{ width: 56, height: 56 }}
                                            alt="Rayhan" src="https://i.ibb.co/S7vkWYQ/386818474-1561585531046680-9200672624408794087-n.jpg" />
                                    </div>
                                    <h2 className="font-semibold mt-3">Rayhan</h2>
                                    <p>Admin</p>
                                </div>
                                <div className="w-[130px] text-center hover:bg-[#F4F1F5] hover:shadow-md p-5 px-7 rounded-xl">
                                    <div className="flex items-center justify-center">
                                        <Avatar
                                            sx={{ width: 56, height: 56 }}
                                            alt="Rayhan" src="https://i.ibb.co/S7vkWYQ/386818474-1561585531046680-9200672624408794087-n.jpg" />
                                    </div>
                                    <h2 className="font-semibold mt-3">Rayhan</h2>
                                    <p>Employee</p>
                                </div>
                                <div className="w-[130px] text-center hover:bg-[#F4F1F5] hover:shadow-md p-5 px-7 rounded-xl">
                                    <div className="flex items-center justify-center">
                                        <Avatar
                                            sx={{ width: 56, height: 56 }}
                                            alt="Rayhan" src="https://i.ibb.co/S7vkWYQ/386818474-1561585531046680-9200672624408794087-n.jpg" />
                                    </div>
                                    <h2 className="font-semibold mt-3">Rayhan</h2>
                                    <p>Resident</p>
                                </div>
                                <div className="w-[130px] text-center hover:bg-[#F4F1F5] hover:shadow-md p-5 px-7 rounded-xl">
                                    <div className="flex items-center justify-center">
                                        <Avatar
                                            sx={{ width: 56, height: 56 }}
                                            alt="Rayhan" src="https://i.ibb.co/S7vkWYQ/386818474-1561585531046680-9200672624408794087-n.jpg" />
                                    </div>
                                    <h2 className="font-semibold mt-3">Rayhan</h2>
                                    <p>Employee</p>
                                </div>
                                <div className="w-[130px] text-center hover:bg-[#F4F1F5] hover:shadow-md p-5 rounded-xl">
                                    <div className="flex items-center justify-center">
                                        <Avatar
                                            sx={{ width: 56, height: 56 }}
                                            alt="Rayhan" src="https://i.ibb.co/S7vkWYQ/386818474-1561585531046680-9200672624408794087-n.jpg" />
                                    </div>
                                    <h2 className="font-semibold mt-3">Rayhan</h2>
                                    <p>Full Access</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;