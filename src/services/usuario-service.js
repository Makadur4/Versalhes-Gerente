import backend from "./backend";

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
  } catch (error) {
    throw error.response?.status;
  }
}
