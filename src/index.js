import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './context/Context';
import UserAuthContextProvider from './context/UserAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
    <Context>
    <App />
    </Context>
    </UserAuthContextProvider>
  </React.StrictMode>
);

