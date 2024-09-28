export default function Cabecalho(props) {
  function Deslogar() {
    props.setStatue(false);
  }

  let componente;

  if (props.status == true) {
    componente = (
      <div className="sair" onClick={Deslogar}>
        <img className="icone" src="/img/box-arrow-left.svg" />
        <span>Sair</span>
      </div>
    );
  }

  return (
    <header>
      <div className="Header">
        <div id="logo">
          <img id="imagem" src="/img/logo.png" />
          <img id="versalhes" src="/img/nome.svg" />
        </div>
        <div id="icones">{componente}</div>
      </div>
    </header>
  );
}
