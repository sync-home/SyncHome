import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Typewrite from "@/components/Typewrite/Typewrite";
import bannerBg from '@/assets/shop/smart-control-2.png';
import featureImg from '@/assets/shop/smart-control-trolly.jpg';
import FeaturedBanner from "@/components/shared/FeaturedBanner";


const title = 'Smart Shopping'

const headings = [
    'Seamless Smart Control and Remote Shopping!',
    'Your Pocket`s Command Center for Smart Living!',
    'Navigate, Shop, and Deliver with a Tap!',
    'Control, Shop, and Deliver from Anywhere!'
];

export default function Shop() {
    return (
        <div>
            <FeaturedBanner headings={headings} bannerBg={bannerBg} featureImg={featureImg} title={title} />

        </div>
    )
}