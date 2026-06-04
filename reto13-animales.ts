abstract class Animal {
  constructor(public nombre: string) {}

  abstract hacerSonido(): void;

  comer(): void {
    console.log(`${this.nombre} está comiendo.`);
  }
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log(`${this.nombre} dice: ¡Guau!`);
  }
}

class Gato extends Animal {
  hacerSonido(): void {
    console.log(`${this.nombre} dice: ¡Miau!`);
  }
}

class Vaca extends Animal {
  hacerSonido(): void {
    console.log(`${this.nombre} dice: ¡Muu!`);
  }
}

const animales: Animal[] = [new Perro('Rex'), new Gato('Michi'), new Vaca('Lola')];
animales.forEach((animal) => {
  animal.hacerSonido();
  animal.comer();
});
