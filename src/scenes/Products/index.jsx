import React from 'react';
import Header from 'components/Header';
import { Box, useMediaQuery } from '@mui/material';
import { useGetProductsQuery } from 'store/api';
import Product from '../../components/Product';

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery('(min-width:1000px)');

  return (
    <Box sx={{ padding: '1.5rem 2.5rem' }}>
      <Header title="PRODUCTS" subTitle="See your list of product" />
      {data && !isLoading && (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0,1fr))"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            '& > div ': { gridColumn: isNonMobile ? undefined : 'span 4' },
          }}
        >
          {data.map((item) => (
            <Product
              key={item._id}
              _id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              rating={item.rating}
              category={item.category}
              supply={item.supply}
              stat={item.stat}
            />
          ))}
        </Box>
      )}
      {isLoading && <>Loading ...</>}
    </Box>
  );
};

export default Products;
