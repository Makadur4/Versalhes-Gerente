import React, { useEffect, useState } from "react";
import Marcas from "../dados/marcas";
import Tipos from "../dados/tipos";
import axios from "axios";

export default function ManterProduto(props) {
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

  let titulo;

  if (props.IdPerfume == 0) {
    titulo = "Novo Perfume";
  } else {
    titulo = "Alterar Perfume";
  }

  function CarrergarListaMarcas() {
    setMarcas(Marcas);
  }

  function CarrergarListaTipos() {
    setTipos(Tipos);
  }

  const listaMarcas = marcas.map(function (item) {
    return (
      <option key={item.idMarca} value={item.idMarca}>
        {item.nome}
      </option>
    );
  });

  const listaTipos = tipos.map(function (item) {
    return (
      <option key={item.idTipo} value={item.idTipo}>
        {item.tipo}
      </option>
    );
  });

  function CarregarDadosProduto() {
    CarrergarListaMarcas();
    CarrergarListaTipos();

    if (props.IdPerfume != 0) {
      axios
        .get(`http://localhost:8080/perfume/${props.IdPerfume}`)
        .then(function (response) {
          let perfume = response.data;

          setNome(perfume.nome);
          setMarca(perfume.marca.idMarca);
          setGenero(perfume.genero);
          setTipo(perfume.tipo.idTipo);
          setEspecial(perfume.especial);
          setOferta(perfume.oferta);
          setDescricao(perfume.descricao);
          setPrecoNormal(perfume.precoNormal);
          setPrecoOferta(perfume.precoOferta);
          setEstoque(perfume.estoque);
        })
        .catch(function (erro) {
          alert("Não foi possível executar operação!");
          console.log(erro);
          props.Fechar(false);
        });
    }
  }

  useEffect(CarregarDadosProduto, []);

  function Conrimar(e) {
    e.preventDefault();

    const dados = {
      idPerfume: props.IdPerfume,
      marca: {
        idMarca: marca,
      },
      tipo: {
        idTipo: tipo,
      },
      genero: genero,
      nome: nome,
      especial: especial,
      descricao: descricao,
      precoNormal: precoNormal,
      oferta: oferta,
      precoOferta: precoOferta,
      estoque: estoque,
    };

    if (props.IdPerfume == 0) {
      axios
        .post("http://localhost:8080/perfume", dados)
        .then(function () {
          props.Fechar(true);
        })
        .catch(function (erro) {
          alert("Não foi possível executar operação!");
        });
    } else {
      axios
        .put("http://localhost:8080/perfume", dados)
        .then(function () {
          props.Fechar(true);
        })
        .catch(function (erro) {
          alert("Não foi possível executar operação!");
        });
    }
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="card_detalhe">
        <h1>{titulo}</h1>
        <form onSubmit={Conrimar}>
          <div className="campo_produto">
            <div className="quadro_foto">
              <img src="/svg/icone_imagem.svg"></img>
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
              ></input>
              <label className="label_produto" htmlFor="marca">
                Marca
              </label>
              <select
                id="marca"
                className="select"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              >
                {listaMarcas}
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
                  {listaTipos}
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
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
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
                  value={precoNormal}
                  onChange={(e) => setPrecoNormal(e.target.value)}
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
                  value={precoOferta}
                  onChange={(e) => setPrecoOferta(e.target.value)}
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
                ></input>
              </div>
            </div>
          </div>
          <div className="campo_produto4">
            <button className="cancelar" onClick={() => props.Fechar(false)}>
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
