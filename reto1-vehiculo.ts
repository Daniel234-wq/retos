interface Vehiculo {
  readonly placa: string;
  marca: string;
  modelo: string;
  año: number;
  kilometraje: number;
  disponible: boolean;
}

const vehiculos: Vehiculo[] = [
  { placa: 'ABC-123', marca: 'Toyota', modelo: 'Corolla', año: 2020, kilometraje: 45000, disponible: true },
  { placa: 'XYZ-789', marca: 'Honda', modelo: 'Civic', año: 2018, kilometraje: 78000, disponible: false },
  { placa: 'LMN-456', marca: 'Ford', modelo: 'Focus', año: 2022, kilometraje: 12000, disponible: true },
];

vehiculos.forEach((vehiculo) => {
  const estado = vehiculo.disponible ? 'disponible' : 'no disponible';
  console.log(
    `Vehículo ${vehiculo.placa}: ${vehiculo.marca} ${vehiculo.modelo} (${vehiculo.año}) - Kilometraje ${vehiculo.kilometraje} km - ${estado}`
  );
});
