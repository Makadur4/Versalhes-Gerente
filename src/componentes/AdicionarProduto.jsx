export default function AdicionarProduto(props) {
  return (
    <>
      <div className="overlay"></div>
      <div className="card_detalhe">
        <h1>Novo Produto</h1>
        <div className="campo_produto">
          <div className="quadro_foto">
            <img src="/img/card-image.svg"></img>
          </div>
          <div className="cadastro_produto">
            <label className="label_produto" htmlFor="nome_produto">
              Nome do Produto
            </label>
            <input className="input_nome" id="nome_produto" type="text"></input>
            <label className="label_produto" htmlFor="nome_produto">
              Marca
            </label>
            <select className="select" id="nome_produto"></select>
            <label className="label_produto" htmlFor="nome_produto">
              Tipo
            </label>
            <select className="select" id="nome_produto"></select>
          </div>
        </div>
        <div>
          <label className="descricao" htmlFor="input_descricao">
            Descrição
          </label>
          <input
            className="input_descricao"
            id="input_descricao"
            type="text"
          ></input>
        </div>
        <div className="campo_produto2">
          <div className="campo_produto3">
            <div>
              <label className="label_produto2">Preço a Vista</label>
              <input className="input_condicao" type="text"></input>
            </div>
            <div>
              <label className="label_produto2">Preço a Prazo</label>
              <input className="input_condicao" type="text"></input>
            </div>
            <div>
              <label className="label_produto2">Qtd. Parcelas</label>
              <input className="input_condicao" type="text"></input>
            </div>
          </div>
          <div className="campo_produto4">
            <button className="cancelar" onClick={props.Fechar}>
              Cancelar
            </button>
            <button className="confirmar" onClick={props.Fechar}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
