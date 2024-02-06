import Typewrite from "@/components/Typewrite/Typewrite";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import bannerBg from '@/assets/parking/smart-parking.jpg';
import bannerSecurityImg from '@/assets/parking/parking-smart-control.jpg';

const headings = [
    'Introducing Smart Parking for Effortless Navigation!',
    'The Future of Smart and Seamless Parking Solutions',
    'Experience Intelligent Parking Solutions Today!',
    'Discover the Power of Smart Parking Technology!'
];

const Banner = () => {
    return (
        <Box className="relative md:overflow-hidden md:h-[300px] max-sm:h-[70vh]">
            <Image src={bannerBg} width="100%" height="100%" className="w-full h-full" alt='parking security' />

            <div className="w-full h-full bg-black absolute top-0 left-0 opacity-70"></div>

            <Box className='absolute top-0 left-0 text-white h-full w-full flex max-md:flex-col'>
                <aside className='flex flex-col md:items-start justify-start md:justify-center pl-5 py-5 h-1/2 md:h-full md:w-1/2'>
                    <Typography component={'h2'} sx={{ fontSize: '2rem', fontWeight: '500' }}>Vehicular Haven</Typography>
                    <Typography sx={{ fontFamily: 'monospace', mt: 1, whiteSpace: 'wrap', minHeight: 50 }}>
                        <Typewrite textContents={headings} />
                    </Typography>
                </aside>
                <aside className="max-md:h-1/2 h-full md:w-1/2 flex items-center justify-center overflow-hidden">
                    <Image src={bannerSecurityImg} width="auto" height="auto" className="w-56 h-auto md:w-[35vw] md:h-[25vw]" alt='parking security' />
                </aside>
            </Box>
        </Box>
    );
};

export default Banner;