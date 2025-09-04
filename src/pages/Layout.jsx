import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { SignIn, useUser, UserButton, SignedIn } from '@clerk/clerk-react';

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  return user ? (
    <div className="flex flex-col items-start justify-start h-screen bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full px-8 min-h-16 flex items-center justify-between border-b border-[#333333] bg-[#1A1A1A] relative z-10">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center cursor-pointer"
          onClick={() => navigate('/')}
          aria-label="Go to home"
        >
          <Logo className="w-8 h-6 mr-2" />
          <span className="text-[#FFD700] font-bold text-xl">VisionCast</span>
        </button>

        {/* Right cluster */}
        <div className="flex items-center gap-4">
          {/* Greeting (Desktop) */}
          <div className="hidden md:block text-right">
            <p className="text-gray-400 text-sm">Welcome back</p>
            <p className="text-[#FFD700] font-medium">{user?.firstName}</p>
          </div>

          {/* Clerk user menu (avatar + popover) */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'ring-1 ring-[#333333] rounded-full',
                  userButtonPopoverCard: 'bg-[#1A1A1A] border border-[#333333]',
                  userButtonPopoverActionButton: 'hover:bg-[#2A2A2A]',
                  userButtonPopoverFooter: 'border-t border-[#333333]',
                },
              }}
            />
          </SignedIn>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setSidebar((s) => !s)}
            className="sm:hidden p-1 rounded hover:bg-[#2A2A2A]"
            aria-label={sidebar ? 'Close menu' : 'Open menu'}
          >
            {sidebar ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-1 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] overflow-hidden relative">
          {/* Animated background elements for main content */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-500/3 to-orange-500/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    // Custom Sign In Page with Dark Theme
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center max-w-md mx-auto p-8 relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Logo className="w-12 h-10 mr-3" />
          <span className="text-[#FFD700] font-bold text-2xl">VisionCast</span>
        </div>

        {/* Welcome Message */}
        <h1 className="text-3xl font-bold text-white mb-4">Welcome to VisionCast</h1>
        <p className="text-gray-400 mb-8">Sign in to start creating amazing AI-powered content</p>

        {/* Sign In Component (themed + redirects to /ai) */}
        <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6">
          <SignIn
            appearance={{
              variables: {
                colorPrimary: '#FFD700',
                colorText: '#ffffff',
                colorTextSecondary: '#9CA3AF',
                colorBackground: '#1A1A1A',
                colorInputBackground: '#2A2A2A',
                colorInputText: '#ffffff',
                borderRadius: '0.75rem',
              },
              elements: {
                card: 'bg-[#1A1A1A] border border-[#333333]',
                headerTitle: 'text-[#FFD700]',
                headerSubtitle: 'text-gray-400',
                formButtonPrimary:
                  'bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0F0F0F] hover:opacity-90',
                formFieldInput:
                  'bg-[#2A2A2A] border-[#333333] text-white placeholder-gray-500 focus:ring-2 focus:ring-[#FFD700] focus:border-transparent',
                socialButtonsBlockButton:
                  'border-[#333333] text-white hover:bg-[#2A2A2A]',
                footerActionLink: 'text-[#FFD700] hover:text-[#FFA500]',
                dividerLine: 'bg-[#333333]',
                dividerText: 'text-gray-500',
              },
            }}
            redirectUrl="/ai"
            signUpRedirectUrl="/ai"
          />
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <FeaturePill glyph="AI" label="AI Content" />
          <FeaturePill glyph="📱" label="Auto Post" />
          <FeaturePill glyph="📊" label="Analytics" />
        </div>
      </div>
    </div>
  );
};

export default Layout;

/* ---------- Small UI bits ---------- */
function Logo({ className = '' }) {
  return (
    <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8.63281 0L15.8667 6.18025C16.2962 6.54716 16.5438 7.08559 16.5438 7.65266V12.3104L9.30979 6.13018C8.88033 5.76327 8.63281 5.22484 8.63281 4.65773V0Z" fill="#FFD700"/>
      <path d="M8.63281 27.9999L15.8667 21.8196C16.2962 21.4527 16.5438 20.9143 16.5438 20.3472V15.6895L9.30979 21.8697C8.88033 22.2366 8.63281 22.775 8.63281 23.3421V27.9999Z" fill="#FFD700"/>
      <path d="M0 6.5166L7.13558 12.5788C7.48152 12.8727 7.91958 13.0339 8.37228 13.0339H14.1268L7.00881 6.97314C6.66261 6.67835 6.22387 6.5166 5.77046 6.5166H0Z" fill="#FFD700"/>
      <path d="M0 21.4822L7.09169 15.4235C7.43826 15.1274 7.87793 14.9648 8.33245 14.9648H14.144L7.00839 21.027C6.66242 21.3209 6.22434 21.4822 5.77166 21.4822H0Z" fill="#FFD700"/>
      <path d="M26.3719 0L19.1379 6.18025C18.7085 6.54716 18.4609 7.08559 18.4609 7.65266V12.3104L25.6949 6.13018C26.1243 5.76327 26.3719 5.22484 26.3719 4.65773V0Z" fill="#FFD700"/>
      <path d="M26.3719 27.9999L19.1379 21.8196C18.7085 21.4527 18.4609 20.9143 18.4609 20.3472V15.6895L25.6949 21.8697C26.1243 22.2366 26.3719 22.775 26.3719 23.3421V27.9999Z" fill="#FFD700"/>
      <path d="M35.0019 6.5166L27.8663 12.5788C27.5204 12.8727 27.0822 13.0339 26.6296 13.0339H20.875L27.9931 6.97314C28.3392 6.67835 28.778 6.5166 29.2314 6.5166H35.0019Z" fill="#FFD700"/>
      <path d="M34.9994 21.4822L27.9077 15.4235C27.5612 15.1274 27.1214 14.9648 26.6669 14.9648H20.8555L27.991 21.027C28.337 21.3209 28.775 21.4822 29.2277 21.4822H34.9994Z" fill="#FFD700"/>
    </svg>
  );
}

function FeaturePill({ label, glyph }) {
  return (
    <div className="p-3">
      <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] flex items-center justify-center">
        <span className="text-[#0F0F0F] text-xs font-bold">{glyph}</span>
      </div>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  );
}
