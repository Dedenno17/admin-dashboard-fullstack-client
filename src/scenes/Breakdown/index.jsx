import { Box } from '@mui/material';
import BreakdownChart from 'components/BreakdownChart';
import Header from 'components/Header';
import React from 'react';

const Breakdown = () => {
  return (
    <Box m="1.25rem 2.5rem">
      <Header title="BREAKDOWN" subTitle="" />
      <Box mt="40px" height="75vh">
        <BreakdownChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Breakdown;
