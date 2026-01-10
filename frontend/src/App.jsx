import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("clique no botão para testar");

  const requestToJava = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/pomolatte/ola",
      );

      setMessage(response.data);
    } catch (error) {
      setMessage("Erro! Não foi possivel fazer a requisição");
    }
  };

  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <h1>Teste de conexão</h1>

      <h2 style={{ color: "orange" }}> {message}</h2>

      <button
        onClick={requestToJava}
        style={{ padding: "30px 50px", fontSize: "16px" }}
      ></button>
    </div>
  );
}
export default App;
