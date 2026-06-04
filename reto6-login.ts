const login = (usuario: string, contraseña: string): string => {
  const usuarioGuardado = 'usuario1';
  const contraseñaGuardada = 'secreto12';

  if (!usuario.trim()) {
    throw new Error('El usuario no puede estar vacío.');
  }
  if (contraseña.length < 6) {
    throw new Error('La contraseña debe tener al menos 6 caracteres.');
  }
  if (usuario !== usuarioGuardado || contraseña !== contraseñaGuardada) {
    throw new Error('Usuario o contraseña incorrectos.');
  }

  return 'Login exitoso. Bienvenido.';
};

const escenarios: [string, string][] = [
  ['', 'secreto12'],
  ['usuario1', '123'],
  ['usuario1', 'secreto12'],
];

escenarios.forEach(([usuario, contraseña]) => {
  try {
    console.log(login(usuario, contraseña));
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
  }
});
