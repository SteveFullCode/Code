import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/home/home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' bg-zinc-800 min-h-screen w-screen'>
      <Home/>
    </div>
  </React.StrictMode>
)