import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder } from '../../redux/productSlice';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { RootState } from '../../redux/store';

const PriceSort: React.FC = () => {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state: RootState) => state.products.sortOrder);

  const handleSortChange = (event: SelectChangeEvent) => {
    dispatch(setSortOrder(event.target.value as 'asc' | 'desc'));
  };

  return (
    <FormControl style={{width: '300px'}} margin="normal">
      <Select value={sortOrder} onChange={handleSortChange}>
        <MenuItem value="asc">Cheapest First</MenuItem>
        <MenuItem value="desc">Most Expensive First</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PriceSort;
