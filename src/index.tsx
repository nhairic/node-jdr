import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/style.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import MutantYearZero from './MutantYearZero/Component/MutantYearZeroComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Container fluid className="mutant-year-zero">
      <MutantYearZero />
    </Container>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
