import backend from "./backend";
import { ApiException } from "./api-exception";

export async function validarUsuario(login, senha) {
  try {
    const configuracoes = {
      headers: {
        login: login,
        senha: senha,
      },
    };
    const response = await backend.get("/usuario/validar-usuario", configuracoes);

    return response.data;
  } catch (erro) {
    throw new ApiException(erro.response?.status);
  }
}
