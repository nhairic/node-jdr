import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import MutantYearZero from './MutantYearZero/MutantYearZero';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MutantYearZero />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
