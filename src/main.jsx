import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Home } from './pages/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-screen min-h-screen bg-zinc-800'>
      <Home/>
    </div>
  </React.StrictMode>
)