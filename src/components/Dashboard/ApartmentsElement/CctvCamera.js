"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import YouTube from 'react-youtube';
import { FaDotCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const CctvCamera = ({ cameraInfo }) => {

    const [dateTime, setDateTime] = useState(new Date());

    // const videoId = 'JUfIpZCYquY?si=TgMBRi-lZuwTQAED&amp;controls=0&amp;start=2';

    const opts = {
        height: '360px',
        width: '100%',
        playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            controls: 0,
            showinfo: 0
        }
    }

    const handleVideoReady = (event) => {
        event.target.playVideo();
    };

    const onEnd = (event) => {
        event.target.playVideo(); 
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='relative'>
                        <YouTube videoId={cameraInfo?.bedroom} opts={opts} onReady={handleVideoReady} onEnd={onEnd} />
                        <h4 className='flex absolute top-5 text-sm left-5 items-center gap-2 bg-white text-black rounded-full px-3'><FaDotCircle /> Live</h4>
                        <p className='px-3 bg-gray-300 text-sm rounded-full absolute top-5 right-5 text-black'>{dateTime.toLocaleString()}</p>
                        <p className='absolute bottom-5 left-1/4 text-sm bg-gray-300 px-5 py-1 rounded-full'>Master Bedroom CCTV3</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <YouTube videoId={cameraInfo?.front} opts={opts} onReady={handleVideoReady} onEnd={onEnd} />
                        <h4 className='flex absolute top-5 text-sm left-5 items-center gap-2 bg-white text-black rounded-full px-3'><FaDotCircle /> Live</h4>
                        <p className='px-3 bg-gray-300 text-sm rounded-full absolute top-5 right-5 text-black'>{dateTime.toLocaleString()}</p>
                        <p className='absolute bottom-5 left-1/4 text-sm bg-gray-300 px-5 py-1 rounded-full'>Door Front CCTV1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <YouTube videoId={cameraInfo?.kitchen} opts={opts} onReady={handleVideoReady} onEnd={onEnd} />
                        <h4 className='flex absolute top-5 text-sm left-5 items-center gap-2 bg-white text-black rounded-full px-3'><FaDotCircle /> Live</h4>
                        <p className='px-3 bg-gray-300 text-sm rounded-full absolute top-5 right-5 text-black'>{dateTime.toLocaleString()}</p>
                        <p className='absolute bottom-5 left-1/4 text-sm bg-gray-300 px-5 py-1 rounded-full'>Kitchen CCTV2</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <YouTube videoId={cameraInfo?.drawing} opts={opts} onReady={handleVideoReady} onEnd={onEnd} />
                        <h4 className='flex absolute top-5 text-sm left-5 items-center gap-2 bg-white text-black rounded-full px-3'><FaDotCircle /> Live</h4>
                        <p className='px-3 bg-gray-300 text-sm rounded-full absolute top-5 right-5 text-black'>{dateTime.toLocaleString()}</p>
                        <p className='absolute bottom-5 left-1/4 text-sm bg-gray-300 px-5 py-1 rounded-full'>Drawing Room CCTV4</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );

};

export default CctvCamera;