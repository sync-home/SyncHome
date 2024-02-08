"use client"
import Link from 'next/link';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { LuChevronsLeft, LuChevronsRight, LuLayoutGrid } from "react-icons/lu";
import { useState } from 'react';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DashboardSidebar = ({ adminSidebarData }) => {

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
                    {
                        adminSidebarData.map((item, idx) => (
                            <MenuItem
                                key={idx}
                                icon={<FontAwesomeIcon icon={item.icon} />}
                                component={<Link href={`${item.path}`} />}
                                className='hover:text-black'>
                                {item.name}
                            </MenuItem>
                        ))
                    }
                </Menu>
            </Sidebar>;
        </>
    );
};

export default DashboardSidebar;