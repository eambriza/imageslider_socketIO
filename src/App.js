import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import Carousel from './components/carousel';
import NAV from './components/nav';
import FOOTER from './components/footer';
import APPBAR from './components/appbar';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <APPBAR />
      <NAV />
      <Carousel />
      <FOOTER />
    </ThemeProvider>
  );
}
