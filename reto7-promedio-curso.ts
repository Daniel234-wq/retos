const notas: number[] = [78, 92, 65, 84, 71, 59, 88, 95, 67, 73];
const suma = notas.reduce((acum, nota) => acum + nota, 0);
const promedio = suma / notas.length;
console.log('Suma total de notas:', suma);
console.log('Promedio del curso:', promedio.toFixed(2));
