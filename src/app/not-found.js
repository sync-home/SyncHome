import Image from "next/image";
import notFoundBg from '@/assets/syncHome_404.jpg';

export default function NotFound() {
    return <>
        <Image src={notFoundBg} alt="Not found background image" />
    </>
}