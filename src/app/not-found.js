import Image from "next/image";
import notFoundBg from '@/assets/syncHome_404.jpg';
import GoHome from "@/components/Buttons/LinkRedirect";
import { Box, Typography } from "@mui/material";

export const metadata = {
    title: 'Not Found',
}

export default function NotFound() {
    return (
        <section className="min-w-screen max-h-screen h-screen overflow-clip">
            <Image priority={true} src={notFoundBg} alt="Not found background image" style={{ height: '100%', width: '100%' }} />
            <Box className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center md:items-start ps-14 space-y-2">
                <Typography component={'h1'} className=" text-white"> <span className="font-mono font-extrabold text-7xl text-yellow-400 drop-shadow-2xl shadow-inner">Oops!</span> <br /> <span className="tracking-[0.75rem] text-xl leading-10">Not Found</span></Typography>
                <GoHome url={'./'} text={'Go Home'} revert={true} />
                <p className="hidden">Photo by <a href="https://unsplash.com/@claybanks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clay Banks</a> on <a href="https://unsplash.com/photos/a-small-cabin-in-the-woods-with-a-fire-pit-JRkXiBmTRDI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
            </Box>
        </section>
    )
}