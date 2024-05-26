// ThemeSelector.js
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../redux/features/themeSlice';

const ThemeSelector = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setTheme(event.target.value));
  };

  const colorOptions = useMemo(() => {
    return ['red', 'blue', 'green', 'purple', 'yellow'];
  }, []);

  return (
    <div>
      <select value={theme} onChange={handleChange}>
        {colorOptions.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(ThemeSelector);
