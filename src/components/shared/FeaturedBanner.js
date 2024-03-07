import Typewrite from "@/components/Typewrite/Typewrite";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const FeaturedBanner = ({headings, bannerBg, featureImg, title}) => {
    return (
        <Box className="relative md:overflow-hidden md:h-[500px] max-sm:h-[70vh]">
            {/* Background image of the banner section */}
            <Image quality={75} placeholder="blur" priority={true} src={bannerBg} width="100%" height="100%" className="w-full h-full" alt='parking security' />

            {/* overlay of the banner section */}
            <div className="w-full h-full bg-black absolute top-0 left-0 opacity-75"></div>

            <Box className='absolute top-0 left-0 text-white h-full w-full flex max-md:flex-col'>
                {/* contents */}
                <aside className='flex flex-col md:items-start justify-start md:justify-center pl-5 py-5 max-md:pt-16 h-1/2 md:h-full md:w-1/2'>
                    <Typography component={'h2'} sx={{ fontSize: '2rem', fontWeight: '500' }}>{title}</Typography>
                    <Typography sx={{ fontFamily: 'monospace', mt: 1, whiteSpace: 'wrap', minHeight: 50 }}>
                        <Typewrite textContents={headings} />
                    </Typography>
                </aside>

                {/* feature image */}
                <aside className="max-md:h-1/2 h-full md:w-1/2 flex items-center justify-center overflow-hidden">
                    <Image src={featureImg} width="auto" height="auto" className="w-52 h-52 md:w-72 md:h-72 rounded-full" alt='parking security' />
                </aside>
            </Box>
        </Box>
    );
};

export default FeaturedBanner;