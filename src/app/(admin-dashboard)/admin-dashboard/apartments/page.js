import ApartSwitch from '@/components/AdminDashboard/ApartmentsElement/ApartSwitch';
import CctvCamera from '@/components/AdminDashboard/ApartmentsElement/CctvCamera';
import Image from 'next/image';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const Apartments = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-10'>
                <div className='col-span-2'>
                    <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md'>
                        <div className='flex justify-between items-center mb-5'>
                            <h4 className='font-bold text-[#363636]'>Quick Access</h4>
                            <button className='bg-[#8338ec] flex gap-2 items-center text-sm px-4 hover:bg-sky-400 transition-all ease-linear py-1 rounded-full text-white'><FaPlus /> Add Device</button>
                        </div>
                        <div className='grid grid-cols-3 gap-2'>
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

                    <div style={{ border: '1px solid #ddd' }} className='p-5 rounded-md'>
                        <h4 className='font-bold text-[#363636]'>CCTV Camera</h4>
                        <div>
                            <CctvCamera></CctvCamera>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Apartments;