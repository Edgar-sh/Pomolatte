import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [pomodoro, setPomodoro] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/pomolatte/status",
        );

        setPomodoro(res.data);
      } catch (err) {
        console.err("Erro ao tentar obter resposta!");
      }
    };
    fetchStatus();

    const interval = setInterval(fetchStatus, 1000);

    return () => clearInterval(interval);
  }, []);

  const iniciar = () => axios.get("http://localhost:8080/api/pomolatte/iniciar");
  const parar = () => axios.get("http://localhost:8080/api/pomolatte/parar");

  if (!pomodoro) return <p>Carregando...</p>; // caso não tenha dados.

  return (
    <div>
      <h1>Pomolatte</h1>
      <h2>
        {pomodoro.minutes} : {pomodoro.seconds < 10 ? "0" + pomodoro.seconds : pomodoro.seconds}
      </h2>

      <p>Modo:{pomodoro.mode}</p>
      <p>sessões:{pomodoro.sessions}</p>

      <button onClick={iniciar}>iniciar</button>
      <button onClick={parar}>parar</button>
    </div>
  );
}
export default App;
