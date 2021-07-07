// Variáveis
let input = prompt("Digite um número: ");
alert("O número digitado é: " + input);
// out
alert(`O número digitado foi: ${input}`);

//o código abaixo vai funcionar executando pelo terminal
//console.log("Funciona!");

// Condicionais
let hoje = new Date().getDay();
let dia;

if (hoje == "Domingo") {
  alert("Vou passear");
} else if (hoje == "Sabado") {
  alert("trabalho até meio dia");
} else {
  alert("esta trabalhando");
}

switch (hoje) {
  case 0:
    dia = "Domingo";
    alert(dia);
    break;
  case 1:
    dia = "Segunda";
    alert(dia);
    break;
  case 2:
    dia = "Terça";
    alert(dia);
    break;
  case 3:
    dia = "Quarta";
    alert(dia);
    break;
  case 4:
    dia = "Quinta";
    alert(dia);
    break;
  case 5:
    dia = "Sexta";
    alert(dia);
    break;
  case 6:
    dia = "Sábado";
    alert(dia);
    break;
}

// Podemos colocar um valor padrão para seguir caso nenhuma das opções for atendida
let sinal = "verde";

switch (sinal) {
  case "verde":
    alert("Sinal aberto"); //essa mensagem será exibida no navegador apenas
    break;
  case "amarelo":
    console.log("Atenção!"); //essa mensagem será exibida no nodejs ou no web tolls do navegador
    break;
  case "vermelho":
    console.log("Fechado");
    break; // o break representa do fim do case, caso seja omitido o computador executará o case seguinte
  // é dispensavel no últimoo caso
  default:
    console.log("opção inválida");
}

//Laços de repetição
let count = 0;
while (count < 3) {
  alert("Laço de repetição While");
  count++;
}

contador = 0;
do {
  alert("Laço de repetição Do While");
  contador++;
} while (contador < 3);

for (let i = 0; i < 3; i++) {
  alert(`Laço de repetição For`);
}

// Vetores
let vetor = [10, 20, 30, 40, 50];
alert(
  `${vetor[3]} - Esse é o valor da posição 3 do meu vetor. obs: lembrando que começa com 0`
);
