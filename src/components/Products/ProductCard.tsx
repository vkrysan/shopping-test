import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import AddToCartButton from './AddToCartButton'; 
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ width: 345, height: '400px' }}>
      <CardMedia component="img" height="140" image={product.image} alt={product.title} />
      <CardContent sx={{ position: 'relative' }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <AddToCartButton productId={product.id} productTitle={product.title} productPrice={product.price} /> 
      </CardContent>
    </Card>
  );
};

export default ProductCard;
