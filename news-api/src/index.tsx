import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './data/context/GlobalContext';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </React.StrictMode>
  </BrowserRouter>
);