/*
  Producto
  Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprimeDatos, el cual escribe por pantalla los valores de sus propiedades.



  Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
  Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    console.log(`Codigo: ${this.codigo}`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Precio: $${this.precio}`);
    console.log('======================');
  }
}

const productos = [];

let veces = Number(prompt('Cuantos productos va a ingresar?'));

for (let i = 0; i < veces; i++) {
  let nombre = prompt('Ingrese el nombre del producto');
  let precio = Number(prompt('Ingrese un precio'));
  const nuevoProducto = new Producto(`art${i}`, nombre, precio);

  productos.push(nuevoProducto);
}

productos.forEach((prod) => {
  prod.imprimeDatos();
});
