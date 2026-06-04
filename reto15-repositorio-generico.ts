interface ConId {
  id: number;
}

class Repositorio<T extends ConId> {
  private elementos: T[] = [];

  agregar(item: T): void {
    this.elementos.push(item);
  }

  buscarPorId(id: number): T | undefined {
    return this.elementos.find((item) => item.id === id);
  }

  eliminar(id: number): void {
    this.elementos = this.elementos.filter((item) => item.id !== id);
  }

  todos(): T[] {
    return [...this.elementos];
  }
}

interface Producto extends ConId {
  nombre: string;
  precio: number;
}

interface Usuario extends ConId {
  nombre: string;
  email: string;
}

const repoProductos = new Repositorio<Producto>();
repoProductos.agregar({ id: 1, nombre: 'Auriculares', precio: 120 });
repoProductos.agregar({ id: 2, nombre: 'Cargador', precio: 25 });
console.log('Producto id 1:', repoProductos.buscarPorId(1));
repoProductos.eliminar(2);
console.log('Productos:', repoProductos.todos());

const repoUsuarios = new Repositorio<Usuario>();
repoUsuarios.agregar({ id: 1, nombre: 'Ana', email: 'ana@example.com' });
repoUsuarios.agregar({ id: 2, nombre: 'Luis', email: 'luis@example.com' });
console.log('Usuario id 2:', repoUsuarios.buscarPorId(2));
repoUsuarios.eliminar(1);
console.log('Usuarios:', repoUsuarios.todos());
