import React, { useEffect, useState } from "react";

import configuracao from "../config";

import { obterMarcas, obterTipos } from "../services/apoio-service";
import {
  incluirPerfume,
  incluirImagem,
  obterPerfume,
  alterarPerfume,
} from "../services/perfume-service";

import Imagem from "./imagem";

export default function (props) {
  const [marcas, setMarcas] = useState([]);
  const [tipos, setTipos] = useState([]);

  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [genero, setGenero] = useState("M");
  const [tipo, setTipo] = useState("");
  const [especial, setEspecial] = useState(false);
  const [oferta, setOferta] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [precoNormal, setPrecoNormal] = useState("0");
  const [precoOferta, setPrecoOferta] = useState("0");
  const [estoque, setEstoque] = useState("0");

  const [urlImagem, setUrlImagem] = useState("/img/icone_imagem.png");
  const [arquivo, setArquivo] = useState(null);

  const titulo = props.IdPerfume == 0 ? "Novo Perfume" : "Alterar Perfume";

  async function carregarDados() {
    try {
      const listaMarcas = await obterMarcas();
      const listaTipos = await obterTipos();

      setMarcas(listaMarcas);
      setTipos(listaTipos);

      if (props.perfumeId == 0) {
        setMarca(listaMarcas[0].id);
        setTipo(listaTipos[0].id);
      } else {
        const perfume = await obterPerfume(props.perfumeId);

        console.log(
          perfume.precoNormal.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        );

        setNome(perfume.nome);
        setDescricao(perfume.descricao);
        setMarca(perfume.marca.id);
        setTipo(perfume.tipo.id);
        setGenero(perfume.genero);
        setEspecial(perfume.especial);
        setPrecoNormal(
          perfume.precoNormal
            .toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
            .replace(",", "")
        );
        setOferta(perfume.oferta);
        setPrecoOferta(
          perfume.precoOferta
            .toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
            .replace(",", "")
        );
        setEstoque(perfume.estoque);
        setUrlImagem(
          `${configuracao.urlApi}perfume/obter-imagem/${props.perfumeId}`
        );
      }
    } catch (erro) {
      alert(erro.obterMensagem());

      props.fecharModal(true);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  async function confirmarOperaco(e) {
    e.preventDefault();

    if (props.perfumeId == 0 && arquivo == null) {
      alert("Por favor, selecione uma imagem!");
      return;
    }

    let perfumeId = props.perfumeId;

    try {
      if ((perfumeId ?? 0) == 0) {
        perfumeId = await incluirPerfume(
          props.token,
          nome,
          descricao,
          marca,
          tipo,
          genero,
          especial,
          precoNormal,
          oferta,
          precoOferta,
          estoque
        );
      } else {
        await alterarPerfume(
          props.token,
          perfumeId,
          nome,
          descricao,
          marca,
          tipo,
          genero,
          especial,
          precoNormal,
          oferta,
          precoOferta,
          estoque
        );
      }

      if (arquivo != null) {
        await incluirImagem(props.token, perfumeId, arquivo);
      }

      props.fecharModal(true);
    } catch (erro) {
      if (erro.codigo == 400) {
        alert(
          "Os dados inválidos. Por favor, verifique os dados informados e tente novamente!"
        );
      } else {
        alert(erro.obterMensagem());
      }
    }
  }

  const opcoesMarcas = marcas?.map(function (item) {
    return (
      <option key={item.id} value={item.id}>
        {item.nome}
      </option>
    );
  });

  const opcoesTipos = tipos?.map(function (item) {
    return (
      <option key={item.id} value={item.id}>
        {item.nome}
      </option>
    );
  });

  return (
    <>
      <div className="overlay"></div>
      <div className="card_detalhe">
        <h1>{titulo}</h1>
        <form onSubmit={confirmarOperaco}>
          <div className="campo_produto">
            <div className="quadro_foto">
              <Imagem
                urlImagem={urlImagem}
                setUrlImagem={setUrlImagem}
                setArquivo={setArquivo}
              />
            </div>
            <div className="cadastro_produto">
              <label className="label_produto" htmlFor="nome">
                Nome do Produto
              </label>
              <input
                id="nome"
                className="input_nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              ></input>
              <label className="label_produto" htmlFor="marca">
                Marca
              </label>
              <select
                id="marca"
                className="select"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
              >
                {opcoesMarcas}
              </select>
              <label className="genero">Gênero:</label>
              <input
                id="genero_masculino"
                name="genero"
                type="radio"
                checked={genero == "M"}
                onChange={() => setGenero("M")}
              ></input>
              <label htmlFor="genero_masculino">Masculino</label>
              <input
                id="genero_feminino"
                name="genero"
                type="radio"
                checked={genero == "F"}
                onChange={() => setGenero("F")}
              ></input>
              <label htmlFor="genero_feminino">Feminino</label>
              <input
                id="genero_unissex"
                name="genero"
                type="radio"
                checked={genero == "U"}
                onChange={() => setGenero("U")}
              ></input>
              <label htmlFor="genero_unissex">Unissex</label>
              <div>
                <label className="label_produto" htmlFor="tipo">
                  Tipo
                </label>
                <select
                  className="select"
                  id="tipo"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  {opcoesTipos}
                </select>
                <input
                  id="especial"
                  type="checkbox"
                  className="checkbox"
                  checked={especial == true}
                  onChange={(e) => setEspecial(e.target.checked)}
                ></input>
                <label htmlFor="especial">Especial</label>
                <input
                  id="oferta"
                  type="checkbox"
                  className="checkbox"
                  checked={oferta == true}
                  onChange={(e) => setOferta(e.target.checked)}
                ></input>
                <label htmlFor="oferta">Oferta</label>
              </div>
            </div>
          </div>
          <div>
            <label className="descricao" htmlFor="descricao">
              Descrição
            </label>
            <textarea
              className="area_descricao"
              id="descricao"
              maxLength={1000}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="campo_produto2">
            <div className="campo_produto3">
              <div>
                <label className="label_produto2" htmlFor="precoNormal">
                  Preço Normal
                </label>
                <input
                  id="precoNormal"
                  className="input_condicao"
                  type="number"
                  step="0.01"
                  value={precoNormal}
                  onChange={(e) => setPrecoNormal(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label className="label_produto2" htmlFor="precoOferta">
                  Preço em Oferta
                </label>
                <input
                  id="precoOferta"
                  className="input_condicao"
                  type="number"
                  step="0.01"
                  value={precoOferta}
                  onChange={(e) => setPrecoOferta(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label className="label_produto2" htmlFor="estoque">
                  Estoque
                </label>
                <input
                  id="estoque"
                  className="input_condicao"
                  type="number"
                  value={estoque}
                  onChange={(e) => setEstoque(e.target.value)}
                  required
                ></input>
              </div>
            </div>
          </div>
          <div className="campo_produto4">
            <button
              className="cancelar"
              onClick={() => props.fecharModal(false)}
              type="button"
            >
              Cancelar
            </button>
            <button className="confirmar" type="submit">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
