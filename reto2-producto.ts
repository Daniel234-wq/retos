interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descuento?: number;
  descripcion?: string;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Auriculares inalámbricos',
    precio: 120,
    descuento: 20,
    descripcion: 'Cancelación de ruido y 20 horas de autonomía',
  },
  {
    id: 2,
    nombre: 'Cargador USB-C',
    precio: 25,
  },
];

productos.forEach((producto) => {
  const descuento = producto.descuento ?? 0;
  const precioFinal = producto.precio - descuento;
  console.log(
    `Producto ${producto.id}: ${producto.nombre} - Precio original $${producto.precio} - Precio final $${precioFinal}` +
      (producto.descripcion ? ` - ${producto.descripcion}` : '')
  );
});
