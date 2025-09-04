// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.jsx';
import './index.css';

// Publishable key (Vite must expose it as VITE_CLERK_PUBLISHABLE_KEY)
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  const msg = 'Missing VITE_CLERK_PUBLISHABLE_KEY in .env';
  console.error(msg);
  const el = document.createElement('pre');
  el.style.cssText = 'padding:16px;color:#b91c1c;background:#fee2e2;white-space:pre-wrap;';
  el.textContent = msg;
  document.body.appendChild(el);
  throw new Error(msg);
}

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element #root not found');
}

createRoot(rootEl).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      // Optional UX hooks:
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/"
      afterSignUpUrl="/"
      appearance={{
        variables: { colorPrimary: '#000000' },
        elements: { formButtonPrimary: 'bg-black hover:opacity-90' },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
