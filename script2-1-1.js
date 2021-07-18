//////////////////////////////////////////////////////////////////
///////////// Objetos
const agenda = {
  contatos: [
    {
      nome: "Marcio",
      telefone: 33227217,
      email: "marcioruelaoliveira@gmail.com.br",
    },
    { nome: "João", telefone: 33227247, email: "joao@gmail.com.br" },
    { nome: "Fernanda", telefone: 33244217, email: "fernanda@gmail.com.br" },
    { nome: "Maria", telefone: 33224417, email: "maria@gmail.com.br" },
    { nome: "Fabio", telefone: 33227233, email: "fabio@gmail.com.br" },
  ],
  adicionar: function (contato) {
    this.contatos.push(contato);
  },
};

console.log(agenda.contatos);
