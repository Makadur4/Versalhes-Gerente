export default function EstoqueProduto(props) {
  return (
    <>
      <div className="overlay"></div>
      <div className="card_excluir">
        <div>
          <h1>Alterar quantidade de estoque</h1>
          <label className="label_estoque" htmlFor="estoque">
            Quantidade no estoque
          </label>
          <input
            className="input_estoque"
            id="estoque"
            type="text"
            placeholder="100"
          ></input>
        </div>
        <div className="campo_estoque">
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
