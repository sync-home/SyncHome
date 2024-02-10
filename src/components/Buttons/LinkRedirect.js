"use client";
import Link from "next/link";

const LinkRedirect = ({ url, text, revert = false }) => {
    return (
        <Link href={url} className={`mt-10 px-10 rounded-full py-3 border-2 transition ease-in-out font-bold uppercase ${revert ? 'hover:bg-[#9CA3AF] hover:border-[#9CA3AF] border-white bg-transparent hover:text-black text-white' : 'bg-[#9CA3AF] border-[#9CA3AF] hover:border-white hover:bg-transparent hover:text-white'}`}>{text}</Link>
    );
};

export default LinkRedirect;