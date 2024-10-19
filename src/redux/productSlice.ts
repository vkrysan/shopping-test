import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../types';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  sortOrder: 'asc' | 'desc';
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  searchQuery: '',
  sortOrder: 'asc', 
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching products';
      });
  },
});

export const { setSearchQuery, setSortOrder } = productSlice.actions;

export default productSlice.reducer;
