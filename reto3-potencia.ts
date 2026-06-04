const potencia = (base: number, exponente: number): number => {
  if (exponente === 0) {
    return 1;
  }
  return base * potencia(base, exponente - 1);
};

console.log('2^3 =', potencia(2, 3));
console.log('5^4 =', potencia(5, 4));
console.log('3^0 =', potencia(3, 0));
