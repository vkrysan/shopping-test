import React, { useState } from 'react';
import { Typography, Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import CartModal from './CartModal';
import { RootState } from '../../redux/store';

const Cart: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Badge badgeContent={cartItems.length} color="primary">
        <Typography variant="h6" style={{ cursor: 'pointer', paddingRight: '30px' }} onClick={handleOpenModal}>
          Cart
        </Typography>
      </Badge>

      <CartModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        cartItems={cartItems}
        totalAmount={totalAmount}
      />
    </div>
  );
};

export default Cart;
