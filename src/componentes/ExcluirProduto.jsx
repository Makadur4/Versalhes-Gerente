import axios from "axios";

export default function ExcluirProduto(props) {
  function Conrimar(e) {
    e.preventDefault();

    axios
      .delete(`http://localhost:8080/perfume/${props.IdPerfume}`)
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
            <h1>Excluir Produto</h1>
            <p>Deseja realmente excluir o produto?</p>
          </div>
          <div className="campo_excluir">
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
