class Quadrado {
  construtor(base, altura) {
    if (isNan(base) || isNan(altura)) throw "informação não numérica";
    this.base = base;
    this.altura = altura;
    this.cor = undefined;
  }
}

const quadrado = new Quadrado(11, 12);

quadrado.cor = "blue";
console.log(quadrado);
