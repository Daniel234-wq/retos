class Pila<T> {
  private elementos: T[] = [];

  apilar(item: T): void {
    this.elementos.push(item);
  }

  desapilar(): T | undefined {
    return this.elementos.pop();
  }

  cima(): T | undefined {
    return this.elementos[this.elementos.length - 1];
  }

  vacia(): boolean {
    return this.elementos.length === 0;
  }
}

const pilaNumeros = new Pila<number>();
pilaNumeros.apilar(10);
pilaNumeros.apilar(20);
console.log('Cima número:', pilaNumeros.cima());
console.log('Desapilar número:', pilaNumeros.desapilar());
console.log('¿Pila numérica vacía?', pilaNumeros.vacia());

const pilaStrings = new Pila<string>();
pilaStrings.apilar('uno');
pilaStrings.apilar('dos');
console.log('Cima string:', pilaStrings.cima());
console.log('Desapilar string:', pilaStrings.desapilar());
console.log('¿Pila string vacía?', pilaStrings.vacia());
