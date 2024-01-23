"use client";

import { Box } from "@mui/material";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import img1 from '@/assets/ManageEverythig/outdoor-cctv.jpg'
import img2 from '@/assets/ManageEverythig/temperature-controller.jpg'
import img3 from '@/assets/ManageEverythig/tracking.jpg'
import img4 from '@/assets/ManageEverythig/auto-control.jpg'
import img5 from '@/assets/ManageEverythig/motion-sensor.jpg'
import img6 from '@/assets/ManageEverythig/heating-plan.jpg'
import Image from "next/image";

const ManageEverything = () => {
    return (
        <Box sx={{backgroundImage: 'url(https://i.ibb.co/BcqS8Cp/scenarios-management-1.jpg)'}} className="font-catamaran">
            <Box className="bg-[rgba(10,29,86,0.8)] py-32">
            <Box className="max-w-7xl mx-auto">
                <Box className="text-center lg:px-32 px-5">
                    <h2 className="font-extrabold text-4xl mb-5 text-[#F2F597]">MANAGE EVERYTHING</h2>
                    <p className="text-white">Elevate your smart living with precision and ease through our hub. Seamlessly oversee lights, security, climate, and more, tailoring every detail to your preferences. Experience unparalleled control as your home responds effortlessly to your commands, delivering a truly connected and intelligent living space</p>
                </Box>
                <div className="mt-10">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        pagination={true}
                        modules={[Pagination]}
                        breakpoints={{
                            240: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper">
                        <SwiperSlide>
                            <div className="bg-[#0A1D56] text-white rounded-lg">
                                <Image sx={{ height: 'auto', width: '100%' }} src={img1} alt="smart-home" />
                                <div className="text-center p-5">
                                    <h3 className="text-2xl font-bold mb-5">Outdoor CCTV</h3>
                                    <p className="text-justify">Fortify your surroundings with Outdoor CCTV: Robust surveillance solutions ensuring safety and vigilance, guarding your space against potential threats effectively</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#0A1D56] text-white rounded-lg">
                                <Image sx={{ height: 'auto', width: '100%' }} src={img2} alt="smart-home" />
                                <div className="text-center p-5">
                                    <h3 className="text-2xl font-bold mb-5">Temperature Controller</h3>
                                    <p className="text-justify">Precision Climate Control: Our temperature controller ensures optimal comfort, letting you tailor and maintain the perfect atmosphere in any space effortlessly</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#0A1D56] text-white rounded-lg">
                                <Image sx={{ height: 'auto', width: '100%' }} src={img3} alt="smart-home" />
                                <div className="text-center p-5">
                                    <h3 className="text-2xl font-bold mb-5">Tracking</h3>
                                    <p className="text-justify">Efficient Monitoring: Explore our tracking solutions for real-time insights, ensuring seamless surveillance and informed decision-making in diverse applications</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#0A1D56] text-white rounded-lg">
                                <Image sx={{ height: 'auto', width: '100%' }} src={img4} alt="smart-home" />
                                <div className="text-center p-5">
                                    <h3 className="text-2xl font-bold mb-5">Auto Control</h3>
                                    <p className="text-justify">Smart Automation: Experience hands-free convenience with our auto control systems, intuitively managing lights, security, climate, and more for ultimate comfort and efficiency</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#0A1D56] text-white rounded-lg">
                                <Image sx={{ height: 'auto', width: '100%' }} src={img5} alt="smart-home" />
                                <div className="text-center p-5">
                                    <h3 className="text-2xl font-bold mb-5">Motion Sensor</h3>
                                    <p className="text-justify">Sensitivity in Action: Our motion sensors deliver heightened security and energy efficiency, activating lights and devices intelligently in response to movement.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#0A1D56] text-white rounded-lg">
                                <Image sx={{ height: 'auto', width: '100%' }} src={img6} alt="smart-home" />
                                <div className="text-center p-5">
                                    <h3 className="text-2xl font-bold mb-5">Heating Plan</h3>
                                    <p className="text-justify">Optimized Comfort: Tailor your environment with our heating plan solutions, ensuring warmth exactly when and where you need it, effortlessly customizable for efficiency</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Box>
            </Box>
        </Box>
    );
};

export default ManageEverything;