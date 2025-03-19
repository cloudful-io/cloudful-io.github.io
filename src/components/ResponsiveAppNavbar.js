import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const drawerWidth = 240;

const navItems = [
    ['About', '/#/about'],
    ['Contact', '/#/contact'],
    ['Products', '/#/products'],
    ['Services', '/#/services'],
  ];

function ResponsiveAppNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, my: 2 }}>

            <img src={require('../assets/images/logo.png')}  alt="Cloudful Logo" style={{ width: 40, height: 40, objectFit: 'contain' }} />

            <Typography variant="h6" sx={{ my: 2, lineHeight: 1 }}>
                Cloudful
            </Typography>
         </Box>
      <Divider />
      <List>
        {navItems.map(([label, link]) => (
          <ListItem key={label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component="a" href={link}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none', color: '#555'} }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="a"
            color="inherit"
            sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', textDecoration: 'none', textAlign: 'center', display: { sm: 'none' } }}
            href="/">
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'center', display: { sm: 'none' } }}
            >
            Cloudful
          </Typography>
          </Box>
          <Box
            component="a"
            color="inherit"
            sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', width: 'auto' }}
            href="/">
                <Box
                    component="img"
                    sx={{
                        height: 64,  // Adjust size as needed
                        width: 'auto',
                        paddingRight: '4px',
                        display: { xs: 'none', sm: 'block'},
                    }}
                    
                    alt="Logo"
                    src={require('../assets/images/logo.png')}  // Relative path to the logo image
                    />
            
            
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Cloudful
          </Typography>
          </Box>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 'auto' }}>
            {navItems.map(([label, link]) => (
              <Button key={label} sx={{ color: '#555' }} component="a" href={link}>
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      </>
    )  
};

ResponsiveAppNavbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };


export default ResponsiveAppNavbar;