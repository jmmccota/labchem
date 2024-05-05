import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BookIcon from '@mui/icons-material/Book';
import ResponsiveAppBar from './appbar.component';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {
  Typography,  
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { AppContext } from './app.context';
import { Link } from 'react-router-dom';

const drawerWidth = 260;

export default function ResponsiveDrawer(props: React.PropsWithChildren<unknown>) {
  const { children } = props;
  const routerData = React.useContext(AppContext);
  const { pages, main } = routerData!;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="./lab-logo.svg"
            sx={{
              mr: 1,
              maxWidth: 48,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {main?.title}
          </Typography>
        </Box>
        <Typography
          variant="caption"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
            letterSpacing: '0',
          }}
        >
          {main?.subtitle}
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {pages &&
          Object.entries(pages).map(([k, v], index) => (
            <ListItem key={k} disablePadding>
              <ListItemButton component={Link} to={k}>
                {/* <Link to={k}> */}
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={v.title} />
                {/* </Link> */}
              </ListItemButton>
            </ListItem>
          ))}
        <ListItem key="blog" disablePadding>
          <ListItemButton component={Link} to="/blog">
            {/* <Link to={k}> */}
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
            {/* </Link> */}
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window.document.body;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <Box
        sx={{
          ml: { xs: 0, sm: `${drawerWidth}px` },
          display: { xs: 'flex', sm: 'none' },
        }}
      >
        <ResponsiveAppBar openMenu={handleDrawerToggle} />
      </Box>
      <Toolbar
        sx={{
          display: { xs: 'none', sm: 'flex' },
          backgroundColor: 'primary.main',
        }}
      />

      <Box
        component="nav"
        sx={{ width: { xs: 0, sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
