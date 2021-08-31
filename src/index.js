import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createMuiTheme, } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#F76B40",
    }
  }
})
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
