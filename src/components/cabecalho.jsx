export default function (props) {
  const componente =
    props.status != "" ? (
      <div className="sair" onClick={() => props.guardarToken("")}>
        <img className="icone" src="/svg/icone_sair.svg" />
        <span>Sair</span>
      </div>
    ) : null;

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
