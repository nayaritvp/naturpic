import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { ProductProvider } from './context/ProductProvider.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </ProductProvider>
);