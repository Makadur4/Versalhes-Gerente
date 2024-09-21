import { useState } from "react";
import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import ListaProduto from "./componentes/ListaProduto";
import Login from "./componentes/Login";
import Rodape from "./componentes/Rodape";

function App() {
  const [logado, setLogado] = useState(false);

  let componente;

  if (logado == true) {
    componente = <ListaProduto />;
  } else {
    componente = <Login setStatue={setLogado} />;
  }

  return (
    <>
      <Cabecalho status={logado} setStatue={setLogado} />
      {componente}
      <Rodape />
    </>
  );
}

export default App;
