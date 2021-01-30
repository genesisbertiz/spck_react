import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { store } from "./store.jsx";
import { Home } from "./src/screens/index.jsx";
import { createBreakpoint } from 'breakpoint'
import {ThemeProvider} from 'styled-components'

export const breakpoint = createBreakpoint({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
})
export const theme = {
  primary: '#D94A70', 
  secondary: '#D99C2B'
}
ReactDOM.render(
  <StoreProvider store={store}>
     <ThemeProvider theme={theme}>
        <Home/>
     </ThemeProvider>
  </StoreProvider>,
  document.getElementById('react-app')
);
