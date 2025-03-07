import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CloudIcon from '@mui/icons-material/Cloud';
import { Link } from "react-router-dom";

const AppNavbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };
    
    return (
        <AppBar position="static" sx={{ minHeight: 64 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ minHeight: 80 }}>
                <CloudIcon  sx={{ fontSize: 60, display: { xs: 'none', md: 'flex', color: 'white'}, mr: 1 }} />
                <Typography
                    variant="h6"
                    fontSize="80"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: '#888888',
                    textDecoration: 'none',
                    }}
                >
                    Cloudful
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="Menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon sx={{ display: { color: 'white'}}}/>
                    </IconButton>
                    <Menu
                    id="menu-appbar"
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
                    sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                    <MenuItem key="About" component={Link} to="/about" onClick={handleCloseNavMenu}>
                        <Typography sx={{ textAlign: 'center' }}>About</Typography>
                    </MenuItem>
                    <MenuItem key="About" component={Link} to="/contact" onClick={handleCloseNavMenu}>
                        <Typography sx={{ textAlign: 'center' }}>Contact</Typography>
                    </MenuItem>
                    <MenuItem key="Products" component={Link} to="/products" onClick={handleCloseNavMenu}>
                        <Typography sx={{ textAlign: 'center' }}>Products</Typography>
                    </MenuItem>
                    <MenuItem key="Services" component={Link} to="/services" onClick={handleCloseNavMenu}>
                        <Typography sx={{ textAlign: 'center' }}>Services</Typography>
                    </MenuItem>
                    </Menu>
                </Box>
                <CloudIcon sx={{ display: { xs: 'flex', md: 'none', color: 'white' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: '#888888',
                    textDecoration: 'none',
                    }}
                >
                    Cloudful
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                    <Button color="inherit" component={Link} to="/about" sx={{ my: 2, display: 'block' }}>About</Button>
                    <Button color="inherit" component={Link} to="/contact" sx={{ my: 2, display: 'block' }}>Contact</Button>
                    <Button color="inherit" component={Link} to="/products" sx={{ my: 2, display: 'block' }}>Products</Button>
                    <Button color="inherit" component={Link} to="/services" sx={{ my: 2, display: 'block' }}>Services</Button>
                </Box>
                </Toolbar>
            </Container>
            </AppBar>

    )  
};

export default AppNavbar;
