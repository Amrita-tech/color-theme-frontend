import React from 'react';
import { SketchPicker } from 'react-color';
import { useDispatch } from 'react-redux';
import { setPrimaryColor, saveTheme } from '../redux/features/themeSlice';

const ColorPicker = () => {
  const dispatch = useDispatch();

  const handleColorChange = (color) => {
    dispatch(setPrimaryColor(color.hex));
    dispatch(saveTheme({ primaryColor: color.hex }));
  };

  return (
    <div>
      <SketchPicker color="#1976d2" onChangeComplete={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
