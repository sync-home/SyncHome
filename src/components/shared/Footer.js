import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '/src/assets/logo.png';
import Link from 'next/link';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
        <Box className="border-t-2 min-h-0 bg-gray-400 py-10">
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
                                    <li><Link href={'/'} className='hover:underline underline-offset-2'>Person Recognition</Link></li>
                                    <li><Link href={'/'} className='hover:underline underline-offset-2'>Guides</Link></li>
                                    <li><Link href={'/'} className='hover:underline underline-offset-2'>Temperature Control</Link></li>
                                </ul>
                            </Box>
                            <Box>
                                <h4 className='text-lg font-medium'>About Us</h4>
                                <ul className='text-base font-mono'>
                                    <li><Link href={'/'} className='hover:underline underline-offset-2'>Where we are</Link></li>
                                    <li><Link href={'/'} className='hover:underline underline-offset-2'>Why we are</Link></li>
                                    <li><Link href={'/'} className='hover:underline underline-offset-2'>How we are</Link></li>
                                </ul>
                            </Box>
                            <Box>
                                <h4 className='text-lg font-medium'>Register</h4>
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