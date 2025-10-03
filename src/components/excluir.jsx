import { excluirPerfume } from "../services/perfume-service";

export default function (props) {
  async function confirmarOperaco(e) {
    e.preventDefault();

    try {
      await excluirPerfume(props.token, props.perfumeId);

      props.fecharModal(true);
    } catch (e) {
      if (erro.codigo == 400) {
        alert("Não é possível excluir este perfume. Por favor, verifique se o perfume não faz parte de um pedido e tente novamente!");
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
            <h1>Excluir Perfume</h1>
            <p>Deseja realmente excluir o perfume?</p>
          </div>
          <div className="campo_excluir">
            <button className="cancelar" type="button" onClick={() => props.fecharModal(false)}>
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
