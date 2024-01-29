"use client";
import Link from "next/link";

const LinkRedirect = ({ url, text }) => {
    return (
        <Link href={url} className='btn bg-[#9CA3AF] mt-10 px-10 rounded-full py-3 border-2 border-[#9CA3AF] hover:border-white hover:bg-transparent hover:text-white transition ease-in-out font-bold uppercase'>{text}</Link>
    );
};

export default LinkRedirect;