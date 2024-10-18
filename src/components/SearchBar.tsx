import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/productSlice';
import { RootState } from '../redux/store';
import { TextField } from '@mui/material';

// Определяем интерфейс для пропсов
interface SearchBarProps {
  onSearch: (query: string) => void; // Ожидаемый пропс onSearch
}

const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.products.searchQuery);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query)); // Обновляем строку поиска в Redux
  };

  return (
    <TextField
      value={searchQuery}
      onChange={handleChange}
      label="Search Products"
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default SearchBar;