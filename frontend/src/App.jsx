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

      <main className="main-content">
        <div className="timer-card">
          <div className="mode-tabs">
            <h1 className="title-card">
              {" "}
              {pomodoro.mode === "POMODORO"
                ? "Pomodoro"
                : pomodoro.mode === "SHORT_BREAK"
                  ? "Short-Break"
                  : pomodoro.mode === "LONG_BREAK"
                    ? "Long-Break"
                    : pomodoro.mode}{" "}
              {}
            </h1>
            {/* Abas */}
            <button
              className={`tab ${pomodoro.mode === "POMODORO" ? "active" : ""}`}
            >
              Pomodoro
            </button>
            <button
              className={`tab ${pomodoro.mode === "SHORT_BREAK" ? "active" : ""}`}
            >
              Short-Break
            </button>
            <button
              className={`tab ${pomodoro.mode === "LONG_BREAK" ? "active" : ""}`}
            >
              Long-Break
            </button>
          </div>
          <div className="timer-display">
            {String(pomodoro.minutes).padStart(2, "0")}:
            {String(pomodoro.seconds).padStart(2, "0")}{" "}
            {/* obrigatorio ter 2 caracteres, 'preenche com zero' */}
          </div>
          <button onClick={iniciar} className="btn-start">
            iniciar
          </button>
        </div>
      </main>
    </div>
  );
}
export default App;
