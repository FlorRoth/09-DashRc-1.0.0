import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter} from "react-router-dom";
import { AuthPovider } from './providers/AuthPovider.jsx';
import { ProductsProvider } from './products/ProductsProvider.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <AuthPovider>
      <ProductsProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </ProductsProvider>
     </AuthPovider>
  </React.StrictMode>,
)
