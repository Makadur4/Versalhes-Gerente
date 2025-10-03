class ApiException extends Error {
  constructor(codigo) {
    super("Erro na Api");
    this.codigo = codigo;
  }

  obterMensagem() {
    switch (this.codigo) {
      case 400:
        return "Dados inválidos. Por favor, valide dos dados e tente novamente!";
      case 403:
        return "Operação proibida. Por favor, tente novamente!";
      case 404:
        return "Item não encontrado. Por favor, tente novamente!";
      case 405:
        return "Este método não pode ser executado!";
    }

    return "Não possível executar a operação. Por favor, tente novamente mais tarde!";
  }
}

export { ApiException };
