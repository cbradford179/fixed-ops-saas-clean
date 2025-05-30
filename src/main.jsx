// 1) Import your CSS first
import './index.css';

+// 2) Bring in React & Auth0
+import React from 'react';
+import ReactDOM from 'react-dom/client';
+import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
+    // 3) Wrap the entire app in Auth0Provider
+    <Auth0Provider
+      domain={import.meta.env.VITE_AUTH0_DOMAIN}
+      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
+      authorizationParams={{ redirect_uri: window.location.origin }}
+    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
+    </Auth0Provider>
  );
