interface ProcesadorPago {
  procesar(monto: number): string;
}

class PagoTarjeta implements ProcesadorPago {
  procesar(monto: number): string {
    return `Pago con tarjeta procesado por $${monto}.`;
  }
}

class PagoPayPal implements ProcesadorPago {
  procesar(monto: number): string {
    return `Pago con PayPal procesado por $${monto}.`;
  }
}

class PagoTransferencia implements ProcesadorPago {
  procesar(monto: number): string {
    return `Pago por transferencia procesado por $${monto}.`;
  }
}

const pagos: ProcesadorPago[] = [new PagoTarjeta(), new PagoPayPal(), new PagoTransferencia()];
pagos.forEach((pago, index) => console.log(`Canal ${index + 1}: ${pago.procesar(150)}`));
