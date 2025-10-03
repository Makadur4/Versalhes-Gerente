import backend from "./backend";
import { ApiException } from "./api-exception";

export async function obterMarcas() {
  try {
    const response = await backend.get("apoio/obter-marcas");

    return response.data;
  } catch (erro) {
    throw new ApiException(erro.response?.status);
  }
}

export async function obterTipos() {
  try {
    const response = await backend.get("apoio/obter-tipos");

    return response.data;
  } catch (erro) {
    throw new ApiException(erro.response?.status);
  }
}
