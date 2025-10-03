import { useState } from "react";

import { validarUsuario } from "../services/usuario-service";

export default function Login(props) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  async function confirmarOperacao(e) {
    e.preventDefault();

    try {
      const token = await validarUsuario(login, senha);
      props.guardarToken(token);
      return;
    } catch (e) {
      if (erro.codigo < 500) {
        alert("Usuário ou senha inválido. Por favor, tente novamente!");
      } else {
        alert(erro.obterMensagem());
      }
    }
  }

  return (
    <main className="login">
      <form onSubmit={confirmarOperacao}>
        <div>
          <div className="foto_perfil">
            <img src="/svg/icone_perfil_azul.svg" />
          </div>
          <label className="label" htmlFor="login">
            Login:
          </label>
          <input type="text" className="input" id="login" value={login} onChange={(e) => setLogin(e.target.value)} required={true}></input>
          <label className="label" htmlFor="senha">
            Senha:
          </label>
          <input type="password" className="input2" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required={true}></input>
        </div>
        <div className="botao_continuar">
          <button type="submit">Continuar</button>
        </div>
      </form>
    </main>
  );
}
