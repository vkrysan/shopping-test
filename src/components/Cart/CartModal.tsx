import React from 'react';
import { Modal, Box, Typography, List, Button } from '@mui/material';
import { CartItem as CartItemType } from '../../types';
import CartItem from './CartItem';

interface CartModalProps {
  open: boolean;
  handleClose: () => void;
  cartItems: CartItemType[];
  totalAmount: number;
}

const CartModal: React.FC<CartModalProps> = ({ open, handleClose, cartItems, totalAmount }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="cart-modal-title"
      aria-describedby="cart-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '8px',
        }}
      >
        <Typography id="cart-modal-title" variant="h6" component="h2">
          Your Cart
        </Typography>
        <List>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </List>
        <Typography variant="h6">Total: ${totalAmount.toFixed(2)}</Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleClose}
          style={{ marginTop: '20px' }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CartModal;
