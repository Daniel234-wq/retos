interface Jugador {
  nombre: string;
  puntaje: number;
}

const jugadores: Jugador[] = [
  { nombre: 'Sofía', puntaje: 320 },
  { nombre: 'Diego', puntaje: 275 },
  { nombre: 'Valeria', puntaje: 400 },
  { nombre: 'Jorge', puntaje: 290 },
  { nombre: 'Martín', puntaje: 340 },
];

const ordenados = [...jugadores].sort((a, b) => b.puntaje - a.puntaje);
console.log('Top 3:');
ordenados.slice(0, 3).forEach((jugador, index) => {
  console.log(`🏆 ${index + 1}. ${jugador.nombre} - ${jugador.puntaje}`);
});
console.log('Nombres:', ordenados.map((jugador) => jugador.nombre).join(', '));
