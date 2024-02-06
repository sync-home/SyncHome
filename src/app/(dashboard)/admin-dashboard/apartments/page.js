import AcMode from '@/components/Dashboard/ApartmentsElement/AcMode';
import ApartEnergyGraph from '@/components/Dashboard/ApartmentsElement/ApartEnergyGraph';
import ApartSwitch from '@/components/Dashboard/ApartmentsElement/ApartSwitch';
import CctvCamera from '@/components/Dashboard/ApartmentsElement/CctvCamera';
import TempControl from '@/components/Dashboard/ApartmentsElement/TempControl';
import Image from 'next/image';
import React from 'react';
import { FaChild, FaFemale, FaMale } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';



const Apartments = () => {

    const usageData = [
        { "day": "Monday", "electricity": 30, "water": 20, "gas": 15 },
        { "day": "Tuesday", "electricity": 40, "water": 25, "gas": 20 },
        { "day": "Wednesday", "electricity": 50, "water": 30, "gas": 25 },
        { "day": "Thursday", "electricity": 45, "water": 35, "gas": 30 },
        { "day": "Friday", "electricity": 55, "water": 40, "gas": 35 },
        { "day": "Saturday", "electricity": 60, "water": 45, "gas": 40 },
        { "day": "Sunday", "electricity": 50, "water": 40, "gas": 35 }
    ];


    return (
        <div>
            <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md mb-5 flex lg:flex-row flex-col justify-center lg:justify-between'>
                <h4 className='font-bold uppercase text-xl text-[#363636]'>Total Apartment : 20</h4>
                <select style={{ border: '1px solid #ddd' }} className='px-5 rounded-md py-1 outline-0'>
                    <option value="apartment101">Apartment - 101</option>
                    <option value="apartment102">Apartment - 102</option>
                    <option value="apartment201">Apartment - 201</option>
                </select>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                <div className='lg:col-span-2'>
                    <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md mb-5'>
                        <div className='flex justify-between items-center mb-5'>
                            <h4 className='font-bold text-[#363636]'>Quick Access</h4>
                            <button className='bg-[#8338ec] flex gap-2 items-center text-sm px-4 hover:bg-sky-400 transition-all ease-linear py-1 rounded-full text-white'><FaPlus /> Add Device</button>
                        </div>
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-2'>
                            <div style={{ border: '1px solid #ddd' }} className='grid grid-cols-3 gap-2 items-center shadow-md rounded-md px-5 py-3'>
                                <div className='col-span-2'>
                                    <h4 className='font-semibold text-[#363636] text-sm'>Smart Lamp</h4>
                                    <p className='text-xs text-gray-600 mb-5'>Panasonic</p>
                                    <ApartSwitch />
                                </div>
                                <div>
                                    <Image height={100} width={100} src="https://i.ibb.co/64T2nyb/panasonic-lamp.png" alt="smart lamp" />
                                </div>
                            </div>
                            <div style={{ border: '1px solid #ddd' }} className='grid grid-cols-3 gap-2 items-center shadow-md rounded-md px-5 py-3'>
                                <div className='col-span-2'>
                                    <h4 className='font-semibold text-[#363636] text-sm'>Air Purifier</h4>
                                    <p className='text-xs text-gray-500 mb-5'>Philips</p>
                                    <ApartSwitch />
                                </div>
                                <div>
                                    <Image height={100} width={100} src="https://i.ibb.co/72230hr/air-purifier.png" alt="smart lamp" />
                                </div>
                            </div>
                            <div style={{ border: '1px solid #ddd' }} className='grid grid-cols-3 gap-2 items-center shadow-md rounded-md px-5 py-3'>
                                <div className='col-span-2'>
                                    <h4 className='font-semibold text-[#363636] text-sm'>Smart Cleaner</h4>
                                    <p className='text-xs text-gray-500 mb-5'>Xiomi</p>
                                    <ApartSwitch />
                                </div>
                                <div>
                                    <Image height={100} width={100} src="https://i.ibb.co/KXDD4BP/smart-cleaner.png" alt="smart lamp" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md grid lg:grid-cols-3 grid-cols-1 gap-5'>
                        <div className='lg:col-span-2'>
                            <h4 className='font-bold text-[#363636] mb-5'>CCTV Camera</h4>
                            <div>
                                <CctvCamera />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4 className='font-bold text-[#363636] mb-5'>WiFi Control</h4>
                                <div style={{ border: '1px solid #ddd' }} className='grid grid-cols-3 gap-2 items-center shadow-md rounded-md px-5 py-3'>
                                    <div className='col-span-2'>
                                        <h4 className='font-semibold text-[#363636] text-sm'>Smart Router</h4>
                                        <p className='text-xs text-gray-500 mb-5'>Xiomi Router</p>
                                        <ApartSwitch />
                                    </div>
                                    <div>
                                        <Image height={100} width={100} src="https://i.ibb.co/7N5VQxX/xiomi-router.png" alt="smart router" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <h4 className='font-bold text-[#363636] mb-5'>Weekly WiFi Usage</h4>
                                <div style={{ border: '1px solid #ddd' }} className='shadow-md rounded-md px-5 py-3'>
                                    <div className='text-center'>
                                        <h4 className='font-semibold text-[#363636] text-sm'>Total Devices : 4</h4>
                                        <p className='text-gray-500 mt-2'>Total Usage</p>
                                        <p className='text-xl font-bold text-[#363636]'>150 GB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md mb-5'>
                        <h4 className='font-bold text-[#363636] mb-5'>Temperature Control</h4>
                        <TempControl />
                        <div className='flex justify-between mt-5'>
                            <div>
                                <h4 className='font-semibold text-[#363636] text-sm'>Air Conditionar</h4>
                                <p className='text-xs text-gray-500 mb-5'>LG Dualcool Inverter</p>
                            </div>
                            <div>
                                <ApartSwitch />
                            </div>
                        </div>
                        <div>
                            <h4 className='font-semibold text-[#363636] text-sm mb-5'>Modes</h4>
                            <div>
                                <AcMode />
                            </div>
                        </div>
                    </div>
                    <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md mb-5'>
                        <h4 className='font-bold text-[#363636] mb-5'>Total Family Members</h4>
                        <div>
                            <div className=''>
                                <div style={{ border: '1px solid #ddd' }} className='rounded-md p-2 font-semibold text-sm flex items-center gap-2 text-[#21b0fe]'>
                                    <FaMale />
                                    Male : 1
                                    </div>
                                <div style={{ border: '1px solid #ddd' }} className='rounded-md p-2 my-2 font-semibold text-[#fe218b] text-sm flex items-center gap-2'>
                                    <FaFemale />
                                    Female : 1</div>
                                <div style={{ border: '1px solid #ddd' }} className='rounded-md p-2 font-semibold text-[#0d3b66] text-sm flex items-center gap-2'>
                                    <FaChild />
                                    Child : 2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md mt-5'>
                <div className='flex justify-between flex-wrap'>
                    <h4 className='font-bold text-[#363636] mb-5'>Total Energy Usage</h4>
                    <select style={{ border: '1px solid #ddd' }} className='rounded-full text-sm px-5 outline-0'>
                        <option value="week">Last 7 Days</option>
                        <option value="month">Last 30 Days</option>
                        <option value="year">Current Year</option>
                    </select>
                </div>
                <div className='flex justify-center flex-wrap my-5 gap-10'>
                    <div style={{ border: '1px solid #ddd' }} className='items-center shadow-md rounded-md px-5 py-3'>
                        <h4 className='font-semibold text-[#363636]'>Total Electricity Usage</h4>
                        <p className='font-bold text-center text-2xl text-[#363636]'>300 kWh</p>
                    </div>
                    <div style={{ border: '1px solid #ddd' }} className='items-center shadow-md rounded-md px-5 py-3'>
                        <h4 className='font-semibold text-[#363636]'>Total Water Usage</h4>
                        <p className='font-bold text-center text-2xl text-[#363636]'>10,498 Liters</p>
                    </div>
                    <div style={{ border: '1px solid #ddd' }} className='items-center shadow-md rounded-md px-5 py-3'>
                        <h4 className='font-semibold text-[#363636]'>Total Gas Usage</h4>
                        <p className='font-bold text-center text-2xl text-[#363636]'>1.39 MMBtu</p>
                    </div>
                </div>
                <ApartEnergyGraph data={usageData} />
            </div>
        </div>
    );
};

export default Apartments;