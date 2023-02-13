import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

const Header = ({ title, subTitle }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        color={theme.palette.secondary[100]}
        variant="h2"
        fontWeight="bold"
        sx={{ mb: '5px' }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[100]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
