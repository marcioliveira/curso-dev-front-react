/////////////////////////////////////////////////////////
/////// Classes e Construtor
class Pessoa {
  construtor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pessoa1 = new Pessoa("carlos", 20);
pessoa1.idade = 21;
console.log(pessoa1.nome);
