import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Primeirocomponente from './components/Primeirocomponente.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Primeirocomponente />
  </StrictMode>,
)
