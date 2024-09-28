import { useState } from "react";
import Dados from "../dados/produtos";
import AdicionarProduto from "./AdicionarProduto";
import AlterarProduto from "./AlterarProduto";
import ExcluirProduto from "./ExcluirProduto";
import EstoqueProduto from "./EstoqueProduto";
import Filtro from "./Filtro";

export default function ListaProdutos() {
  const [visivel, setVisivel] = useState(0);

  let componente;

  if (visivel == 1) {
    componente = <AdicionarProduto Fechar={Fechar} />;
  }

  if (visivel == 2) {
    componente = <AlterarProduto Fechar={Fechar} />;
  }

  if (visivel == 3) {
    componente = <ExcluirProduto Fechar={Fechar} />;
  }

  if (visivel == 4) {
    componente = <EstoqueProduto Fechar={Fechar} />;
  }

  if (visivel == 5) {
    componente = <Filtro Fechar={Fechar} />;
  }

  function Fechar() {
    setVisivel(0);
  }

  function Abrir1() {
    setVisivel(1);
  }

  function Abrir2() {
    setVisivel(2);
  }

  function Abrir3() {
    setVisivel(3);
  }

  function Abrir4() {
    setVisivel(4);
  }

  function Abrir5() {
    setVisivel(5);
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
            <img src="/svg/icone_alterar.svg" onClick={Abrir2}></img>
            <img src="/svg/icone_excluir.svg" onClick={Abrir3}></img>
            <img src="/svg/icone_estoque.svg" onClick={Abrir4}></img>
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
          <button>Limpar</button>
          <button onClick={Abrir5}>Filtros</button>
        </div>
        <div className="funcao2">
          <button onClick={Abrir1}>Adicionar</button>
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
          <tbody>
            {listaComponentes}
            {listaComponentes}
          </tbody>
        </table>
      </div>
      {componente}
    </main>
  );
}
