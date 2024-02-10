import Banner from "./Banner";
import Features from "./Features";
import feature01 from '@/assets/parking/notification.png';
import feature02 from '@/assets/parking/car-exit.png';
import feature03 from '@/assets/parking/guest-parking.png';
import feature04 from '@/assets/parking/parking.png';
import feature05 from '@/assets/parking/real-time-parking.png';

const featureSection = [
    {
        img: feature01,
        content: [ 'Stay Informed, Stay Ahead', 'Real-Time Updates for Resident Peace of Mind', 'Gain valuable insights into your parking habits with our advanced analytics. Track usage patterns, peak hours, and optimize your parking routine. Knowledge is power, and our analytics empower you to make informed decisions for a smoother parking experience.' ],
        link: '/notification'
    },
    {
        img: feature02,
        content: [ 'Secure Parking Access', 'Effortless Entry with Smart Locks', 'Never worry about overstaying in your reserved spot again! Receive timely notifications when your booking time is about to expire. Stay informed and extend your reservation effortlessly, giving you the peace of mind to enjoy your activities without interruptions.' ],
        link: '/notification'
    },
    {
        img: feature03,
        content: [ 'Streamlined Guest Parking Solutions', 'Seamless Access for Visitors, Stress-Free Hosting for Residents', 'Simplify guest parking with our streamlined visitor parking feature. Generate digital passes for your guests, ensuring hassle-free access to designated parking spaces adjacent to your preassigned spot. Enhance your hosting experience and make parking logistics a breeze for both residents and visitors alike.' ],
        link: '/notification'
    },
    {
        img: feature04,
        content: [ 'Personalized Parking Access', 'Your Dedicated Spot, Effortlessly Accessible', 'Experience seamless access to your designated parking spot with our personalized parking access feature. Utilizing smart locks and digital passkeys, residents enjoy hassle-free entry to their preassigned parking spaces. Say goodbye to parking woes and hello to effortless convenience tailored to your residential needs.' ],
        link: '/notification'
    },
    {
        img: feature05,
        content: [ 'Real-Time Availability Updates', 'Stay Informed with Subscription Notifications', 'Never miss out on available parking spaces again! Receive real-time notifications on free parking spots that match your preferences. Whether you&apos;re a subscriber or a visitor, our subscription notifications keep you updated and ensure hassle-free parking.' ],
        link: '/rtm'
    },
]

export default function Parking() {
    return (
        <>
            <Banner />
            <Features contents={featureSection} />
        </>
    );
}
