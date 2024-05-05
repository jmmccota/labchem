import React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Container, } from '@mui/material';
import { AppContext } from './app.context';
import { Link } from 'react-router-dom';

function ResponsiveAppBar({ openMenu }: { openMenu: VoidFunction }) {
  const routerData = React.useContext(AppContext);
  const { main } = routerData!;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={openMenu}
            color="inherit"
            sx={{
              p: 0,
              m: 0,
            }}
          >
            <Box
              component="img"
              src="./lab-logo-white.svg"
              sx={{
                mr: 1,
                maxWidth: 48,
              }}
            />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
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
              }}
            >
              {main?.subtitle}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
