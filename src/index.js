import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  /* other styles */
  * {
      margin: 0;
      padding: 0;
  }
  body {
    padding: 50px 0;
    background-color: #f1dba9;
  }
  h1 {
      text-align: center;
      margin-bottom: 18px;
      color: #1078FF;
      text-transform: uppercase;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
