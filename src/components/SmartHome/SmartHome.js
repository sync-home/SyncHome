"use client";
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import InstallMobileOutlinedIcon from '@mui/icons-material/InstallMobileOutlined';
import { Box } from '@mui/material';


const heading = (string) => {
    return <h3 className='font-bold text-xl mt-5'>{string}</h3>
}

const SmartHome = () => {

    const circle = 'bg-white p-5 rounded-full h-24 w-24 shadow-xl mx-auto';

    return (
        <div style={{ background: 'url(https://i.ibb.co/pWL7qKK/smart-home.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <Box className='grid lg:grid-cols-2 grid-cols-1 lg:gap-36 font-catamaran lg:py-44 py-16 max-w-7xl mx-auto text-[#363636]'>
                <div>
                    <h2 className='lg:text-5xl text-3xl md:text-4xl font-extrabold uppercase lg:text-left text-center'>Smart Home</h2>
                    <p className='mt-10 lg:text-left text-center mx-5 lg:mx-0'>Elevate Your Living: Welcome to the Future with Our Smart Home Solutions, Where Convenience Meets Innovation in Every Corner</p>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-14'>
                        <div className='text-center'>
                            <div className={circle}>
                                <HubOutlinedIcon className='text-6xl' />
                            </div>
                            {heading('Managed Centrally')}
                        </div>
                        <div className='text-center'>
                            <div className={circle}>
                                <DesktopWindowsOutlinedIcon className='text-6xl' />
                            </div>
                            {heading('Wireless Connections')}
                        </div>
                        <div className='text-center'>
                            <div className={circle}>
                                <InstallMobileOutlinedIcon className='text-6xl' />
                            </div>
                            {heading('Smart Applications')}
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