import React from 'react';
import ResponsiveDrawer from './components/responsive.drawer';
import Box from '@mui/material/Box/Box';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      {/* <ResponsiveAppBar openMenu={undefined} /> */}
      <ResponsiveDrawer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            
            width: '100%',
            height: '100%',
          }}
        >
          <Outlet />
          {/* {props.children} */}
        </Box>
      </ResponsiveDrawer>
    </>
  );
}
