import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '/src/assets/logo.png';
import Link from 'next/link';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
        <Box className="border-t-2 min-h-0 bg-gray-400 py-5">
            <Container maxWidth="xl">
            <Grid container spacing={2} className=''>
                <Grid item xs={6} md={4} className='flex flex-col items-center justify-center min-h-full'>
                    <Box>
                        <Image src={logo} height={30} width={30} sx={{ display: { xs: 'none', md: 'flex' } }} alt='logo' />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#"
                        className='text-black font-semibold font-mono tracking-[0.3rem]'
                    >
                        SyncHome
                    </Typography>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Box className="flex justify-between">
                        <Box>
                            <h4 className='text-xl font-semibold'>Features</h4>
                            <ul className='text-base font-mono'>
                                <li><Link href={'/'} className='hover:underline underline-offset-2'>Person Recognition</Link></li>
                                <li><Link href={'/'} className='hover:underline underline-offset-2'>Guides</Link></li>
                                <li><Link href={'/'} className='hover:underline underline-offset-2'>Temperature Control</Link></li>
                            </ul>
                        </Box>
                        <Box>
                            <h4 className='text-xl font-semibold'>About Us</h4>
                            <ul className='text-base font-mono'>
                                <li><Link href={'/'} className='hover:underline underline-offset-2'>Where we are</Link></li>
                                <li><Link href={'/'} className='hover:underline underline-offset-2'>Why we are</Link></li>
                                <li><Link href={'/'} className='hover:underline underline-offset-2'>How we are</Link></li>
                            </ul>
                        </Box>
                        <Box>
                            <h4 className='text-xl font-semibold'>Register</h4>
                            <ul className='text-base font-mono'>
                                <li><Link href={'/'} className='hover:underline underline-offset-2'>Host Registration</Link></li>
                                <li><Link href={'/'} className='hover:underline underline-offset-2'>Guest Registration</Link></li>
                                <li><Link href={'/'} className='hover:underline underline-offset-2'>Employee Registration</Link></li>
                            </ul>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default Footer;