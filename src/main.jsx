import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthPovider } from './providers/AuthPovider.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <AuthPovider>
       <App />
     </AuthPovider>
  </React.StrictMode>,
)
