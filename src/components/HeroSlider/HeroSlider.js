"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
// import Image from 'next/image';
import { Button } from '@mui/material';

const HeroSlider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='md:h-[43rem] h-[35rem] relative text-center'>
                        <img src='https://i.ibb.co/bgTrtQG/personalized-lighting-control.jpg' alt="hero-image"
                        className='h-full w-full object-cover'
                        />
                        <div className='absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.7)] flex flex-col justify-center items-center px-10'>
                            <h2 className='md:text-5xl text-3xl uppercase font-bold text-white'>Smart Living Spaces</h2>
                            <p className='text-white font-semibold mt-5'>Experience the future of residential living with our cutting-edge smart building management solutions</p>
                            <button className='btn bg-[#9CA3AF] mt-10 px-10 rounded-full py-3 border-2 border-[#9CA3AF] hover:border-white hover:bg-transparent hover:text-white transition ease-in-out font-bold uppercase'>Explore</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='md:h-[43rem] h-[35rem] relative text-center'>
                        <img src='https://i.ibb.co/VmjzMnJ/augmented-reality-composition-with-computer-generated-perceptual-information.jpg' alt="hero-image"
                        className='h-full w-full object-cover'
                        />
                        <div className='absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.7)] flex flex-col justify-center items-center px-10'>
                            <h2 className='md:text-5xl text-3xl uppercase font-bold text-white'>Efficient Energy Management</h2>
                            <p className='text-white font-semibold mt-5'>Optimize energy consumption and reduce costs with our intelligent energy management systems for your home</p>
                            <button className='btn bg-[#9CA3AF] mt-10 px-10 rounded-full py-3 border-2 border-[#9CA3AF] hover:border-white hover:bg-transparent hover:text-white transition ease-in-out font-bold uppercase'>Explore</button>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='md:h-[43rem] h-[35rem] relative text-center'>
                        <img src='https://i.ibb.co/NCPCT5F/2130.jpg' alt="hero-image"
                        className='h-full w-full object-cover'
                        />
                        <div className='absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.7)] flex flex-col justify-center items-center px-10'>
                            <h2 className='md:text-5xl text-3xl uppercase font-bold text-white'>Secure and Connected</h2>
                            <p className='text-white font-semibold mt-5'>Enhance security and connectivity with our advanced smart home technologies, keeping your family safe and connected</p>
                            <button className='btn bg-[#9CA3AF] mt-10 px-10 rounded-full py-3 border-2 border-[#9CA3AF] hover:border-white hover:bg-transparent hover:text-white transition ease-in-out font-bold uppercase'>Explore</button>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='md:h-[43rem] h-[35rem] relative text-center'>
                        <img src='https://i.ibb.co/HVBhv33/Building-and-Facility-management-0-0-0-0-1686046404.jpg' alt="hero-image"
                        className='h-full w-full object-cover'
                        />
                        <div className='absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.7)] flex flex-col justify-center items-center px-10'>
                            <h2 className='md:text-5xl text-3xl uppercase font-bold text-white'>Automated Comfort</h2>
                            <p className='text-white font-semibold mt-5'>Enjoy personalized comfort with our automated climate control and smart home features that adapt to your preferences</p>
                            <button className='btn bg-[#9CA3AF] mt-10 px-10 rounded-full py-3 border-2 border-[#9CA3AF] hover:border-white hover:bg-transparent hover:text-white transition ease-in-out font-bold uppercase'>Explore</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSlider;