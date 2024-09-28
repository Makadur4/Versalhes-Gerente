export default function AlterarProduto(props) {
  return (
    <>
      <div className="overlay"></div>
      <div className="card_detalhe">
        <h1>Alterar Produto</h1>
        <div className="campo_produto">
          <div className="quadro_foto2">
            <img src="/img/perfume1.png"></img>
          </div>
          <div className="cadastro_produto">
            <label className="label_produto" htmlFor="nome_produto">
              Nome do Produto
            </label>
            <input
              className="input_nome"
              id="nome_produto"
              type="text"
              placeholder="PERFUME DIOR SAUVAGE MASCULINO EAU DE TOILETTE"
            ></input>
            <label className="label_produto" htmlFor="nome_produto">
              Marca
            </label>
            <select className="select" id="nome_produto">
              <option>Dior</option>
              <option>Dolce & Gabanna</option>
              <option>Versace</option>
              <option>Paco Rabanne</option>
              <option>Chanel</option>
              <option>Ralph Lauren</option>
            </select>
            <label className="label_produto" htmlFor="nome_produto">
              Tipo
            </label>
            <select className="select" id="nome_produto">
              <option>Amadeirado</option>
              <option>Cítrico</option>
              <option>Floral</option>
              <option>Frutal</option>
              <option>Aromático</option>
              <option>Couro</option>
            </select>
          </div>
        </div>
        <div>
          <label className="descricao" htmlFor="input_descricao">
            Descrição
          </label>
          <textarea
            className="input_descricao"
            placeholder="   François Demachy, perfumista-Criador de Dior, inspirou-se no deserto, na hora mágica do crepúsculo. Misturado com a frieza da noite, o ar ardente do deserto exala fragrâncias profundas. Na hora em que os lobos saem e o céu é incendiado, uma nova magia se desenrola.
  
   A bergamota da Calábria, tão suculenta e espirituosa como sempre, convida novas notas picantes a aumentar a plenitude e a sensualidade, já que o rastro ambarado do Ambroxan® está envolto nos acentos esfumados do absoluto da baunilha de Papua Nova Guiné, para maior virilidade."
          ></textarea>
        </div>
        <div className="campo_produto2">
          <div className="campo_produto3">
            <div>
              <label className="label_produto2">Preço a Vista</label>
              <input
                className="input_condicao"
                type="text"
                placeholder="499,99"
              ></input>
            </div>
            <div>
              <label className="label_produto2">Preço a Prazo</label>
              <input
                className="input_condicao"
                type="text"
                placeholder="509,99"
              ></input>
            </div>
            <div>
              <label className="label_produto2">Qtd. Parcelas</label>
              <input
                className="input_condicao"
                type="text"
                placeholder="12"
              ></input>
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
