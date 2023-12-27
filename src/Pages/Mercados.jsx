import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import GroupsIcon from '@mui/icons-material/Groups';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';


const routes = [
  { label: 'Inicio', path: '/', icon: <AddHomeIcon/> },
  { label: 'Perfil', path: '/profile', icon: <AccessibilityNewIcon/> },
  { label: 'Mercados', path: '/mercados', icon: <AddBusinessIcon/> },
  { label: 'Colonias', path: '/colonias', icon: <GroupsIcon/> },
  { label: 'Precios', path: '/precios', icon: <MonetizationOnIcon/> },
  { label: 'Contacto', path: '/contact', icon: <MailIcon/> },
  { label: 'Información', path: '/about', icon: <InfoIcon/> },
];



const drawerWidth = 240;



function Mercados(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      {routes.map((route, index) => (
        <ListItem key={route.label} disablePadding>
          <ListItemButton component={Link} to={route.path}>
            <ListItemIcon>
              {route.icon}
            </ListItemIcon>
            <ListItemText primary={route.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
  </div>
);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'rgb(31,31,31)', 
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="abrir cajón"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mercados
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="carpetas de correo"
      >
        <Drawer
          container={window}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Mejora el rendimiento de apertura en dispositivos móviles.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      ></Box>
    </Box>
  );
}

export default Mercados;
