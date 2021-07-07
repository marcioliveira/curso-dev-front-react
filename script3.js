// Map - (mapeamento do vetor) (percorre o vetor)
const vetor = [1, 2, 3, 4, 5, 6];
console.log(`Esse é o vetor normal: ${vetor}`);

const somaUm = (item) => item++;

const dobro = (item) => 2 * item;
const vetorDobrado = vetor.map(dobro);
console.log(`Esse é o vetor dobrado: ${vetorDobrado}`);

const aoQuadrado = (item, indice, vetor) => vetor[indice] * item;
const vetorAoQuadrado = vetor.map(aoQuadrado);
console.log(`Esse é o vetor ao quadrado: ${vetorAoQuadrado}`);

const vetorDobradoMaisUm = vetorDobrado.map((item) => item + 1); //é possivel escrever a função direto no map
console.log(`Esse é o vetor dobrado mais um: ${vetorDobradoMaisUm}`);

const vetor2 = ["a", "b", "c", "d"];
console.log(`Esse é o vetor2 normal: ${vetor2}`);
const toUpper = (stg) => stg.toUpperCase();
const maiusculas = vetor2.map(toUpper);
console.log(`Esse é o vetor2 de maiusculas: ${maiusculas}`);

// Filter
const vetor3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Esse é o vetor3 nomal: ${vetor3}`);
const pares = vetor3.filter((x) => x % 2 === 0);
console.log(`Esse é o vetor3 de pares: ${pares}`);
const vetor3MaioresQue5 = vetor3.filter((x) => x > 5);
console.log(`Esse é o vetor3 de maiores que 5: ${vetor3MaioresQue5}`);

// Reduce
const soma = vetor3.reduce((estado, item) => estado + item);
console.log(`Esse é o valor do vetor3 somado: ${soma}`);

const produto = vetor3.reduce((estado, item) => estado * item);
console.log(`Esse é o valor do vetor3 multiplicado: ${produto}`);

const matriz = [
  [1, 2, 3, 4, 5, 6, 7],
  [6, 5, 4, 3, 2, 1, 7],
  [6, 1, 5, 2, 3, 4, 7],
];
console.log(`Essa matriz normal: ${matriz}`);

const somaColuna = (estado, item) => {
  return [
    estado[0] + item[0] + item[1],
    estado[1] + item[2] + item[3],
    estado[2] + item[5] + item[6],
  ];
};
const vetorSomado = matriz.reduce(somaColuna, [0, 0, 0]);
console.log(
  `Esse é matriz somando as 1ª e 2ª, 3ª e 4ª e 6ª e 7ª colunas: ${vetorSomado}`
);

let vetor4 = [
  { nome: "marcio", nota1: 5, nota2: 4 },
  { nome: "joao", nota1: 6, nota2: 5 },
  { nome: "jorge", nota1: 7, nota2: 7 },
  { nome: "mauricio", nota1: 2, nota2: 4 },
  { nome: "maria", nota1: 10, nota2: 8 },
];
console.log(`Esse vetor4 normal: ${vetor4}`);

const estadoInicial = {
  somaNota1: 0,
  somaNota2: 0,
  qtdNota1: 0,
  qtdNota2: 0,
};

const result = vetor4.reduce((estado, valor) => {
  return {
    somaNota1: estado.somaNota1 + valor.nota1,
    somaNota2: estado.somaNota2 + valor.nota2,
    qtdNota1: estado.qtdNota1 + 1,
    qtdNota2: estado.qtdNota2 + 1,
  };
}, estadoInicial);

console.log(result);
