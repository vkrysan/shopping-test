// ProductList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchProducts } from '../../redux/productSlice';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error, searchQuery, sortOrder } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products
    .filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price)); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 32, justifyContent: 'center'}}>
        {filteredProducts.map(product => (
            <ProductCard product={product} />
        ))}
    </div>
  );
};

export default ProductList;
