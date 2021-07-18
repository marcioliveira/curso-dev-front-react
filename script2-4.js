class Quadrado {
  construtor(base, altura) {
    if (isNaN(base) || isNaN(altura)) throw "informação não numérica";
    this.base = base;
    this.altura = altura;
    this.cor = undefined;
  }
  calculaArea() {
    return this.base * this.altura;
  }
  duplicaBase() {
    return this.base * 2;
  }
  imprimir() {
    return `<div width="
              ${this.base}px;height:${this.altura}px;background-color:${
      this.cor || "blue"
    }>,</div>`;
  }
}

const quadrado = new Quadrado(11, 12);
quadrado.duplicaBase();
console.log(quadrado.calculaArea());
