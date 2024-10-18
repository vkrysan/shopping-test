import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error, searchQuery } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // Загружаем товары при первом монтировании
  }, [dispatch]);

  // Фильтрация продуктов на основе строки поиска из Redux
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Grid container spacing={2}>
        {filteredProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;