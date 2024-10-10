import { useRef, useState } from "react";

export default function Imagem(props) {
  const InputRef = useRef(null);

  const MudarUrl = (e) => {
    const arquivo = e.target.files[0];

    if (arquivo && arquivo.type.startsWith("image/png")) {
      const imageUrl = URL.createObjectURL(arquivo);
      props.SetUrlImagem(imageUrl);
      props.SetArquivoImagem(arquivo);
    } else {
      props.SetUrlImagem("/img/icone_imagem.png");
      props.SetArquivoImagem(null);
    }
  };

  const SelecionarImagem = () => {
    InputRef.current.click();
  };

  return (
    <>
      <img src={props.UrlImagem} onClick={SelecionarImagem}></img>
      <input
        id="arquivo"
        type="file"
        accept=".png"
        onChange={MudarUrl}
        ref={InputRef}
      ></input>
    </>
  );
}
