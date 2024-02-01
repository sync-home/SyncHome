import Image from "next/image";
import notFoundBg from '@/assets/syncHome_404.jpg';
import GoHome from "@/components/Buttons/LinkRedirect";

export const metadata = {
    title: 'Not Found',
}

export default function NotFound() {
    return (
        <section className="max-w-full min-h-screen relative">
            <Image src={notFoundBg} alt="Not found background image" style={{ maxHeight: '100vh', maxWidth: '100vw' }} />
            <span className="absolute left-1/2 bottom-0">
                <GoHome url={'./'} text={'Go Home'} />
            </span>
        </section>
    )
}