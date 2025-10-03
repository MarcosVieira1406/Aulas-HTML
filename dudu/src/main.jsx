import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Primeirocomponente from './components/Primeirocomponente.jsx'
import Mensagem from './components/Mensagem.jsx'
import MensagemProps from './components/MensagemProps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Primeirocomponente />
    <Mensagem título="Olá Marcos" subtítulo="Esse é um exemplo de props no React" />
    <MensagemProps titulo="Oficina" subtitulo="React" />
    <MensagemProps titulo="Oficina React" subtitulo="Turma Noite" />
  </StrictMode>,
)
