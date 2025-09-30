import { useState } from "react";

import "./App.css";

import Cabecalho from "./components/cabecalho";
import Login from "./components/login";
import ListaPerfumes from "./components/lista-perfumes";
import Rodape from "./components/rodape";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("jwtToken") ?? "");

  function guardarToken(valor) {
    sessionStorage.setItem("jwtToken", valor);
    setToken(valor);
  }

  const componente = token == "" ? <Login guardarToken={guardarToken} /> : <ListaPerfumes guardarToken={guardarToken} token={token} />;

  return (
    <>
      <Cabecalho token={token} guardarToken={guardarToken} />
      {componente}
      <Rodape />
    </>
  );
}

export default App;
