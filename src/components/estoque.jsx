import { useEffect, useState } from "react";

import { obterPerfume, alterarEstoque } from "../services/perfume-service";

export default function (props) {
  const [estoque, setEstoque] = useState("0");

  async function carregarDados() {
    try {
      const perfume = await obterPerfume(props.perfumeId);

      setEstoque(perfume.estoque);
    } catch (e) {
      alert(erro.obterMensagem());

      props.fecharModal(true);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  async function confirmarOperaco(e) {
    e.preventDefault();

    try {
      await alterarEstoque(props.token, props.perfumeId, estoque);

      props.fecharModal(true);
    } catch (e) {
      if (erro.codigo == 400) {
        alert("Os dados inválidos. Por favor, verifique os dados informados e tente novamente!");
      } else {
        alert(erro.obterMensagem());
      }
    }
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="card_excluir">
        <form onSubmit={confirmarOperaco}>
          <div>
            <h1>Alterar quantidade de estoque</h1>

            <label className="label_produto2" htmlFor="estoque">
              Estoque
            </label>
            <input id="estoque" className="input_estoque" type="number" value={estoque} onChange={(e) => setEstoque(e.target.value)}></input>
          </div>
          <div className="campo_estoque">
            <button type="button" className="cancelar" onClick={() => props.fecharModal(false)}>
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
