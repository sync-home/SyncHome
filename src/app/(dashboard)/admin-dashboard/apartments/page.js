"use client";

import useAuthContext from '@/Hooks/useAuthContext';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import ApartEnergyGraph from '@/components/Dashboard/ApartmentsElement/ApartEnergyGraph';
import CctvCamera from '@/components/Dashboard/ApartmentsElement/CctvCamera';
import AcDialog from '@/components/Dashboard/ApartmentsElement/Dialog/AcDialog';
import CctvDialog from '@/components/Dashboard/ApartmentsElement/Dialog/CctvDialog';
import DeviceDialog from '@/components/Dashboard/ApartmentsElement/Dialog/DeviceDialog';
import FamilyDialog from '@/components/Dashboard/ApartmentsElement/Dialog/FamilyDialog';
import TotalEnergyDialog from '@/components/Dashboard/ApartmentsElement/Dialog/TotalEnergyDialog';
import WeeklyDialog from '@/components/Dashboard/ApartmentsElement/Dialog/WeeklyDialog';
import WifiDialog from '@/components/Dashboard/ApartmentsElement/Dialog/WifiDialog';
import Loader from '@/components/loader/Loader';
import { Button } from '@mui/joy';
import Switch from '@mui/joy/Switch';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaChild, FaFan, FaFemale, FaMale, FaMinus, FaSun, FaTrashAlt, FaWind } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';


const Apartments = () => {
    const { user, loading } = useAuthContext();

    const axiosPublic = useAxiosPublic();
    const [ apartSelect, setApartSelect ] = useState('Apartment - 101');
    const [ useData, setUseData ] = useState('week');
    const [ tempControl, setTmpControl ] = useState(0);
    const [ tempId, setTempId ] = useState('');

    //dialog
    const [ addDeviceOpen, setAddDeviceOpen ] = React.useState(false);
    const [ cctvOpen, setCctvOpen ] = React.useState(false);
    const [ wifiOpen, setWifiOpen ] = React.useState(false);
    const [ familyOpen, setFamilyOpen ] = React.useState(false);
    const [ weeklyOpen, setWeeklyOpen ] = React.useState(false);
    const [ totalEnergyOpen, setTotalEnergyOpen ] = React.useState(false);
    const [ acOpen, setAcOpen ] = React.useState(false);
    const [ sendId, setSendId ] = useState('');

    console.log(user, loading)
    const { data: apartData = [], refetch, isPending, isLoading } = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: [ 'apartments', `${user?.email}` ],
        queryFn: async () => {
            const res = await axiosPublic.get(`/apartments?${user?.email}`);
            console.log(res?.data);
            return res?.data;
        }
    });



    const handleModeChange = (newMode, id) => {
        if (newMode !== null) {
            axiosPublic.patch(`apartments/acmode/${id}`, { newMode })
                .then(result => {
                    // console.log(result.data)
                    refetch();
                })
                .catch(error => {
                    // console.log(error)
                })
        }
    };


    useEffect(() => {
        axiosPublic.patch(`/apartments/actemp/${tempId}`, { tempControl })
            .then(result => {
                // console.log(result.data)
                refetch();
            })
            .catch(error => {
                // console.log(error)
            })
    }, [ tempControl ])

    const handlePlus = (temp, id) => {
        if (temp < 100) {
            setTmpControl(parseInt(temp) + 5)
            setTempId(id);
        }
    }
    const handleMinus = (temp, id) => {
        if (temp > 0) {
            setTmpControl(parseInt(temp) - 5)
            setTempId(id);
        }
    }

    // const apart = {
    //     "id": 1,
    //     "name": "Apartment - 101",
    //     "email": "shahidul@gmail.com",
    //     "devices": [
    //         { "name": "Smart Lamp", "brand": "Panasonic", "img": "https://i.ibb.co/7N5VQxX/xiomi-router", "status": true },
    //         { "name": "Air Purifier", "brand": "Philips", "img": "https://i.ibb.co/7N5VQxX/xiomi-router", "status": false }
    //     ],
    //     "ac": { "status": true, "temp": 25, "mode": "auto", "name": "Air Conditional", "brand": "LG Dualcool Inverter" },
    //     "cctv": { "bedroom": "JUfIpZCYquY?si=TgMBRi-lZuwTQAED", "front": "JUfIpZCYquY?si=TgMBRi-lZuwTQAED", "kitchen": "JUfIpZCYquY?si=TgMBRi-lZuwTQAED", "drawing": "JUfIpZCYquY?si=TgMBRi-lZuwTQAED" },
    //     "router": { "name": "Smart Router", "brand": "Xiomi", "img": "https://i.ibb.co/7N5VQxX/xiomi-router", "status": true },
    //     "wifi": 995,
    //     "members": { "male": 1, "female": 1, "child": 2 },
    //     "energy_usage": [
    //         { "duration": "week", "electricity": 300, "water": 10498, "gas": 1.39 },
    //         { "duration": "month", "electricity": 1200, "water": 40569, "gas": 6.31 },
    //         { "duration": "year", "electricity": 14400, "water": 486828, "gas": 75.72 },
    //     ],
    //     "usageData": [
    //         { "day": "Monday", "electricity": 30, "water": 20, "gas": 15 },
    //         { "day": "Tuesday", "electricity": 40, "water": 25, "gas": 20 },
    //         { "day": "Wednesday", "electricity": 50, "water": 30, "gas": 25 },
    //         { "day": "Thursday", "electricity": 45, "water": 35, "gas": 30 },
    //         { "day": "Friday", "electricity": 55, "water": 40, "gas": 35 },
    //         { "day": "Saturday", "electricity": 60, "water": 45, "gas": 40 },
    //         { "day": "Sunday", "electricity": 50, "water": 40, "gas": 35 }
    //     ]
    // };
    // const usageData = [
    //     { "day": "Monday", "electricity": 30, "water": 20, "gas": 15 },
    //     { "day": "Tuesday", "electricity": 40, "water": 25, "gas": 20 },
    //     { "day": "Wednesday", "electricity": 50, "water": 30, "gas": 25 },
    //     { "day": "Thursday", "electricity": 45, "water": 35, "gas": 30 },
    //     { "day": "Friday", "electricity": 55, "water": 40, "gas": 35 },
    //     { "day": "Saturday", "electricity": 60, "water": 45, "gas": 40 },
    //     { "day": "Sunday", "electricity": 50, "water": 40, "gas": 35 }
    // ];

    const handleOption = e => {
        setApartSelect(e?.target?.value);
        refetch();
    }

    const handleUsageData = e => {
        setUseData(e?.target?.value);
    }

    const handleAddDeviceOpen = (id) => {
        setAddDeviceOpen(true);
        setSendId(id);
    };

    const handleCctvOpen = (id) => {
        setCctvOpen(true);
        setSendId(id);
    }

    const handleWifiOpen = (id) => {
        setWifiOpen(true);
        setSendId(id);
    }

    const handleFamilyOpen = (id) => {
        setFamilyOpen(true);
        setSendId(id);
    }

    const handleWeeklyOpen = (id) => {
        setWeeklyOpen(true);
        setSendId(id);
    }

    const handleTotalEnergyOpen = (id) => {
        setTotalEnergyOpen(true);
        setSendId(id);
    }

    const handleAcOpen = (id) => {
        setAcOpen(true);
        setSendId(id);
    }

    // Device Delete
    const handleDeleteDevice = (id, index) => {
        // console.log(id, index)
        axiosPublic.put(`/apartments/del-device/${id}`, { index })
            .then(result => {
                // console.log(result.data)
                refetch();
            })
            .catch(error => {
                // console.log(error)
            })
    }

    // Update Switch
    const handleDeviceSwitch = (id, index, value) => {
        value = !value;
        // console.log(id, index, value)
        axiosPublic.put(`/apartments/device-switch/${id}`, { index, value })
            .then(result => {
                // console.log(result)
                refetch();
            })
            .catch(error => {
                // console.log(error)
            })
    }

    const handleSimpleSwitch = (id, name, value) => {
        value = !value;
        // console.log(id, name, value)
        axiosPublic.put(`/apartments/simple-switch/${id}`, { name, value })
            .then(result => {
                // console.log(result)
                refetch();
            })
            .catch(error => {
                // console.log(error)
            })
    }

    return (
        <div>
            {
                isPending || isLoading ? <Loader loaderOpen={isPending || isLoading} />
                    : apartData?.length ?
                        <>
                            <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md mb-5 flex lg:flex-row flex-col justify-center lg:justify-between'>
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
                                                            <button onClick={() => handleAddDeviceOpen(item._id)} className='bg-[#8338ec] flex gap-2 items-center text-sm px-3 hover:bg-sky-400 transition-all ease-linear py-1 rounded-full text-white'><FaPlus /> Add Device</button>
                                                        </div>
                                                        <div className='grid md:grid-cols-3 grid-cols-1 gap-2'>

                                                            {
                                                                item?.devices?.map((device, idx) => (
                                                                    <div
                                                                        key={idx}
                                                                        style={{ border: '1px solid #ddd' }}
                                                                        className='grid grid-cols-3 gap-2 items-center shadow-md rounded-md px-5 py-3 relative'>
                                                                        <div className='col-span-2'>
                                                                            <h4 className='font-semibold text-[#363636] text-sm'>{device?.name}</h4>
                                                                            <p className='text-xs text-gray-600 mb-5'>{device?.brand}</p>
                                                                            <span>
                                                                                <Switch sx={device?.status && {
                                                                                    '& .MuiSwitch-thumb': { backgroundColor: '#fff', border: '1px solid #fff' }, '& .MuiSwitch-track': { backgroundColor: '#8338ec' }
                                                                                }}
                                                                                    variant="solid"
                                                                                    size="lg"
                                                                                    checked={device?.status}
                                                                                    onChange={() => handleDeviceSwitch(item?._id, idx, device?.status)}
                                                                                />
                                                                            </span>
                                                                        </div>
                                                                        <div>
                                                                            <span onClick={() => handleDeleteDevice(item?._id, idx)} style={{ boxShadow: '0px 0px 2px #363636' }} className='absolute top-2 text-[#aaa] cursor-pointer hover:bg-[#8338EC] hover:text-white p-1 text-sm rounded-full right-2'><FaTrashAlt /></span>
                                                                            <Image height={100} width={100} src={`${device?.img ? device?.img : 'https://i.ibb.co/17HHBsG/tailwind.png'}`} alt={`${device?.name}`} />
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>

                                                    <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md grid lg:grid-cols-3 grid-cols-1 gap-5'>
                                                        <div className='lg:col-span-2'>
                                                            <div className='flex justify-between items-center mb-5'>
                                                                <h4 className='font-bold text-[#363636]'>CCTV Camera</h4>
                                                                <button onClick={() => handleCctvOpen(item._id)} className='bg-[#8338ec] flex gap-2 items-center text-sm px-3 hover:bg-sky-400 transition-all ease-linear py-1 rounded-full text-white'><FaPlus />CCTV</button>
                                                            </div>
                                                            <div>
                                                                <CctvCamera cameraInfo={item?.cctv} />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <div className='flex justify-between items-center mb-5'>
                                                                    <h4 className='font-bold text-[#363636]'>WiFi Control</h4>
                                                                    <button onClick={() => handleWifiOpen(item._id)} className='bg-[#8338ec] flex gap-2 items-center text-sm p-2 hover:bg-sky-400 transition-all ease-linear rounded-full text-white'><FaPlus /></button>
                                                                </div>
                                                                <div style={{ border: '1px solid #ddd' }} className='grid grid-cols-3 gap-2 items-center shadow-md rounded-md px-5 py-3'>
                                                                    <div className='col-span-2'>
                                                                        <h4 className='font-semibold text-[#363636] text-sm'>{item?.router?.name}</h4>
                                                                        <p className='text-xs text-gray-500 mb-5'>{item?.router?.brand}</p>
                                                                        <span>
                                                                            <Switch sx={item?.router?.status && {
                                                                                '& .MuiSwitch-thumb': { backgroundColor: '#fff', border: '1px solid #fff' }, '& .MuiSwitch-track': { backgroundColor: '#8338ec' }
                                                                            }}
                                                                                variant="solid"
                                                                                size="lg"
                                                                                checked={item?.router?.status}
                                                                                onChange={() => handleSimpleSwitch(item?._id, 'router', item?.router?.status)}
                                                                            />
                                                                        </span>
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
                                                        <div className='flex justify-between items-center mb-5'>
                                                            <h4 className='font-bold text-[#363636]'>Temperature Control</h4>
                                                            <button onClick={() => handleAcOpen(item._id)} className='bg-[#8338ec] flex gap-2 items-center text-sm p-2 hover:bg-sky-400 transition-all ease-linear rounded-full text-white'><FaPlus /></button>
                                                        </div>

                                                        <div>
                                                            <div>
                                                                <div style={{ boxShadow: '0px 0px 8px #ccc' }} className="h-40 w-40 flex mb-5 items-center justify-center text-2xl font-bold rounded-full mx-auto">
                                                                    <div className='h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center'>
                                                                        <p>{item?.ac?.temp}°C</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Box sx={{ width: 250, marginX: 'auto' }}>
                                                                <div className="flex justify-center gap-10">
                                                                    <div>
                                                                        <Button onClick={() => handlePlus(item?.ac?.temp, item?._id)} sx={{ backgroundColor: '#8338EC' }}><FaPlus /></Button>
                                                                    </div>
                                                                    <div>
                                                                        <Button onClick={() => handleMinus(item?.ac?.temp, item?._id)} sx={{ backgroundColor: '#8338EC' }}><FaMinus /></Button>
                                                                    </div>
                                                                </div>
                                                            </Box>
                                                        </div>
                                                        <div className='flex justify-between mt-5'>
                                                            <div>
                                                                <h4 className='font-semibold text-[#363636] text-sm'>{item?.ac?.name}</h4>
                                                                <p className='text-xs text-gray-500 mb-5'>{item?.ac?.brand}</p>
                                                            </div>
                                                            <div>
                                                                <span>
                                                                    <Switch sx={item?.ac?.status && {
                                                                        '& .MuiSwitch-thumb': { backgroundColor: '#fff', border: '1px solid #fff' }, '& .MuiSwitch-track': { backgroundColor: '#8338ec' }
                                                                    }}
                                                                        variant="solid"
                                                                        size="lg"
                                                                        checked={item?.ac?.status}
                                                                        onChange={() => handleSimpleSwitch(item?._id, 'ac', item?.ac?.status)}
                                                                    />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className='font-semibold text-[#363636] text-sm mb-5'>Modes</h4>

                                                            <div>
                                                                <ToggleButtonGroup
                                                                    value={item?.ac?.mode}
                                                                    exclusive
                                                                    onChange={(e) => handleModeChange(e.target.value, item?._id)}
                                                                    aria-label="text alignment"
                                                                >
                                                                    <ToggleButton
                                                                        value="auto"
                                                                        aria-label="auto"
                                                                        sx={{
                                                                            borderRadius: '20px',
                                                                            marginRight: '8px',
                                                                            color: '#363636',
                                                                            backgroundColor: item?.ac?.mode === 'auto' ? '#3f51b5' : '#cccccc',
                                                                            '&:hover': {
                                                                                backgroundColor: item?.ac?.mode === 'auto' ? '#303f9f' : '#aaaaaa',
                                                                            },
                                                                            '&.Mui-selected': {
                                                                                backgroundColor: '#8338ec',
                                                                                color: '#fff'
                                                                            },
                                                                        }}
                                                                    >
                                                                        <FaSun className='mr-1' />
                                                                        Auto
                                                                    </ToggleButton>
                                                                    <ToggleButton
                                                                        value="wind"
                                                                        aria-label="wind"
                                                                        sx={{
                                                                            borderRadius: '20px',
                                                                            marginRight: '8px',
                                                                            color: '#363636',
                                                                            backgroundColor: item?.ac?.mode === 'wind' ? '#3f51b5' : '#cccccc',
                                                                            '&:hover': {
                                                                                backgroundColor: item?.ac?.mode === 'wind' ? '#303f9f' : '#aaaaaa',
                                                                            },
                                                                            '&.Mui-selected': {
                                                                                backgroundColor: '#8338ec',
                                                                                color: '#fff'
                                                                            },
                                                                        }}
                                                                    >
                                                                        <FaWind className='mr-1' />
                                                                        Wind
                                                                    </ToggleButton>
                                                                    <ToggleButton
                                                                        value="swing"
                                                                        aria-label="swing"
                                                                        sx={{
                                                                            borderRadius: '20px',
                                                                            color: '#363636',
                                                                            backgroundColor: item?.ac?.mode === 'swing' ? '#3f51b5' : '#cccccc',
                                                                            '&:hover': {
                                                                                backgroundColor: item?.ac?.mode === 'swing' ? '#303f9f' : '#aaaaaa',
                                                                            },
                                                                            '&.Mui-selected': {
                                                                                backgroundColor: '#8338ec',
                                                                                color: '#fff'
                                                                            },
                                                                        }}
                                                                    >
                                                                        <FaFan className='mr-1' />
                                                                        Swing
                                                                    </ToggleButton>
                                                                </ToggleButtonGroup>
                                                                {/* <AcMode val={item?.ac?.mode} /> */}
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md mb-5'>
                                                        <div className='flex justify-between items-center mb-5'>
                                                            <h4 className='font-bold text-[#363636]'>Total Family Members</h4>
                                                            <button onClick={() => handleFamilyOpen(item._id)} className='bg-[#8338ec] flex gap-2 items-center text-sm p-2 hover:bg-sky-400 transition-all ease-linear rounded-full text-white'><FaPlus /></button>
                                                        </div>
                                                        <div>
                                                            <div>
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
                                                <div className=''>
                                                    <div className='flex justify-between items-center mb-5'>
                                                        <h4 className='font-bold text-[#363636]'>Total Energy Usage</h4>
                                                        <button onClick={() => handleTotalEnergyOpen(item._id)} className='bg-[#8338ec] flex gap-2 items-center text-sm p-2 hover:bg-sky-400 transition-all ease-linear rounded-full text-white'><FaPlus /> <span className='md:flex hidden'>Add Total Usage</span></button>
                                                    </div>
                                                    <select onChange={handleUsageData} style={{ border: '1px solid #ddd' }} className='rounded-full text-sm px-5 outline-0'>
                                                        <option value="week">Last 7 Days</option>
                                                        <option value="month">Last 30 Days</option>
                                                        <option value="year">Current Year</option>
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
                                                <div className='mt-10'>
                                                    <div className='flex justify-between items-center mb-5'>
                                                        <h4 className='font-bold text-[#363636]'>Weekly Energy Usage Analytics</h4>
                                                        <button onClick={() => handleWeeklyOpen(item._id)} className='bg-[#8338ec] flex gap-2 items-center text-sm p-2 hover:bg-sky-400 transition-all ease-linear rounded-full text-white'><FaPlus /> <span className='md:flex hidden'>Add Weekly Data</span></button>
                                                    </div>
                                                    <ApartEnergyGraph data={item?.usageData} />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </> : <p>Data not found, something wrong in the server</p>
            }

            {/* Dialog */}
            <DeviceDialog addDeviceOpen={addDeviceOpen} setAddDeviceOpen={setAddDeviceOpen} sendId={sendId} refetch={refetch} />
            <CctvDialog cctvOpen={cctvOpen} setCctvOpen={setCctvOpen} sendId={sendId} refetch={refetch} />
            <WifiDialog wifiOpen={wifiOpen} setWifiOpen={setWifiOpen} sendId={sendId} refetch={refetch} />
            <FamilyDialog familyOpen={familyOpen} setFamilyOpen={setFamilyOpen} sendId={sendId} refetch={refetch} />
            <WeeklyDialog weeklyOpen={weeklyOpen} setWeeklyOpen={setWeeklyOpen} sendId={sendId} refetch={refetch} />
            <TotalEnergyDialog totalEnergyOpen={totalEnergyOpen} setTotalEnergyOpen={setTotalEnergyOpen} sendId={sendId} refetch={refetch} />
            <AcDialog acOpen={acOpen} setAcOpen={setAcOpen} sendId={sendId} refetch={refetch} />
        </div>
    );
};

export default Apartments;