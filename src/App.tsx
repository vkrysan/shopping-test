import React from 'react';
import { Container } from '@mui/material';
import SearchBar from './components/SearchBar'; // Убедитесь, что импорт правильный
import ProductList from './components/ProductList';
import Cart from './components/Cart'

const App: React.FC = () => {
  // Функция обработки поиска
  const handleSearch = (query: string) => {
    // Здесь вы можете выполнить действия с поиском, например, вызвать экшн Redux
    console.log('Searching for:', query);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <Cart />
      <ProductList />
    </Container>
  );
};

export default App;