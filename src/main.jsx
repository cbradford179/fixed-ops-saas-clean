// 1) Import your CSS
import './index.css';

// 2) Bring in React & Auth0
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

// 3) Your App
import App from './App';

main
// 4) Boot your app once, wrapped in Auth0Provider
// 1) Import your CSS
import './index.css';

// 2) Bring in React & Auth0
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

// 3) Your App
import App from './App';

// 4) Boot your app once, wrapped in Auth0Provider
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  );

// 4) Boot up the app exactly once, wrapped in the Auth0Provider
cd-path/to/fixed-ops-saas-clean
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>
);
