import Image from "next/image";
import notFoundBg from '@/assets/syncHome_404.jpg';
import GoHome from "@/components/Buttons/GoHome";

{/* box tag throw error:  Error: Element type is invalid. Received a promise that resolves to: undefined. Lazy element type must resolve to a class or function. */ }
export default function NotFound() {
    return <>
        <Image src={notFoundBg} alt="Not found background image" width={'100vw'} height={'100vh'} />
        <div className="text-center w-full -mt-12">
            <GoHome />
        </div>
    </>
}