export default function (props) {
  function Logar() {
    props.setStatue(true);
  }

  return (
    <div className="login">
      <div>
        <div className="foto_perfil">
          <h1>
            <img src="/img/person-circle.svg" />
          </h1>
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
      <div className="esqueceu_senha"></div>
      <div className="botao_continuar">
        <button onClick={Logar}>Continuar</button>
      </div>
    </div>
  );
}
