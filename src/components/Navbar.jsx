import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import FlexBetween from './FlexBetween';
import {
  Menu as MenuIcon,
  Search,
  DarkModeOutlined,
  LightModeOutlined,
  Settings,
  ArrowDropDownOutlined,
} from '@mui/icons-material';
import { setMode } from 'store/themeSlice';

const Navbar = ({ user, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const clickHandler = (event) => setAnchorEl(event.currentTarget);
  const closeHandler = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{ position: 'static', backgroundColor: 'none', boxShadow: 'none' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton
            onClick={() => setIsSidebarOpen((prevState) => !prevState)}
          >
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search ..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' && (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            )}
            {theme.palette.mode === 'light' && (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <IconButton>
            <Settings sx={{ fontSize: '25px' }} />
          </IconButton>
        </FlexBetween>
        {/* user info */}
        <FlexBetween>
          <Button
            onClick={clickHandler}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textTransform: 'none',
              gap: '1rem',
            }}
          >
            <Box
              component="img"
              alt="profile"
              src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              height="32px"
              width="32px"
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
            <ArrowDropDownOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: '25px' }}
            />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={closeHandler}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <MenuItem onClick={closeHandler}>Log Out</MenuItem>
          </Menu>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
