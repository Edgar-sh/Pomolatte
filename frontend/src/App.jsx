import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [pomodoro, setPomodoro] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/pomolatte/status`);

        setPomodoro(res.data);
      } catch (err) {
        console.error("Erro ao tentar obter resposta!");
      }
    };
    fetchStatus();

    const interval = setInterval(fetchStatus, 1000);

    return () => clearInterval(interval);
  }, []);

  const iniciar = () => axios.get(`${API_URL}/api/pomolatte/iniciar`);
  const parar = () => axios.get(`${API_URL}/api/pomolatte/parar`);

  if (!pomodoro) return <p>Carregando...</p>; // caso não tenha dados.

  return (
    <div className="container">
      <header className="navbar">
        <img src="./icon_pomolatte.png" alt="logo do pomolatte" />
        <div className="settings">
          <img src="./gear_settings.png" alt="icon de configuração" />
        </div>
      </header>

      <main>
        <h1>
          {pomodoro.minutes}:{pomodoro.seconds}
        </h1>
      </main>
    </div>
  );
}
export default App;
