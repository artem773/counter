import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App_hooks';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App currentValue={0}/>
  </React.StrictMode>
);