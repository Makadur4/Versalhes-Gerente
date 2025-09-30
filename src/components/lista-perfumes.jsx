import { useEffect, useState } from "react";

import { obterPerfumes } from "../services/perfume-service";

import Cadastro from "./cadastro-perfume";
import Estoque from "./estoque";
import Excluir from "./excluir";

export default function (props) {
  const [perfumeId, setPerfumeId] = useState(0);

  const [filtro, setFiltro] = useState("");
  const [lista, setLista] = useState([]);

  const [modal, setModal] = useState(0);

  async function atualizarLista(limparFiltro) {
    try {
      if (limparFiltro) {
        setFiltro("");
      }

      const lista = await obterPerfumes(props.token, filtro);

      setLista(lista);
    } catch (e) {
      if (e < 500) {
        alert("Acesso não autorizado. Por favor, faça o login novamente!");

        props.guardarToken("");

        return;
      }

      alert("Não foi possível executar operação. Por favor, tente novamente mais tarde!");
    }
  }

  useEffect(() => {
    atualizarLista();
  }, []);

  function abrirInclusao() {
    setPerfumeId(0);
    setModal(1);
  }

  function abrirAlteracao(id) {
    setPerfumeId(id);
    setModal(1);
  }

  function abrirEstoque(id) {
    setPerfumeId(id);
    setModal(2);
  }

  function abrirExclusao(id) {
    setPerfumeId(id);
    setModal(3);
  }

  function fecharModal(atualizar) {
    setModal(0);

    if (atualizar) {
      atualizarLista();
    }
  }

  let componente;

  switch (modal) {
    case 1:
      componente = <Cadastro token={props.token} fecharModal={fecharModal} perfumeId={perfumeId} />;
      break;
    case 2:
      componente = <Estoque token={props.token} fecharModal={fecharModal} perfumeId={perfumeId} />;
      break;
    case 3:
      componente = <Excluir token={props.token} fecharModal={fecharModal} perfumeId={perfumeId} />;
      break;
  }

  const listaComponentes = lista?.map(function (item) {
    return (
      <tr key={item.id}>
        <td>{item.nome}</td>
        <td>{item.marca.nome}</td>
        <td>{item.tipo.nome}</td>
        <td className="estoque">{item.estoque}</td>
        <td className="preco">
          {item.precoNormal.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </td>
        <td>
          <div className="opcao_tabela">
            <img src="/svg/icone_alterar.svg" onClick={(e) => abrirAlteracao(item.id)} title="Alterar"></img>
            <img src="/svg/icone_estoque.svg" onClick={(e) => abrirEstoque(item.id)} title="Mudar Estoque"></img>
            <img src="/svg/icone_excluir.svg" onClick={(e) => abrirExclusao(item.id)} title="Excluir"></img>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <main>
      <div className="funcao_principal">
        <div className="funcao1">
          <input type="text" placeholder=" Digite o texto para pesquisa..." value={filtro} onChange={(e) => setFiltro(e.target.value)}></input>
          <button
            onClick={() => {
              atualizarLista(false);
            }}
          >
            Pesquisar
          </button>
          <button
            onClick={() => {
              atualizarLista(true);
            }}
          >
            Limpar
          </button>
        </div>
        <div className="funcao2">
          <button onClick={abrirInclusao}>Adicionar</button>
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
