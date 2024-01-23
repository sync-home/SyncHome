
import Link from "next/link";
import aboutMan from '@/assets/about-man.jpg';
import Image from "next/image";
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export default function About() {
    return (
        <div>
            <div className="text-center bg-[#0A1D56] text-white py-16">
                <h2 className="text-5xl uppercase font-extrabold mb-5">About us</h2>
                <p className="font-semibold"><Link href="/">Home</Link> / About us</p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-0">
                <div className="relative min-h-96 w-full">
                    <div className="absolute top-0 left-0 h-full w-full bg-[rgba(77,172,106,0.5)] z-10"></div>
                    <Image fill src={aboutMan} alt="person" objectFit="cover" />
                </div>
                <div className="bg-[#4DAC6A] text-white lg:px-20 px-5 py-10">
                    <h3 className="text-4xl font-extrabold mb-5">GOLD STANDARD,<br />BEST MANAGED</h3>
                    <p>The encapsulates a commitment to the highest quality and impeccably managed standards. Experience a benchmark in leadership and operations, where every detail is meticulously crafted to set a new gold standard in organizational success and innovation.</p>
                    <div className='grid lg:grid-cols-3 grid-cols-1 text-black gap-10 mt-14'>
                        <div className='text-center'>
                            <div className='bg-white p-5 rounded-full h-24 w-24 shadow-xl mx-auto'>
                                <TrackChangesOutlinedIcon className='text-6xl' />
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='bg-white p-5 rounded-full h-24 w-24 shadow-xl mx-auto'>
                                <MouseOutlinedIcon className='text-6xl' />
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='bg-white p-5 rounded-full h-24 w-24 shadow-xl mx-auto'>
                                <NotificationsActiveOutlinedIcon className='text-6xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OUR MISSION */}

            <div className="max-w-7xl mx-auto">
                <div className="text-center text-[#363636]">
                    <h2 className="text-5xl uppercase font-extrabold mb-5">Our mission</h2>
                    <p>To empower and simplify modern living through innovative smart home solutions. We are committed to providing a seamless and intelligent home management experience, enhancing convenience, security, and sustainability for our users. Our mission is to make homes smarter, safer, and more efficient, creating a connected living environment that adapts to the evolving needs of our users.</p>

                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-10 mt-14'>
                        <div className='text-center'>
                            <div className='border-2 border-black p-5 rounded-full h-24 w-24 shadow-xl mx-auto'>
                                <CrisisAlertOutlinedIcon className='text-6xl' />
                            </div>
                            <h3 className='font-bold text-xl mt-5'>Change Live To The Best</h3>
                            <p>Elevate every moment with transformative change. Embrace excellence, innovation, and a journey toward your best, fulfilled life. Make the shift today</p>
                        </div>
                        <div className='text-center'>
                            <div className='border-2 border-black p-5 rounded-full h-24 w-24 shadow-xl mx-auto'>
                            <HouseOutlinedIcon className='text-6xl' />
                            </div>
                            <h3 className='font-bold text-xl mt-5'>Start With A Vision</h3>
                            <p>Embark on a journey of success and purpose. Your blueprint for turning dreams into reality begins.</p>
                        </div>
                        <div className='text-center'>
                            <div className='border-2 border-black p-5 rounded-full h-24 w-24 shadow-xl mx-auto'>
                            <EmojiObjectsOutlinedIcon className='text-6xl' />
                            </div>
                            <h3 className='font-bold text-xl mt-5'>Convenient Automation</h3>
                            <p>Streamlining Life, One Task at a Time. Effortless Solutions for a Smarter, Simplified, and Connected Living Experience.</p>
                        </div>
                        <div className='text-center'>
                            <div className='border-2 border-black p-5 rounded-full h-24 w-24 shadow-xl mx-auto'>
                            <MonetizationOnOutlinedIcon className='text-6xl' />
                            </div>
                            <h3 className='font-bold text-xl mt-5'>Education & Upgrowth</h3>
                            <p>Empowering Minds, Inspiring Futures. Nurturing Knowledge, Fostering Skills, and Cultivating Lifelong Learning for Boundless Success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}