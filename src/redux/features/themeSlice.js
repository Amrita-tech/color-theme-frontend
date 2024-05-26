import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTheme = createAsyncThunk('theme/fetchTheme', async (_, { getState }) => {
  const state = getState();
  const token = state.auth.token;
  const response = await axios.get('http://localhost:5000/api/theme', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const saveTheme = createAsyncThunk('theme/saveTheme', async (theme, { getState }) => {
  const state = getState();
  const token = state.auth.token;
  const response = await axios.post('http://localhost:5000/api/theme', theme, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themePreference: 'light',
    primaryColor: '#1976d2',
  },
  reducers: {
    setPrimaryColor(state, action) {
      state.primaryColor = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTheme.fulfilled, (state, action) => {
        state.primaryColor = action.payload.primaryColor;
        state.themePreference = action.payload.themePreference;
      })
      .addCase(saveTheme.fulfilled, (state, action) => {
        state.primaryColor = action.payload.primaryColor;
        state.themePreference = action.payload.themePreference;
      });
  },
});

export const { setPrimaryColor } = themeSlice.actions;
export default themeSlice.reducer;
