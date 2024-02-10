"use client";
import Link from "next/link";

const LinkRedirect = ({ url, text }) => {
    return (
        <Link style={{color: "#fff"}} href={url} className='btn hover:bg-[#9CA3AF] mt-10 px-10 rounded-full py-3 border-2 hover:border-[#9CA3AF] border-white hover:bg-transparent hover:no-underline transition ease-in-out font-bold uppercase'>{text}</Link>
    );
};

export default LinkRedirect;