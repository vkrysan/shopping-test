import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice'; // Импорт редюсера корзины

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer, // Добавьте редюсер корзины сюда
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;