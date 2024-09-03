import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Ensure this is correctly importing the App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
