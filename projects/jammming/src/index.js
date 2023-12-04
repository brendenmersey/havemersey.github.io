import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './js/components/App/App';

import reportWebVitals from './reportWebVitals';

import './scss/index.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const devMode = false;

root.render(
  <>
    { devMode ? <React.StrictMode><App /></React.StrictMode> : <App /> }
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
