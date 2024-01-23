"use client";
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import InstallMobileOutlinedIcon from '@mui/icons-material/InstallMobileOutlined';
import smartImg from '@/assets/smart-home.jpg';
import { Box } from '@mui/material';
import Image from 'next/image';

const SmartHome = () => {
    return (
        <div style={{ background: 'url(https://i.ibb.co/pWL7qKK/smart-home.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <Box className='grid lg:grid-cols-2 grid-cols-1 gap-36 font-catamaran py-44 max-w-7xl mx-auto text-[#363636]'>
                <div>
                    <h2 className='text-5xl font-extrabold uppercase lg:text-left text-center'>Smart Home</h2>
                    <p className='mt-10 lg:text-left text-center'>Elevate Your Living: Welcome to the Future with Our Smart Home Solutions, Where Convenience Meets Innovation in Every Corner</p>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-14'>
                        <div className='text-center'>
                            <div className='bg-white p-5 rounded-full h-24 w-24 shadow-xl mx-auto'>
                                <HubOutlinedIcon className='text-6xl' />
                            </div>
                            <h3 className='font-bold text-xl mt-5'>Managed Centrally</h3>
                        </div>
                        <div className='text-center'>
                            <div className='bg-white p-5 rounded-full h-24 w-24 shadow-xl mx-auto'>
                                <DesktopWindowsOutlinedIcon className='text-6xl' />
                            </div>
                            <h3 className='font-bold text-xl mt-5'>Wirelessly Connects</h3>
                        </div>
                        <div className='text-center'>
                            <div className='bg-white p-5 rounded-full h-24 w-24 shadow-xl mx-auto'>
                                <InstallMobileOutlinedIcon className='text-6xl' />
                            </div>
                            <h3 className='font-bold text-xl mt-5'>Smart Applications</h3>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </Box>
        </div>
    );
};

export default SmartHome;