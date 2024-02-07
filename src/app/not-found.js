import Image from "next/image";
import notFoundBg from '@/assets/syncHome_404.jpg';
import GoHome from "@/components/Buttons/LinkRedirect";
import { Typography } from "@mui/material";

export const metadata = {
    title: 'Not Found',
}

export default function NotFound() {
    return (
        <section className="max-w-screen w-full max-h-screen h-full overflow-clip">
            <Image priority={true} src={notFoundBg} alt="Not found background image" style={{ height: '100%', width: '100%' }} />
            <Typography component={'h1'} className="absolute top-1/4 transform translate-x-1/3 text-white"> <span className="font-mono font-extrabold text-7xl text-yellow-400 drop-shadow-2xl">Oops!</span> <br /> <span className="tracking-[0.75rem] text-xl leading-10">Not Found</span></Typography>
            <span className="absolute top-1/2 transform translate-x-1/2 translate-y-1/2">
                <GoHome url={'./'} text={'Go Home'} revert={true} />
            </span>
            <p className="hidden">Photo by <a href="https://unsplash.com/@claybanks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clay Banks</a> on <a href="https://unsplash.com/photos/a-small-cabin-in-the-woods-with-a-fire-pit-JRkXiBmTRDI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
        </section>
    )
}