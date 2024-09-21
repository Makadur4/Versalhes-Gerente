import { useState } from "react";
import Dados from "../dados/produtos";

function DetalheProduto(props) {
  return (
    <>
      <div className="overlay" onClick={props.Fechar}></div>
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
            <button className="cancelar">Cancelar</button>
            <button className="confirmar">Confirmar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ListaProduto() {
  const [visivel, setVisivel] = useState(false);

  let componente;

  if (visivel == true) {
    componente = <DetalheProduto Fechar={Fechar} />;
  }

  function Abrir() {
    setVisivel(true);
  }

  function Fechar() {
    setVisivel(false);
  }

  const listaComponentes = Dados.map(function (item) {
    return (
      <tr>
        <td>{item.Nome}</td>
        <td>{item.Marca}</td>
        <td>{item.Tipo}</td>
        <td className="estoque">{item.Estoque}</td>
        <td className="preco">{item.Preconormal}</td>
        <td>
          <div className="opcao_tabela">
            <img src="/img/alterar.svg" onClick={Abrir}></img>
            <img src="/img/excluir.svg"></img>
            <img src="/img/estoque.svg"></img>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <main>
      <div className="funcao_principal">
        <div className="funcao1">
          <input
            type="text"
            placeholder=" Digite o texto para pesquisa..."
          ></input>
          <button>Pesquisar</button>
          <button>Filtros</button>
        </div>
        <div className="funcao2">
          <button onClick={Abrir}>Adicionar</button>
        </div>
      </div>
      <div className="tabela">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Marca</th>
              <th>Tipo</th>
              <th>Estoque</th>
              <th>Preço</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>{listaComponentes}</tbody>
        </table>
      </div>
      {componente}
    </main>
  );
}
