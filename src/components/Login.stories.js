import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Login from './Login';
import authReducer from '../redux/features/authSlice';
import themeReducer from '../redux/features/themeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});

export default {
  title: 'Login',
  component: Login,
};

const Template = (args) => (
  <Provider store={store}>
    <Login {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
