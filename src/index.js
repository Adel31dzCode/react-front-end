import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId="400765181734-h0ouiddukcplhdh34ikgv9ommkchg0b4.apps.googleusercontent.com">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
  </React.StrictMode>
);

