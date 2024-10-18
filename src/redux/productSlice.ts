import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../types'; // Импортируем оба интерфейса
 
interface ProductState {
  products: Product[];  // Указываем, что products - это массив объектов типа Product
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  searchQuery: '',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data; // Предполагаем, что API возвращает массив продуктов
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Здесь вы загружаете продукты
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching products';
      });
  },
});

export const { setSearchQuery } = productSlice.actions;

export default productSlice.reducer;