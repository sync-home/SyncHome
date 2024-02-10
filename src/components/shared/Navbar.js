'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '/src/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import useAuthContext from '@/Hooks/useAuthContext';
import { Button } from '@mui/material';
import { getRole } from '@/utils/getRole';
import { usePathname } from 'next/navigation';



function Navbar() {

    const location = usePathname();
    const [ anchorElNav, setAnchorElNav ] = React.useState(null);
    const [ anchorElUser, setAnchorElUser ] = React.useState(null);
    const { user, loading, logOut } = useAuthContext()
    const [ role, setRole ] = React.useState(null)
    const [ activeLink, setActiveLink ] = React.useState(location ? location : '/');

    getRole(user?.email).then(data => {
        if (data?.role) setRole(data.role)
    });

    /* Feature pages */
    const pages = [
        {
            route: 'Home',
            pathname: '/'
        },
        {
            route: 'About Us',
            pathname: '/about'
        },
        {
            route: 'Contact Us',
            pathname: '/contact'
        },
        {
            route: 'Parking',
            pathname: '/parking'
        },
        {
            route: 'Features',
            pathname: '/features'
        },
        {
            route: !loading && user?.email ? 'Monitor' : '',
            pathname: !loading && user?.email ? '/rtm' : ''
        }
    ];


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (event) => {
        console.log(event.currentTarget);
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSignOut = () => {
        setAnchorElUser(null);
        logOut().then(() => {
            console.log('logout successfully.');
        }).catch((error) => {
            console.log(error);
        });
    };

    const handleActiveLink = (route) => {
        route && setActiveLink(route)

        anchorElNav && setAnchorElNav(null);
    }

    return (
        <AppBar sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', position: 'fixed', top: '0px', left: '0px', zIndex: '100' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <Image src={logo} height={30} width={30} sx={{ display: { xs: 'none', md: 'flex' } }} alt='logo' />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href='/'
                        className='text-white'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SyncHome
                    </Typography>

                    {/* menu for small device */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="small"
                            aria-label="account of current user"
                            aria-controls="small-menu-syncHome"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="small-menu-syncHome"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages?.length && pages.map((page) => (
                                <MenuItem key={page?.pathname} onClick={() => handleActiveLink(page?.pathname)}>
                                    <Link
                                        className={`btn ${page?.pathname === activeLink ? 'active' : ''}`}
                                        href={page?.pathname}>
                                        {page?.route}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* For small device */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, flexGrow: { xs: '1', sm: '0' } }}>
                        <Image src={logo} height={30} width={30} alt='logo' />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', sm: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SyncHome
                    </Typography>

                    {/* space */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

                    {/* menu For large devices */}
                    <Box sx={{ fontSize: '0.875rem', mr: 2, display: { xs: 'none', md: 'flex' }, wordSpacing: '-0.3em' }}>
                        {pages?.length && pages.map((page) => (
                            <Box key={page?.route} onClick={() => handleActiveLink(page?.pathname)}>
                                <Link
                                // style={{color: 'white'}}
                                    className={`btn ${page?.pathname === activeLink ? 'active' : ''}`}
                                    href={page?.pathname}

                                >
                                    {page?.route}
                                </Link>
                            </Box>
                        ))}
                    </Box>

                    {/* user image side */}
                    {!loading ? user?.email
                        ? <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title={user?.displayName || 'user photo'}>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={user?.displayName || 'user photo'} src={user?.photoURL} />
                                </IconButton>
                            </Tooltip>

                            {/* dropdown menu */}
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-syncHome"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Link href={`${role === 'admin' ? role : role === 'employee' ? role : role == 'resident' ? role : '/guest'}-dashboard/profile`}>Dashboard</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href={'/notification'}>Notifications</Link>
                                </MenuItem>
                                <MenuItem onClick={handleSignOut}>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </Box> :
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button variant="outlined" href={'/signin'} className='uppercase font-mono font-semibold text-white whitespace-nowrap' >
                                Sign In
                            </Button>
                            <Button variant="outlined" href={'/signup'} className='uppercase font-mono font-semibold text-white whitespace-nowrap' >
                                Sign Up
                            </Button>
                        </Box> : ''}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
