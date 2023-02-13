import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from 'components/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { useGetUserPeformanceQuery } from 'store/api';
import CustomColumnMenu from '../../components/DataGridCustomColumnMenu';

const Peformance = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.userId.userId);
  const { data, isLoading } = useGetUserPeformanceQuery(userId);

  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      flex: 1,
    },
    {
      field: 'userId',
      headerName: 'User ID',
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: 'CreatedAt',
      flex: 1,
    },
    {
      field: 'products',
      headerName: '# of Products',
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => `${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box sx={{ padding: '1.5rem 2.5rem' }}>
      <Header
        title="PEFORMANCE"
        subTitle="Track Your Affiliate Sales Peformance Here"
      />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.primary.light,
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: 'none',
          },
          '& .MuiDataGrid-toolbarContainer .& .MuiButton-text': {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={(data && data.sales) || []}
          columns={columns}
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  );
};

export default Peformance;
