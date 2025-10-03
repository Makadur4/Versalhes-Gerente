import backend from "./backend";
import { ApiException } from "./api-exception";

export async function incluirPerfume(token, nome, descricao, marcaId, tipoId, genero, especial, precoNormal, oferta, precoOferta, estoque) {
  try {
    const configuracoes = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const dados = {
      nome: nome,
      descricao: descricao,
      marca: {
        id: marcaId,
      },
      tipo: {
        id: tipoId,
      },
      genero: genero,
      especial: especial,
      precoNormal: precoNormal,
      oferta: oferta,
      precoOferta: precoOferta,
      estoque: estoque,
    };

    const response = await backend.post("perfume/incluir-perfume", dados, configuracoes);

    return response.data.id;
  } catch (erro) {
    throw new ApiException(erro.response?.status);
  }
}

export async function obterPerfumes(token, nome) {
  try {
    const configuracoes = {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: {
        nome: nome,
      },
    };
    const response = await backend.get("perfume/obter-perfumes-cadastro", configuracoes);

    return response.data;
  } catch (erro) {
    throw new ApiException(erro.response?.status);
  }
}

export async function obterPerfume(id) {
  try {
    const response = await backend.get(`perfume/obter-perfume/${id}`);

    return response.data;
  } catch (erro) {
    throw new ApiException(erro.response?.status);
  }
}

export async function alterarPerfume(token, id, nome, descricao, marcaId, tipoId, genero, especial, precoNormal, oferta, precoOferta, estoque) {
  try {
    const configuracoes = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const dados = {
      nome: nome,
      descricao: descricao,
      marca: {
        id: marcaId,
      },
      tipo: {
        id: tipoId,
      },
      genero: genero,
      especial: especial,
      precoNormal: precoNormal,
      oferta: oferta,
      precoOferta: precoOferta,
      estoque: estoque,
    };

    await backend.put(`perfume/alterar-perfume/${id}`, dados, configuracoes);
  } catch (erro) {
    throw new ApiException(erro.response?.status);
  }
}

export async function alterarEstoque(token, id, estoque) {
  try {
    const configuracoes = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const dados = {
      estoque: estoque,
    };

    await backend.patch(`perfume/alterar-estoque/${id}`, dados, configuracoes);
  } catch (erro) {
    throw new ApiException(erro.response?.status);
  }
}

export async function excluirPerfume(token, id) {
  try {
    const configuracoes = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    await backend.delete(`perfume/excluir-perfume/${id}`, configuracoes);
  } catch (erro) {
    throw new ApiException(erro.response?.status);
  }
}

export async function incluirImagem(token, perfumeId, arquivo) {
  try {
    const configuracoes = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    };

    const formulario = new FormData();

    formulario.append("perfumeId", perfumeId);
    formulario.append("arquivo", arquivo);

    await backend.post("perfume/incluir-imagem", formulario, configuracoes);
  } catch (erro) {
    throw new ApiException(erro.response?.status);
  }
}
