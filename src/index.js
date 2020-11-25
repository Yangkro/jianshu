import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './theme'
import { GlobalStyle }from './style.js'
import {GlobalIconStyle} from  './statics/iconfont/iconfont.js'
ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalIconStyle />
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);