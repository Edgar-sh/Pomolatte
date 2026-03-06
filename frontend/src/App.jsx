import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Button from "./components/UI/Button";
import PomolatteCard from "./components/Layout/PomolatteCard";

const API_URL = import.meta.env.VITE_API_URL;

const Inicar = () => {
  axios.get(API_URL + "/api/pomolatte/iniciar");
};

function App() {
  const [pomodoro, setPomodoro] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get(API_URL + "/api/pomolatte/status");
        setPomodoro(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStatus();
    return () => {};
  }, []);
  return (
    <>
      <Header />
      <div className=" bg-pomolatte h-screen w-full content-center">
        <PomolatteCard />
        {/*TODO: Mostrar texto de "carregamento" enquanto pomoddo é null*/}
        <h1>{pomodoro?.minutes + ":" + pomodoro?.seconds}</h1>
        <Button>Short-Break</Button>
        <Button>Lonng-Break</Button>
        <Button onClick={Inicar}>Iniciar</Button>
      </div>
    </>
  );
}
export default App;
