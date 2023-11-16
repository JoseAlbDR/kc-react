import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import storage from './utils/storage.ts';
import { setAuthorizationHeader } from './api/client.ts';

const accessToken = storage.get('accessToken');
if (accessToken) {
  setAuthorizationHeader(accessToken);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App initiallyLogged={!!accessToken} />
  </React.StrictMode>
);
