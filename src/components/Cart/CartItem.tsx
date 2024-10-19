import React from 'react';
import { ListItem, Typography, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { CartItem as CartItemType } from '../../types';
import { removeFromCart, updateQuantity } from '../../redux/cartSlice'; 

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id)); 
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity })); 
    }
  };

  return (
    <ListItem key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography style={{ maxWidth: '200px' }}>{item.title}</Typography>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography style={{ marginRight: '10px' }}>{item.price}$</Typography>
        
       
        <TextField
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          inputProps={{ min: 1 }}
          style={{ width: '60px', marginRight: '10px' }}
        />

        <IconButton onClick={handleRemove} color="inherit" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>
    </ListItem>
  );
};

export default CartItem;
