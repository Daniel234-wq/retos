class EstudiantePromedio {
  constructor(private notas: number[]) {}

  get promedio(): number {
    const suma = this.notas.reduce((acum, nota) => acum + nota, 0);
    return this.notas.length ? suma / this.notas.length : 0;
  }

  get estado(): string {
    return this.promedio >= 70 ? 'APROBADO' : 'REPROBADO';
  }
}

const estudiante = new EstudiantePromedio([85, 72, 90, 68, 77]);
console.log('Promedio:', estudiante.promedio.toFixed(2));
console.log('Estado:', estudiante.estado);
