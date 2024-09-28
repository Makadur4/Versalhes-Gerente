export default function Cabecalho(props) {
  function Deslogar() {
    props.setStatue(false);
  }

  let componente;

  if (props.status == true) {
    componente = (
      <div className="sair" onClick={Deslogar}>
        <img className="icone" src="/svg/icone_sair.svg" />
        <span>Sair</span>
      </div>
    );
  }

  return (
    <header>
      <div className="Header">
        <div id="logo">
          <img id="imagem" src="/img/logo.png" />
          <img id="versalhes" src="/svg/texto_versalhes.svg" />
        </div>
        <div id="icones">{componente}</div>
      </div>
    </header>
  );
}
