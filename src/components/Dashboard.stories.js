import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Dashboard from './Dashboard';
import authReducer from '../redux/features/authSlice';
import themeReducer from '../redux/features/themeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});

export default {
  title: 'Dashboard',
  component: Dashboard,
};

const Template = (args) => (
  <Provider store={store}>
    <Dashboard {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
