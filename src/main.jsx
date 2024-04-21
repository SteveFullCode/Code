import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Profile from './pages/profile/profile';




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='bg-zinc-800 min-h-screen w-screen'>
        <Profile/>
      </div>
  </React.StrictMode>
);