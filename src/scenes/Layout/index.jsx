import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetUserQuery } from '../../store/api';

const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const userId = useSelector((state) => state.userId.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box width="100%" height="100%" display={isNonMobile ? 'flex' : 'block'}>
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar setIsSidebarOpen={setIsSidebarOpen} user={data || {}} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
