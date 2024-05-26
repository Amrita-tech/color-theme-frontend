import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await api.post('http://localhost:5000/api/users/login', credentials);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    });
  },
});

export default authSlice.reducer;
