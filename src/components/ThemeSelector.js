import React from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { saveTheme } from '../redux/features/themeSlice';

const ThemeSelector = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(saveTheme(event.target.value));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="theme-selector-label">Theme Selection</InputLabel>
      <Select
        labelId="theme-selector-label"
        onChange={handleChange}>
        <MenuItem value="default">Default</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="light">Light</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ThemeSelector;
