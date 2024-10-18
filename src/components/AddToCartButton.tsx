import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

interface AddToCartButtonProps {
  productId: number;
  productTitle: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId, productTitle }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: productId, quantity: 1,
      title: productTitle,
      price: 0
    }));
  };

  return <Button onClick={handleAddToCart}>Add to Cart</Button>;
};

export default AddToCartButton;
