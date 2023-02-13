import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  Divider,
} from '@mui/material';
import {
  ChevronLeft,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  PieChartOutlineOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  ChevronRightOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';

const navItems = [
  {
    text: 'Dashboard',
    icon: <HomeOutlined />,
  },
  {
    text: 'Client Facing',
    icon: null,
  },
  {
    text: 'Products',
    icon: <ShoppingCartOutlined />,
  },
  {
    text: 'Customers',
    icon: <Groups2Outlined />,
  },
  {
    text: 'Transaction',
    icon: <ReceiptLongOutlined />,
  },
  {
    text: 'Geography',
    icon: <PublicOutlined />,
  },
  {
    text: 'Sales',
    icon: null,
  },
  {
    text: 'Overview',
    icon: <PointOfSaleOutlined />,
  },
  {
    text: 'Daily',
    icon: <TodayOutlined />,
  },
  {
    text: 'Monthly',
    icon: <CalendarMonthOutlined />,
  },
  {
    text: 'Breakdown',
    icon: <PieChartOutlineOutlined />,
  },
  {
    text: 'Management',
    icon: null,
  },
  {
    text: 'Admin',
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: 'Peformance',
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  user,
  isSidebarOpen,
  setIsSidebarOpen,
  drawerWidth,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState('');
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    GOUCCI
                  </Typography>
                  {isNonMobile && (
                    <IconButton
                      onClick={() =>
                        setIsSidebarOpen((prevState) => !prevState)
                      }
                    >
                      <ChevronLeft />
                    </IconButton>
                  )}
                </Box>
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem' }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : 'transparent',
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: '2rem',
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: 'auto' }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          {/* user info */}
          <Box>
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: 'cover' }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: '25px' }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
