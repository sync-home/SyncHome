"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import LinkRedirect from '../Buttons/LinkRedirect';
import './HeroSlider.css';

const HeroSlider = () => {

    const sliderContents = [
        {
            image: 'https://i.ibb.co/bgTrtQG/personalized-lighting-control.jpg',
            heading: 'Smart Living Spaces',
            content: 'Experience the future of residential living with our cutting-edge smart building management solutions'
        },
        {
            image: 'https://i.ibb.co/VmjzMnJ/augmented-reality-composition-with-computer-generated-perceptual-information.jpg',
            heading: 'Efficient Energy Management',
            content: 'Optimize energy consumption and reduce costs with our intelligent energy management systems for your home'
        },
        {
            image: 'https://i.ibb.co/NCPCT5F/2130.jpg',
            heading: 'Secure and Connected',
            content: 'Enhance security and connectivity with our advanced smart home technologies, keeping your family safe and connected'
        },
        {
            image: 'https://i.ibb.co/HVBhv33/Building-and-Facility-management-0-0-0-0-1686046404.jpg',
            heading: 'Automated Comfort',
            content: 'Enjoy personalized comfort with our automated climate control and smart home features that adapt to your preferences'
        },
    ]

    return (
        <div>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[ Autoplay, Navigation ]}
                className="mySwiper">
                {sliderContents?.length && sliderContents?.map((slide, idx) => <SwiperSlide key={idx}>
                    <div className='md:h-[43rem] h-[35rem] relative text-center'>
                        <Image sizes="(max-width: 768px) 100vw, 33vw" height={500} width={500} src={slide?.image} alt={slide?.heading}
                            className='h-full w-full object-cover'></Image>
                        <div className='absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-center items-center px-10'>
                            <h2 className='md:text-5xl text-3xl uppercase font-bold text-white'>{slide?.heading}</h2>
                            <p className='text-white font-semibold mt-5 mb-10'>{slide?.content}</p>
                            <LinkRedirect url={'/features'} text={'Explore'} />
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default HeroSlider;