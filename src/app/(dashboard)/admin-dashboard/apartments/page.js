"use client";

import useAuthContext from '@/Hooks/useAuthContext';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import AcMode from '@/components/Dashboard/ApartmentsElement/AcMode';
import ApartEnergyGraph from '@/components/Dashboard/ApartmentsElement/ApartEnergyGraph';
import ApartSwitch from '@/components/Dashboard/ApartmentsElement/ApartSwitch';
import CctvCamera from '@/components/Dashboard/ApartmentsElement/CctvCamera';
import TempControl from '@/components/Dashboard/ApartmentsElement/TempControl';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaChild, FaFemale, FaMale } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';



const Apartments = () => {

    const axiosPublic = useAxiosPublic();
    const { user, loading } = useAuthContext();
    const [apartSelect, setApartSelect] = useState('Apartment - 101');
    const [useData, setUseData] = useState('week');

    const { data: apartData = [], refetch, isPending, isLoading } = useQuery({
        enabled: !loading && !!user,
        queryKey: ['apartments', `${user?.email}`],
        queryFn: async () => {
            const res = await axiosPublic.get('/apartments');
            return res?.data;
        }
    });



    const apart = {
        "id": 1,
        "name": "Apartment - 101",
        "email": "shahidul@gmail.com",
        "devices": [
            { "name": "Smart Lamp", "brand": "Panasonic", "img": "https://i.ibb.co/7N5VQxX/xiomi-router", "status": true },
            { "name": "Air Purifier", "brand": "Philips", "img": "https://i.ibb.co/7N5VQxX/xiomi-router", "status": false }
        ],
        "ac": { "status": true, "temp": 25, "mode": "auto" },
        "cctv": { "bedroom": "JUfIpZCYquY?si=TgMBRi-lZuwTQAED", "front": "JUfIpZCYquY?si=TgMBRi-lZuwTQAED", "kitchen": "JUfIpZCYquY?si=TgMBRi-lZuwTQAED", "drawing": "JUfIpZCYquY?si=TgMBRi-lZuwTQAED" },
        "router": { "name": "Smart Router", "brand": "Xiomi", "img": "https://i.ibb.co/7N5VQxX/xiomi-router", "status": true },
        "wifi": 995,
        "members": { "male": 1, "female": 1, "child": 2 },
        "energy_usage": [
            { "duration": "Last 7 Days", "electricity": 300, "water": 10498, "gas": 1.39 },
            { "duration": "Last 30 Days", "electricity": 1200, "water": 40569, "gas": 6.31 },
            { "duration": "Current Year", "electricity": 14400, "water": 486828, "gas": 75.72 },
        ],
        "usageData": [
            { "day": "Monday", "electricity": 30, "water": 20, "gas": 15 },
            { "day": "Tuesday", "electricity": 40, "water": 25, "gas": 20 },
            { "day": "Wednesday", "electricity": 50, "water": 30, "gas": 25 },
            { "day": "Thursday", "electricity": 45, "water": 35, "gas": 30 },
            { "day": "Friday", "electricity": 55, "water": 40, "gas": 35 },
            { "day": "Saturday", "electricity": 60, "water": 45, "gas": 40 },
            { "day": "Sunday", "electricity": 50, "water": 40, "gas": 35 }
        ]
    };


    const usageData = [
        { "day": "Monday", "electricity": 30, "water": 20, "gas": 15 },
        { "day": "Tuesday", "electricity": 40, "water": 25, "gas": 20 },
        { "day": "Wednesday", "electricity": 50, "water": 30, "gas": 25 },
        { "day": "Thursday", "electricity": 45, "water": 35, "gas": 30 },
        { "day": "Friday", "electricity": 55, "water": 40, "gas": 35 },
        { "day": "Saturday", "electricity": 60, "water": 45, "gas": 40 },
        { "day": "Sunday", "electricity": 50, "water": 40, "gas": 35 }
    ];

    const handleOption = e => {
        setApartSelect(e?.target?.value);
    }

    const handleUsageData = e => {
        setUseData(e?.target?.value);
    }

    return (
        <div>
            {
                isPending || isLoading ? <p>Website is Loading</p> : apartData?.length ? <><div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md mb-5 flex lg:flex-row flex-col justify-center lg:justify-between'>
                <h4 className='font-bold uppercase text-xl text-[#363636]'>Total Apartment : {apartData?.length}</h4>
                <select onChange={handleOption} style={{ border: '1px solid #ddd' }} className='px-5 rounded-md py-1 outline-0'>
                    {
                        apartData?.map((item, idx) => (
                            <option
                                key={idx}
                                value={item?.name}
                            >{item?.name}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                {
                    apartData?.filter(items => items?.name == apartSelect).map((item, idx) => (
                        <div key={idx}>
                            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                                <div className='lg:col-span-2'>
                                    <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md mb-5'>
                                        <div className='flex justify-between items-center mb-5'>
                                            <h4 className='font-bold text-[#363636]'>Quick Access</h4>
                                            <button className='bg-[#8338ec] flex gap-2 items-center text-sm px-4 hover:bg-sky-400 transition-all ease-linear py-1 rounded-full text-white'><FaPlus /> Add Device</button>
                                        </div>
                                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-2'>

                                            {
                                                item?.devices?.map((device, idx) => (
                                                    <div
                                                        key={idx}
                                                        style={{ border: '1px solid #ddd' }}
                                                        className='grid grid-cols-3 gap-2 items-center shadow-md rounded-md px-5 py-3'>
                                                        <div className='col-span-2'>
                                                            <h4 className='font-semibold text-[#363636] text-sm'>{device?.name}</h4>
                                                            <p className='text-xs text-gray-600 mb-5'>{device?.brand}</p>
                                                            <ApartSwitch val={device?.status} />
                                                        </div>
                                                        <div>
                                                            <Image height={100} width={100} src={`${device?.img}`} alt={`${device?.name}`} />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md grid lg:grid-cols-3 grid-cols-1 gap-5'>
                                        <div className='lg:col-span-2'>
                                            <h4 className='font-bold text-[#363636] mb-5'>CCTV Camera</h4>
                                            <div>
                                                <CctvCamera cameraInfo={item?.cctv} />
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <h4 className='font-bold text-[#363636] mb-5'>WiFi Control</h4>
                                                <div style={{ border: '1px solid #ddd' }} className='grid grid-cols-3 gap-2 items-center shadow-md rounded-md px-5 py-3'>
                                                    <div className='col-span-2'>
                                                        <h4 className='font-semibold text-[#363636] text-sm'>{item?.router?.name}</h4>
                                                        <p className='text-xs text-gray-500 mb-5'>{item?.router?.brand}</p>
                                                        <ApartSwitch val={item?.router?.status} />
                                                    </div>
                                                    <div>
                                                        <Image height={100} width={100} src={`${item?.router?.img}`} alt={`${item?.router?.name}`} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-10'>
                                                <h4 className='font-bold text-[#363636] mb-5'>Weekly WiFi Usage</h4>
                                                <div style={{ border: '1px solid #ddd' }} className='shadow-md rounded-md px-5 py-3'>
                                                    <div className='text-center'>
                                                        <h4 className='font-semibold text-[#363636] text-sm'>Total Devices : 4</h4>
                                                        <p className='text-gray-500 mt-2'>Total Usage</p>
                                                        <p className='text-xl font-bold text-[#363636]'>{item?.wifi} GB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md mb-5'>
                                        <h4 className='font-bold text-[#363636] mb-5'>Temperature Control</h4>
                                        <TempControl temp={item?.ac} />
                                        <div className='flex justify-between mt-5'>
                                            <div>
                                                <h4 className='font-semibold text-[#363636] text-sm'>Air Conditionar</h4>
                                                <p className='text-xs text-gray-500 mb-5'>LG Dualcool Inverter</p>
                                            </div>
                                            <div>
                                                <ApartSwitch val={item?.ac?.status} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-[#363636] text-sm mb-5'>Modes</h4>
                                            <div>
                                                <AcMode val={item?.ac?.mode} />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md mb-5'>
                                        <h4 className='font-bold text-[#363636] mb-5'>Total Family Members</h4>
                                        <div>
                                            <div className=''>
                                                <div style={{ border: '1px solid #ddd' }} className='rounded-md p-2 font-semibold text-sm flex items-center gap-2 text-[#21b0fe]'>
                                                    <FaMale />
                                                    Male : {item?.members?.male}
                                                </div>
                                                <div style={{ border: '1px solid #ddd' }} className='rounded-md p-2 my-2 font-semibold text-[#fe218b] text-sm flex items-center gap-2'>
                                                    <FaFemale />
                                                    Female : {item?.members?.female}
                                                </div>
                                                <div style={{ border: '1px solid #ddd' }} className='rounded-md p-2 font-semibold text-[#0d3b66] text-sm flex items-center gap-2'>
                                                    <FaChild />
                                                    Child : {item?.members?.child}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md mt-5'>
                                <div className='flex justify-between flex-wrap'>
                                    <h4 className='font-bold text-[#363636] mb-5'>Total Energy Usage</h4>
                                    <select onChange={handleUsageData} style={{ border: '1px solid #ddd' }} className='rounded-full text-sm px-5 outline-0'>
                                        {
                                            item?.energy_usage?.map((energy, idx) => (
                                                <option
                                                    key={idx}
                                                    value={`${energy?.duration}`}>{energy?.duration}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div>
                                    {
                                        item?.energy_usage?.filter(data => data?.duration == useData).map((erergyData, idx) => (
                                            <div
                                                key={idx}
                                                className='flex justify-center flex-wrap my-5 gap-10'>
                                                <div style={{ border: '1px solid #ddd' }} className='items-center shadow-md rounded-md px-5 py-3'>
                                                    <h4 className='font-semibold text-[#363636]'>Total Electricity Usage</h4>
                                                    <p className='font-bold text-center text-2xl text-[#363636]'>{erergyData?.electricity} kWh</p>
                                                </div>
                                                <div style={{ border: '1px solid #ddd' }} className='items-center shadow-md rounded-md px-5 py-3'>
                                                    <h4 className='font-semibold text-[#363636]'>Total Water Usage</h4>
                                                    <p className='font-bold text-center text-2xl text-[#363636]'>{erergyData?.water} Liters</p>
                                                </div>
                                                <div style={{ border: '1px solid #ddd' }} className='items-center shadow-md rounded-md px-5 py-3'>
                                                    <h4 className='font-semibold text-[#363636]'>Total Gas Usage</h4>
                                                    <p className='font-bold text-center text-2xl text-[#363636]'>{erergyData?.gas} MMBtu</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    <h4 className='font-bold text-[#363636] my-5 text-center'>Weekly Energy Usage Analytics</h4>
                                    <ApartEnergyGraph data={item?.usageData} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div></> : <p>Data not found, something wrong in the server</p>
            }
        </div>
    );
};

export default Apartments;