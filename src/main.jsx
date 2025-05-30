  // 1. Import your CSS first
  import './index.css';
+ // 2. Immediately log the Auth0 domain so you can verify it's coming through
+ console.log("🐛 AUTH0 DOMAIN:", import.meta.env.VITE_AUTH0_DOMAIN);
  // 3. React imports
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';

  // 4. Boot up the app exactly once
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
