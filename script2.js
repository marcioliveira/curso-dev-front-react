//Vetores
let vetor = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < vetor.length; i++) {
  console.log(vetor[i]);
}

console.log("esse for apresenta o mesmo resultado");
for (valor of vetor) {
  console.log(valor);
}

console.log("esse for apresenta também o mesmo resultado com o indice");
for (let indice in vetor) {
  console.log(indice, vetor[indice]);
}

// Matriz - vetor multidimencional
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// lista todos elemento da matriz
for (let linha of matriz) {
  for (let elemento of linha) {
    console.log(elemento);
  }
}

// Função

function escreva(nome) {
  console.log(nome);
}
escreva("marcio");

function soma(a, b) {
  return a + b;
}
console.log(soma(1, 3));

const multiplicar = function (a, b) {
  return a * b;
};
console.log(multiplicar(3, 2));

const dividir = (a, b) => a / b;
console.log(dividir(10, 5));

// Função de Alta ordem - passando função como parâmetro
const subtrair = (a, b) => a - b;
const aplicarOperacao = (a, b, operacao) => operacao(a, b);

let resultado = aplicarOperacao(10, 5, subtrair);
console.log(resultado);

// retornando uma função
const somarX = (x) => (y) => x + y;

const somar2 = somarX(2);
console.log(somar2(5));
