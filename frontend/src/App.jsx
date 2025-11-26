import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [mensagem, setMensagem] = useState('Carregando...')

  useEffect(() => {
    axios.get('http://localhost:8080/api/pomolatte/teste')
      .then(resposta => {
        setMensagem(resposta.data)
      })
      .catch(erro => {
        console.error("Deu ruim!", erro)
        setMensagem('Erro ao conectar com o servidor')
      })
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Meu Pomodoro</h1>
      <div className="card">
        <h2>Status do Backend:</h2>
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          {mensagem}
        </p>
      </div>
    </div>
  )
}

export default App
