import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

interface AddToCartButtonProps {
  productId: number;
  productTitle: string;
  productPrice: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId, productTitle, productPrice }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: productId, quantity: 1,
      title: productTitle,
      price: productPrice,
    }));
  };

  return <Button variant="outlined" style={{ position: 'absolute', top: 210}} onClick={handleAddToCart}>Add to Cart</Button>;
};

export default AddToCartButton;
