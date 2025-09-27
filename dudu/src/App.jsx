import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import peterbot from './assets/peterbot.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 id="myheader">Oficina React</h1>
    <h2>Seminário</h2>
    <h3>Dia 2 - 26/09/2025</h3>
    <a 
    href= "https://www.google.com/" id="link">Google</a>

    <ul class="lista">
        <li>Segunda</li>
        <li>Terça</li>
        <li>Quarta</li>
        <li>Quinta</li>
        <li>Sexta</li>
        <li>Sábado</li>
        <li>Domingo</li>
    </ul>

    <ol class="lista">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ol>
    
    <table class="tabelas">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Profissão</th>
        </tr>
        <tr>
            <td>01</td>
            <td>Marcos</td>
            <td>Programador</td>
        </tr>
        <tr>
            <td>02</td>
            <td>Alexandra</td>
            <td>Contabilidade</td>
        </tr>
    </table>
    <p>Carro</p>
    <img src='/carro.jpg' alt='carro'></img>
    <p>Peterbot</p>
    <img src={peterbot} alt="outra imagem"></img>
    </div>
  )
}

export default App
