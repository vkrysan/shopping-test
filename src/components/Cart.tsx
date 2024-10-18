// Cart.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Typography, List } from '@mui/material';
import CartItem from './CartItem'; // Импортируем новый компонент CartItem

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <Typography variant="h6">Cart</Typography>
      <List>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} /> // Используем CartItem
        ))}
      </List>
    </div>
  );
};

export default Cart;
