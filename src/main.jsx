import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PokeApiProvider from './context/PokeApi.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <PokeApiProvider>
        <App />
    </PokeApiProvider>
    </BrowserRouter>
  // </React.StrictMode>,
)
