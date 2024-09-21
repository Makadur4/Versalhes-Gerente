import CardPreco from "./CardPreco";
import Estrelas from "./Estrelas";
import IconeFavorito from "./IconeFavorito";

export default function Detalhe() {
  return (
    <div className="detalhe">
      <div className="card_descricao">
        <div className="moldura">
          <h1>
            <img className="foto_dior" src="/img/perfume1.png"></img>
          </h1>
        </div>
        <div className="descricao">
          <div className="nome_produto">
            <p>PERFUME DIOR SAUVAGE MASCULINO EAU DE TOILETTE</p>
          </div>
          <div className="icones_produto">
            <Estrelas nivel="5" />
            <IconeFavorito />
          </div>
          <div className="descricao_produto">
            <p>
              François Demachy, perfumista-Criador de Dior, inspirou-se no
              deserto, na hora mágica do crepúsculo. Misturado com a frieza da
              noite, o ar ardente do deserto exala fragrâncias profundas. Na
              hora em que os lobos saem e o céu é incendiado, uma nova magia se
              desenrola.
            </p>
            <p>
              A bergamota da Calábria, tão suculenta e espirituosa como sempre,
              convida novas notas picantes a aumentar a plenitude e a
              sensualidade, já que o rastro ambarado do Ambroxan® está envolto
              nos acentos esfumados do absoluto da baunilha de Papua Nova Guiné,
              para maior virilidade.
            </p>
          </div>
        </div>
      </div>
      <CardPreco />
    </div>
  );
}
