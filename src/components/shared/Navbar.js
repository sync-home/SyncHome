"use client"
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

const pages = [
    {
        route: 'About Us',
        pathname: '/about'
    },
    {
        route: 'Features',
        pathname: '/features'
    },
    {
        route: 'Login',
        pathname: '/signin'
    },
    {
        route: 'Register',
        pathname: '/signup'
    },
];
const settings = [ 'Profile', 'Account', 'Dashboard', 'Logout' ];

function Navbar() {
    const [ anchorElNav, setAnchorElNav ] = React.useState(null);
    const [ anchorElUser, setAnchorElUser ] = React.useState(null);
    const [ user, setUser ] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" className='bg-white text-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <Image src={logo} height={30} width={30} sx={{ display: { xs: 'none', md: 'flex' } }} alt='logo' />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        className='text-black'
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
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-syncHome"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-syncHome"
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
                                <MenuItem key={page?.pathname} onClick={handleCloseNavMenu}>
                                    <Link
                                        className='text-black uppercase font-mono font-semibold text-center'
                                        href={page?.pathname}>
                                        {page?.route}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <Image src={logo} height={30} width={30} sx={{ display: { xs: 'none', md: 'flex' } }} alt='logo' />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#"
                        className='text-black'
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
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
                    <Box sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        {pages?.length && pages.map((page) => (
                            <Link
                                className='text-black my-2 mx-1 block uppercase font-mono font-semibold'
                                href={page?.pathname}
                                key={page?.pathname}
                            >
                                {page?.route}
                            </Link>
                        ))}
                    </Box>

                    {/* user image side */}
                    {user ? <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
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
                            {settings?.length && settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> :
                        <Link href={'#'} variant="contained" className='uppercase font-mono font-semibold text-black' color="primary">
                            Login
                        </Link>}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
