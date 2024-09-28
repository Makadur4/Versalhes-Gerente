export default function Login(props) {
  function Logar() {
    props.setStatue(true);
  }

  return (
    <main className="login">
      <div>
        <div className="foto_perfil">
          <img src="/svg/icone_perfil_azul.svg" />
        </div>
        <label className="label" htmlFor="email">
          E-mail:
        </label>
        <input type="text" className="input" id="email"></input>
        <label className="label" htmlFor="senha">
          Senha:
        </label>
        <input type="text" className="input2" id="senha"></input>
      </div>
      <div className="botao_continuar">
        <button onClick={Logar}>Continuar</button>
      </div>
    </main>
  );
}
