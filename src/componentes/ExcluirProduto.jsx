export default function ExcluirProduto(props) {
  return (
    <>
      <div className="overlay"></div>
      <div className="card_excluir">
        <div>
          <h1>Excluir Produto</h1>
          <p>Deseja realmente excluir o produto?</p>
        </div>
        <div className="campo_excluir">
          <button className="cancelar" onClick={props.Fechar}>
            Cancelar
          </button>
          <button className="confirmar" onClick={props.Fechar}>
            Confirmar
          </button>
        </div>
      </div>
    </>
  );
}
