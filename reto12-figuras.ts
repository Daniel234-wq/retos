abstract class Figura {
  abstract area(): number;
}

class Cuadrado extends Figura {
  constructor(private lado: number) {
    super();
  }

  area(): number {
    return this.lado * this.lado;
  }
}

class Circulo extends Figura {
  constructor(private radio: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radio * this.radio;
  }
}

const figuras: Figura[] = [new Cuadrado(4), new Circulo(3), new Cuadrado(6)];
figuras.forEach((figura, index) => {
  console.log(`Área figura ${index + 1}: ${figura.area().toFixed(2)}`);
});
