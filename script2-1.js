//Introdução a Orientação a Objetos
const pessoa = {
  nome: "Marcio",
  idade: 41,
};
console.log(pessoa.nome);

const quadrado = {
  base: 10,
  altura: 20,
  calculaArea: function () {
    return this.base * this.altura;
  },
};
console.log(quadrado.calculaArea());
