import { useEffect, useState } from "react";
import ManterProduto from "./ManterProduto";
import ExcluirProduto from "./ExcluirProduto";
import EstoqueProduto from "./EstoqueProduto";
import Filtro from "./Filtro";
import axios from "axios";

export default function ListaProdutos() {
  const [visivel, setVisivel] = useState(0);
  const [idPerfume, setIdPerfume] = useState(0);
  const [lista, setLista] = useState([]);
  const [atualizar, setAAtualizar] = useState(true);

  function CarrergarListaProdutos() {
    axios
      .get(`http://localhost:8080/perfume`)
      .then(function (response) {
        setLista(response.data);
      })
      .catch(function (erro) {
        alert("Não foi possível executar operação!");
        console.log(erro);
      });
  }

  useEffect(CarrergarListaProdutos, [atualizar]);

  let componente;

  if (visivel == 1) {
    componente = <ManterProduto Fechar={Fechar} IdPerfume={idPerfume} />;
  }

  if (visivel == 2) {
    componente = <ManterProduto Fechar={Fechar} IdPerfume={idPerfume} />;
  }

  if (visivel == 3) {
    componente = <ExcluirProduto Fechar={Fechar} IdPerfume={idPerfume} />;
  }

  if (visivel == 4) {
    componente = <EstoqueProduto Fechar={Fechar} IdPerfume={idPerfume} />;
  }

  if (visivel == 5) {
    componente = <Filtro Fechar={Fechar} />;
  }

  function Fechar(atualizar) {
    setVisivel(0);
    if (atualizar == true) {
      setAAtualizar((prevStatus) => !prevStatus);
    }
  }

  function Abrir1() {
    setIdPerfume(0);
    setVisivel(1);
  }

  function Abrir2(id) {
    setIdPerfume(id);
    setVisivel(2);
  }

  function Abrir3(id) {
    setIdPerfume(id);
    setVisivel(3);
  }

  function Abrir4(id) {
    setIdPerfume(id);
    setVisivel(4);
  }

  function Abrir5() {
    setVisivel(5);
  }

  const listaComponentes = lista.map(function (item) {
    return (
      <tr key={item.idPerfume}>
        <td>{item.nome}</td>
        <td>{item.marca.nome}</td>
        <td>{item.tipo.tipo}</td>
        <td className="estoque">{item.estoque}</td>
        <td className="preco">{item.precoNormal}</td>
        <td>
          <div className="opcao_tabela">
            <img
              src="/svg/icone_alterar.svg"
              onClick={(e) => Abrir2(item.idPerfume)}
            ></img>
            <img
              src="/svg/icone_excluir.svg"
              onClick={(e) => Abrir3(item.idPerfume)}
            ></img>
            <img
              src="/svg/icone_estoque.svg"
              onClick={(e) => Abrir4(item.idPerfume)}
            ></img>
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
          <tbody>{listaComponentes}</tbody>
        </table>
      </div>
      {componente}
    </main>
  );
}
