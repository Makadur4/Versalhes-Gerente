export default function Filtro(props) {
  return (
    <>
      <div className="overlay"></div>
      <div className="div_filtro1">
        <div className="div_filtro2">
          <div className="filtro">
            <span>Filtros</span>
          </div>
          <div className="itens_filtro">
            <div className="div_preco">
              <span>Preço</span>
              <input
                className="input_preco"
                type="range"
                id="price-range"
                min="0"
                max="1000"
                step="10"
              ></input>
            </div>
            <div className="div_itens">
              <span>Marca</span>
              <ul>
                <li>
                  <input type="checkbox"></input> Dior
                </li>
                <li>
                  <input type="checkbox"></input>Dolce & Gabbana
                </li>
                <li>
                  <input type="checkbox"></input>Versace
                </li>
                <li>
                  <input type="checkbox"></input>Paco Rabbane
                </li>
                <li>
                  <input type="checkbox"></input>Channel
                </li>
                <li>
                  <input type="checkbox"></input>Ralph Lauren
                </li>
              </ul>
            </div>
            <div className="div_itens">
              <span>Tipo</span>
              <ul>
                <li>
                  <input type="checkbox"></input>Cítrico
                </li>
                <li>
                  <input type="checkbox"></input>Floral
                </li>
                <li>
                  <input type="checkbox"></input>Amadeirado
                </li>
                <li>
                  <input type="checkbox"></input>Frutal
                </li>
                <li>
                  <input type="checkbox"></input>Aromático
                </li>
                <li>
                  <input type="checkbox"></input>Couro
                </li>
              </ul>
            </div>
            <div class="grupo_botoes">
              <button className="botao_destaque" onClick={props.Fechar}>
                Aplicar
              </button>
              <button className="botao_branco" onClick={props.Fechar}>
                Limpar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
