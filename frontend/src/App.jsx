import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Button from "./components/UI/Button";
import PomolatteCard from "./components/Layout/PomolatteCard";
import PomolatteTimer from "./components/UI/PomolatteTimer";
import PomolatteTitle from "./components/UI/PomolatteTitle";
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
        <PomolatteCard>
          <PomolatteTitle modeTitle={pomodoro?.mode}></PomolatteTitle>
          <div className="flex flex-row gap-6">
            <Button>Pomodoro</Button>
            <Button>Short-Break</Button>
            <Button>Lonng-Break</Button>
          </div>
          <PomolatteTimer
            minutes={pomodoro?.minutes}
            seconds={pomodoro?.seconds}
          />
        </PomolatteCard>
        {/*TODO: Mostrar texto de "carregamento" enquanto pomodoro é null*/}
      </div>
    </>
  );
}
export default App;
