// CartItem.tsx
import React from 'react';
import { ListItem, Typography, TextField } from '@mui/material';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <ListItem key={item.id}>
      <Typography>{item.title}</Typography>
      <TextField type="number" value={item.quantity} />
    </ListItem>
  );
};

export default CartItem;
