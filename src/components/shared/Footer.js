import { Box, Grid, Typography, Container } from '@mui/material';
import logo from '/src/assets/logo.png';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <Box className="min-h-0 bg-gray-900 text-white py-10">
            <Container maxWidth="xl">
                <Grid container spacing={2} className='flex max-md:flex-col'>
                    <Grid item xs={12} md={4} className='flex flex-col items-center justify-center min-h-full gap-2'>
                        <Box>
                            <Image src={logo} height={30} width={30} sx={{ display: { xs: 'none', md: 'flex' } }} alt='logo' />
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            SyncHome
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box className="flex max-md:justify-center md:justify-between max-md:flex-col md:flex-row gap-4">
                            <Box>
                                <h4 className='text-lg font-medium'>Features</h4>
                                <ul className='text-base font-mono'>
                                    <li><Link href={'/shop'} className='hover:underline underline-offset-2'>Shop</Link></li>
                                    <li><Link href={'/parking'} className='hover:underline underline-offset-2'>Parking</Link></li>
                                    <li><Link href={'/real-time-monitoring'} className='hover:underline underline-offset-2'>Real Time Monitoring</Link></li>
                                </ul>
                            </Box>
                            <Box>
                                <h4 className='text-lg font-medium'>Quick links</h4>
                                <ul className='text-base font-mono'>
                                    <li><Link href={'/'} className='hover:underline underline-offset-2'>Home</Link></li>
                                    <li><Link href={'/about'} className='hover:underline underline-offset-2'>About Us</Link></li>
                                    <li><Link href={'/contact'} className='hover:underline underline-offset-2'>Contact Us</Link></li>
                                    <li><Link href={'/notification'} className='hover:underline underline-offset-2'>Notification</Link></li>
                                </ul>
                            </Box>
                            <Box>
                                <h4 className='text-lg font-medium'>Policies</h4>
                                <ul className='text-base font-mono'>
                                    <li><Link href={'/'} className='hover:underline underline-offset-2'>Residential Policies</Link></li>
                                    <li><Link href={'/'} className='hover:underline underline-offset-2'>Guest Polices</Link></li>
                                    <li><Link href={'/'} className='hover:underline underline-offset-2'>Employee Policies</Link></li>
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