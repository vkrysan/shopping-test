import React from 'react';
import { Container } from '@mui/material';
import SearchBar from './components/Search/SearchBar';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart'
import PriceSort from './components/Search/PriceSort';

const App: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <Container>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontFamily: 'monospace', fontWeight: 'bold', color: 'rgb(12, 91, 130)', marginTop: '30px' }}>Redux Toolkit Shopping Cart</h1>
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 5 }}>
        <SearchBar onSearch={handleSearch} />
        <PriceSort />
        <Cart />
      </Container>
      <ProductList />
    </Container>
  );
};

export default App;