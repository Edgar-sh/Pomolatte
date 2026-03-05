import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Button from "./components/UI/Button";

const API_URL = import.meta.env.VITE_API_URL;

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
      <div className="bg-pomolatte h-screen w-full">
        <Button
          onClick={() => {
            console.log("teste");
          }}
        >
          Short-Break
        </Button>

        <Button>Lonng-Break</Button>
      </div>
    </>
  );
}
export default App;
