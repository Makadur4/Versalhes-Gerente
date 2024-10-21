import axios from "axios";
import { useState } from "react";

export default function Login(props) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function Logar(e) {
    e.preventDefault();

    const params = {
      login: login,
      senha: senha,
    };

    axios
      .get("http://localhost:8080/usuario", { params })
      .then(function (response) {
        props.setStatue(true);
      })
      .catch(function (erro) {
        alert("Usuário não localizado!");
        props.setStatue(false);
      });
  }

  return (
    <main className="login">
      <form onSubmit={Logar}>
        <div>
          <div className="foto_perfil">
            <img src="/svg/icone_perfil_azul.svg" />
          </div>
          <label className="label" htmlFor="login">
            Login:
          </label>
          <input
            type="text"
            className="input"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required={true}
          ></input>
          <label className="label" htmlFor="senha">
            Senha:
          </label>
          <input
            type="password"
            className="input2"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required={true}
          ></input>
        </div>
        <div className="botao_continuar">
          <button type="submit">Continuar</button>
        </div>
      </form>
    </main>
  );
}
