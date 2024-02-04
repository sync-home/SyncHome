"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const CameraLayout = ({path, name}) => {

    const [videoMan, setVideoMan] = useState('ON');
    const [dateTime, setDateTime] = useState(new Date());
    const videoId = 'JUfIpZCYquY?si=oOoiP8TTVDEAjOIw';

    const opts = {
        height: 'auto',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    // https://i.ibb.co/DMRFGbG/noVideo.jpg

    const handleCamera = e => {
        setVideoMan(e.target.value)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <div>
                {
                    videoMan == 'ON' ? <YouTube videoId={path} opts={opts} /> : <Image src="https://i.ibb.co/DMRFGbG/noVideo.jpg" alt="no video" height={390} width={640} />
                }
            </div>
            <div className='bg-gray-300 p-5'>
                <div className='flex justify-between mb-2'>
                    <h4>Manage camera :</h4>
                    <select className='outline-0' onChange={handleCamera}>
                        <option value="ON">ON</option>
                        <option value="OFF">OFF</option>
                    </select>
                </div>
                <div>
                    <h4 className='text-xl font-semibold text-[#363636]'>{name}</h4>
                    {/* <h4>Current date and time</h4> */}
                    <p>{dateTime.toLocaleString()}</p>
                </div>
            </div>

        </div>
    );
};

export default CameraLayout;