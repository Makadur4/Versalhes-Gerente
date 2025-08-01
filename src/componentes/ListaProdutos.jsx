import { useEffect, useState } from "react";
import ManterProduto from "./ManterProduto";
import ExcluirProduto from "./ExcluirProduto";
import EstoqueProduto from "./EstoqueProduto";
import axios from "axios";

export default function ListaProdutos() {
  const [visivel, setVisivel] = useState(0);
  const [idPerfume, setIdPerfume] = useState(0);
  const [lista, setLista] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [atualizar, setAtualizar] = useState(true);

  function CarrergarListaProdutos() {
    axios
      .get(`http://localhost:8080/perfume`, {
        params: { filtro: filtro },
      })
      .then(function (response) {
        setLista(response.data);
      })
      .catch(function (erro) {
        alert("Não foi possível executar operação!");
      });
  }

  useEffect(CarrergarListaProdutos, [atualizar]);

  function AtualizarLista(limpar) {
    if (limpar) {
      setFiltro("");
    }
    setAtualizar(!atualizar);
  }

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

  function Fechar(atualizar) {
    setVisivel(0);
    if (atualizar == true) {
      setAtualizar((prevStatus) => !prevStatus);
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

  const listaComponentes = lista.map(function (item) {
    return (
      <tr key={item.idPerfume}>
        <td>{item.nome}</td>
        <td>{item.marca.nome}</td>
        <td>{item.tipo.tipo}</td>
        <td className="estoque">{item.estoque}</td>
        <td className="preco">
          {item.precoNormal.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </td>
        <td>
          <div className="opcao_tabela">
            <img
              src="/svg/icone_alterar.svg"
              onClick={(e) => Abrir2(item.idPerfume)}
              title="Alterar"
            ></img>
            <img
              src="/svg/icone_estoque.svg"
              onClick={(e) => Abrir4(item.idPerfume)}
              title="Mudar Estoque"
            ></img>
            <img
              src="/svg/icone_excluir.svg"
              onClick={(e) => Abrir3(item.idPerfume)}
              title="Excluir"
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
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          ></input>
          <button
            onClick={() => {
              AtualizarLista(false);
            }}
          >
            Pesquisar
          </button>
          <button
            onClick={() => {
              AtualizarLista(true);
            }}
          >
            Limpar
          </button>
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
