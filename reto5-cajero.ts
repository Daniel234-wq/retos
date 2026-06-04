const retirar = (saldo: number, monto: number): number => {
  if (monto <= 0) {
    throw new Error('El monto a retirar debe ser mayor que cero.');
  }
  if (monto > saldo) {
    throw new Error('Fondos insuficientes.');
  }
  return saldo - monto;
};

try {
  console.log('Nuevo saldo:', retirar(500, 200));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
}

try {
  console.log('Nuevo saldo:', retirar(500, 600));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
}

try {
  console.log('Nuevo saldo:', retirar(500, 0));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
}
