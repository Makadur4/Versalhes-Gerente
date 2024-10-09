import axios from "axios";
import React, { useEffect, useState } from "react";

export default function EstoqueProduto(props) {
  const [estoque, setEstoque] = useState("0");

  function CarregarDadosProduto() {
    axios
      .get(`http://localhost:8080/perfume/${props.IdPerfume}`)
      .then(function (response) {
        let perfume = response.data;

        setEstoque(perfume.estoque);
      })
      .catch(function (erro) {
        alert("Não foi possível executar operação!");
        console.log(erro);
        props.Fechar(false);
      });
  }

  useEffect(CarregarDadosProduto, []);

  function Conrimar(e) {
    e.preventDefault();

    const dados = {
      estoque: parseInt(estoque),
    };

    axios
      .patch(`http://localhost:8080/perfume/${props.IdPerfume}`, dados)
      .then(function () {
        props.Fechar(true);
      })
      .catch(function (erro) {
        alert("Não foi possível executar operação!");
      });
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="card_excluir">
        <form onSubmit={Conrimar}>
          <div>
            <h1>Alterar quantidade de estoque</h1>

            <label className="label_produto2" htmlFor="estoque">
              Estoque
            </label>
            <input
              id="estoque"
              className="input_estoque"
              type="number"
              value={estoque}
              onChange={(e) => setEstoque(e.target.value)}
            ></input>
          </div>
          <div className="campo_estoque">
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
