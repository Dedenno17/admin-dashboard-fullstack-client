import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Header from 'components/Header';
import OverviewChart from 'components/OverviewChart';
import React, { useState } from 'react';

const Overview = () => {
  const [view, setView] = useState('units');

  return (
    <Box sx={{ m: '1.5rem 2.5rem' }}>
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="75vh">
        <FormControl sx={{ mt: '1rem' }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            onChange={(e) => setView(e.target.value)}
            label="View"
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Overview;
