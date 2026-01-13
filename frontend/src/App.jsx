import axios from "axios";
import { useEffect, useState } from "react";

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
    <head>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Trocchi&display=swap');
  </style>

    <div>
      <h1>Pomolatte</h1>
      <h2>
        {pomodoro.minutes} :{" "}
        {pomodoro.seconds < 10 ? "0" + pomodoro.seconds : pomodoro.seconds}
      </h2>

      <p>Modo:{pomodoro.mode}</p>
      <p>sessões:{pomodoro.sessions}</p>

      <button onClick={iniciar}>iniciar</button>
      <button onClick={parar}>parar</button>
    </div>
    </head>,
  );
}
export default App;
