import { useRef, useState } from "react";

export default function (props) {
  const inputRef = useRef(null);

  const mudarUrl = (e) => {
    const arquivo = e.target.files[0];

    if (arquivo && arquivo.type.startsWith("image/png")) {
      const imageUrl = URL.createObjectURL(arquivo);

      props.setUrlImagem(imageUrl);
      props.setArquivo(arquivo);
    } else {
      props.setUrlImagem("/img/icone_imagem.png");
      props.setArquivo(null);
    }
  };

  return (
    <>
      <img
        src={props.urlImagem}
        onClick={() => {
          inputRef.current.click();
        }}
      ></img>
      <input id="arquivo" type="file" accept=".png" onChange={mudarUrl} ref={inputRef}></input>
    </>
  );
}
