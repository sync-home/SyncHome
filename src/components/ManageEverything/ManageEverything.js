"use client";
import { Box } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";

import img1 from '@/assets/ManageEverything/outdoor-cctv.jpg'
import img2 from '@/assets/ManageEverything/temperature-controller.jpg'
import img3 from '@/assets/ManageEverything/tracking.jpg'
import img4 from '@/assets/ManageEverything/auto-control.jpg'
import img5 from '@/assets/ManageEverything/motion-sensor.jpg'
import img6 from '@/assets/ManageEverything/smart-control.jpg'

const ManageEverything = () => {
    const manageContents = [
        {
            image: img1,
            heading: 'Outdoor CCTV',
            para: 'Fortify your surroundings with Outdoor CCTV: Robust surveillance solutions ensuring safety and vigilance, guarding your space against potential threats effectively'
        },
        {
            image: img2,
            heading: 'Temperature Controller',
            para: 'Precision Climate Control: Our temperature controller ensures optimal comfort, letting you tailor and maintain the perfect atmosphere in any space effortlessly'
        },
        {
            image: img3,
            heading: 'Tracking',
            para: 'Efficient Monitoring: Explore our tracking solutions for real-time insights, ensuring seamless surveillance and informed decision-making in diverse applications'
        },
        {
            image: img4,
            heading: 'Auto Control',
            para: 'Smart Automation: Experience hands-free convenience with our auto control systems, intuitively managing lights, security, climate, and more for ultimate comfort and efficiency'
        },
        {
            image: img5,
            heading: 'Motion Sensor',
            para: 'Sensitivity in Action: Our motion sensors deliver heightened security and energy efficiency, activating lights and devices intelligently in response to movement.'
        },
        {
            image: img6,
            heading: 'Smart Control',
            para: 'Optimized Comfort: Tailor your environment with our heating plan solutions, ensuring warmth exactly when and where you need it, effortlessly customizable for efficiency'
        },
    ]

    return (
        <Box sx={{ backgroundImage: 'url(https://i.ibb.co/BcqS8Cp/scenarios-management-1.jpg)' }} className="font-catamaran">
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
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[ Autoplay, Pagination ]}
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
                            {manageContents?.length && manageContents?.map((content, idx) => <SwiperSlide key={idx}>
                                <div className="bg-[#0A1D56] text-white rounded-lg">
                                    <Image sx={{ height: 'auto', width: '100%' }} src={content?.image} alt={content?.heading} />
                                    <div className="text-center p-5">
                                        <h3 className="text-2xl font-bold mb-5">{content?.heading}</h3>
                                        <p className="text-justify">{content?.para}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                        </Swiper>
                    </div>
                </Box>
            </Box>
        </Box>
    );
};

export default ManageEverything;