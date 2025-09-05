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
  el.style.cssText =
    'padding:16px;color:#b91c1c;background:#fee2e2;white-space:pre-wrap;';
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
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/"
      afterSignUpUrl="/"
      appearance={{
        variables: {
          colorPrimary: '#FFD700',       // Gold accent
          colorBackground: '#0F0F0F',    // Dark background
          colorText: '#FFFFFF',
          colorTextSecondary: '#9CA3AF',
          borderRadius: '0.75rem',       // rounded-xl
          fontSize: '16px',
        },
        elements: {
          // Global card containers (SignIn, SignUp, Profile, etc.)
          card: 'bg-[#0F0F0F] border border-gray-800 shadow-xl',

          // Header
          headerTitle: 'text-white font-bold',
          headerSubtitle: 'text-gray-400',

          // Input fields
          formFieldLabel: 'text-gray-300',
          formFieldInput:
            'bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FFD700]',

          // Primary buttons
          formButtonPrimary:
            'bg-[#FFD700] text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition',

          // Social login buttons
          socialButtonsBlockButton:
            'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700',
          socialButtonsBlockButtonText: 'text-white',

          // Footer links
          footerActionLink: 'text-[#FFD700] hover:text-yellow-400',

          // Avatar (outside in Navbar / Sidebar)
          avatarBox:
            'bg-[#FFD700] text-[#0F0F0F] font-bold border-2 border-[#FFD700] rounded-full',
          avatarImage: 'rounded-full',

          // UserButton dropdown (inside popover)
          userButtonPopoverCard:
            'bg-[#0F0F0F] border border-gray-700 text-white shadow-xl',
          userPreviewMainIdentifier: 'text-white font-semibold',
          userPreviewSecondaryIdentifier: 'text-gray-400',

          // Manage / Sign out buttons
          userButtonPopoverActionButton:
            'w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white hover:bg-[#FFD700]/20 hover:text-[#FFD700] transition',
          userButtonPopoverActionButtonText: 'text-white font-medium',
          userButtonPopoverActionButtonIcon: 'text-[#FFD700]',

          // Footer (Secured by Clerk text)
          userButtonPopoverFooter: 'text-gray-500 text-sm',
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
