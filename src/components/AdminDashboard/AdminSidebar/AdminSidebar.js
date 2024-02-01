"use client"
import Link from 'next/link';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import logo from '@/assets/logo.png';
import './AdminSidebar.css';
import Image from 'next/image';
import { GrHomeRounded } from 'react-icons/gr';
import { IoPeopleOutline } from "react-icons/io5";
import { LuChevronsLeft, LuChevronsRight, LuLayoutGrid } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import { Button } from '@mui/material';


const AdminSidebar = () => {

    //const { collapseSidebar } = useProSidebar();
    const [collapsed, setCollapsed] = useState(false);

    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    };
    const handleToggleSidebar = (value) => {
        setToggled(!toggled);
    };

    return (
        <>
            <span className='lg:hidden flex fixed top-5 left-5 z-20 text-white text-xl' onClick={handleToggleSidebar}><LuLayoutGrid /></span>
            <Sidebar
                backgroundColor="#8338ec"
                breakPoint='md'
                collapsed={collapsed}
                toggled={toggled}
                rootStyles={{ height: '100vh', border: '0' }}
                onBackdropClick={() => setToggled((prev) => !prev)}
            >
                <Menu className='h-full text-white'>
                    <div className='grid grid-cols-4'>
                        {
                            !collapsed ? <Link
                                className='flex py-2 col-span-3 justify-center gap-5 font-catamaran font-bold uppercase text-xl items-center'
                                href="/">
                                <Image src={logo.src} height={40} width={40} className='rounded-full' alt='logo'></Image>
                                <h3>Sync Home</h3>
                            </Link> : ''
                        }
                        {collapsed ? (
                            <Button
                            className='py-4'
                                onClick={handleCollapsedChange}
                            ><LuChevronsRight className='text-white text-2xl' /></Button>
                        ) : (
                            <Button
                                onClick={handleCollapsedChange}
                            ><LuChevronsLeft className='text-white text-2xl' />
                            </Button>
                        )}
                    </div>
                    <hr />
                    <MenuItem icon={<GrHomeRounded />} className='hover:text-black'>
                        <Link href="/"> Home</Link>
                    </MenuItem>
                    <MenuItem icon={<CgProfile />} className='hover:text-black'>
                        <Link href="/admin-dashboard/profile">Profile</Link>
                    </MenuItem>
                    <MenuItem icon={<IoPeopleOutline />} className='hover:text-black'>
                        <Link href="/admin-dashboard/all-users">All Users</Link>
                    </MenuItem>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>;
        </>
        // #8338ec
    );
};

export default AdminSidebar;