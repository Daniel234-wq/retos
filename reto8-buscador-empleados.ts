interface Empleado {
  id: number;
  nombre: string;
  cargo: string;
}

const empleados: Empleado[] = [
  { id: 1, nombre: 'Ana', cargo: 'Asistente' },
  { id: 2, nombre: 'Carlos', cargo: 'Developer' },
  { id: 3, nombre: 'Laura', cargo: 'Diseñadora' },
  { id: 4, nombre: 'Fernando', cargo: 'Analista' },
  { id: 5, nombre: 'María', cargo: 'Gerente' },
];

const empleado = empleados.find((e) => e.id === 5);
const indice = empleados.findIndex((e) => e.id === 5);
const existeGerente = empleados.some((e) => e.cargo === 'Gerente');

console.log('Empleado con id 5:', empleado);
console.log('Posición del empleado con id 5:', indice);
console.log('¿Existe algún Gerente?', existeGerente);
