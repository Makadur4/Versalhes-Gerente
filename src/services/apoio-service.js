import backend from "./backend";

export async function obterMarcas() {
  try {
    const response = await backend.get("apoio/obter-marcas");

    return response.data;
  } catch (e) {
    throw e.response?.status;
  }
}

export async function obterTipos() {
  try {
    const response = await backend.get("apoio/obter-tipos");

    return response.data;
  } catch (e) {
    throw e.response?.status;
  }
}
