import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
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
import styled from 'styled-components';






const routes = [
  { label: 'Inicio', path: '/', icon: <AddHomeIcon /> },
  { label: 'Perfil', path: '/profile', icon: <AccessibilityNewIcon /> },
  { label: 'Mercados', path: '/mercados', icon: <AddBusinessIcon /> },
  { label: 'Colonias', path: '/colonias', icon: <GroupsIcon /> },
  { label: 'Precios', path: '/precios', icon: <MonetizationOnIcon /> },
  { label: 'Contacto', path: '/contact', icon: <MailIcon /> },
  { label: 'Información', path: '/about', icon: <InfoIcon /> },
];



const drawerWidth = 240;



function Inicio(props) {


  // Sidebar


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

  // return

  return (
    <>
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
              Inicio
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
        >

          <Layout>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>

          </Layout>

          <Layout>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>

          </Layout>

          <Layout>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>

          </Layout>



        </Box>
      </Box>


    </>
  );
}

export default Inicio;

const Layout = styled.div`
    width: 100%;
margin-top: 60px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap
`