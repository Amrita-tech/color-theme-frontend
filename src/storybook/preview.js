import React from 'react';
import ReduxProvider from '../src/storybook/ReduxProvider';
import { addDecorator } from '@storybook/react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

addDecorator((story) => (
  <ReduxProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {story()}
    </ThemeProvider>
  </ReduxProvider>
));
