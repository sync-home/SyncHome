"use client"
import Link from 'next/link';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import logo from '@/assets/logo.png';
import './AdminSidebar.css';
import Image from 'next/image';
import { GrHomeRounded } from 'react-icons/gr';
import { IoPeopleOutline } from "react-icons/io5";

const AdminSidebar = () => {


    return (
        <div>
            <Sidebar 
            toggled="true"
            breakPoint="md"
            className='border-0'>
                <Menu className='bg-[#8338ec] h-full text-white'>
                    <Link className='flex py-2 justify-center gap-5 font-catamaran font-bold uppercase text-2xl items-center' href="/">
                        <Image src={logo.src} height={40} width={40} className='rounded-full' alt='logo'></Image>
                        <h3>Sync Home</h3>
                    </Link>
                    <hr />
                    <MenuItem className='hover:text-black'>
                        <Link className='flex gap-2 items-center' href="/">
                            <GrHomeRounded></GrHomeRounded> Home
                        </Link>
                    </MenuItem>
                    <MenuItem> 
                    <Link className='flex gap-2 items-center' href="/admin-dashboard/all-users">
                        <IoPeopleOutline></IoPeopleOutline>
                        All Users
                        </Link> 
                    </MenuItem>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>;
        </div>
    );
};

export default AdminSidebar;