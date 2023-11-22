// Objetos
const alumno = {
  apellido: 'Valoy',
  comision: '87i',
  curso: 'Fullstack',
  edad: '25',
  nombre: 'German',

  saludar: function () {
    console.log(`Hola! soy ${this.nombre}`);
  },
  estudiar() {
    console.log('Leyendo... resumiendo...');
  },
  presentarse() {
    console.log(`
    Nombre: ${this.nombre}
    Apellido: ${this.apellido}
    Edad: ${this.edad}
    Curso: ${this.curso}
    Comision: ${this.comision}
    `);
  },
};

// Obtencion de valores
console.log(alumno.nombre);
let x = 'comision';
console.log(alumno[x]);

// Agregar propiedades nuevas
let ciudad = prompt('Ingrese su ciudad de origen');
alumno.ciudad = ciudad;
let nuevaPropiedad = prompt('Agrega una nueva propiedad');
let nuevaPropValor = prompt(`Ingrese el valor de la propiedad ${nuevaPropiedad}`);
alumno[nuevaPropiedad] = nuevaPropValor;

// Modificar propiedades
alumno.edad = prompt('Ingrese su edad');

// Eliminar propiedades
delete alumno.curso;

// Recorrer un Objeto
// Antes
// for (let index = 0; index < Object.keys(alumno).length; index++) {
//   console.log(alumno[Object.keys(alumno)[index]])
// }

// Ahora
for (const key in alumno) {
  if (typeof alumno[key] !== 'function') {
    console.log(`La clave: ${key} tiene el valor: ${alumno[key]}`);
  }
}

// console.log(alumno);
// alumno.saludar();
// alumno.estudiar();
// alumno.presentarse();
// document.write(alumno.nombre);
// alert(alumno.nombre);

const listaProductos = [
  {
    titulo: 'Teclado',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    precio: 200,
  },
  {
    titulo: 'Mouse',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    precio: 120,
  },
  {
    titulo: 'Monitor',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    precio: 1000,
    caractersticas:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aspernatur doloribus dolorum, doloremque aperiam modi velit sint quasi, repellendus eaque nihil dignissimos saepe?',
  },
];

function recorrerProductos(producto) {
  console.log(`El producto: ${producto.titulo} cuesta: ${producto.precio}`);
}
// DRY - Don't Repeat Yourself

listaProductos.forEach((producto) => {
  console.log(`El producto: ${producto.titulo} cuesta: ${producto.precio}`);
});
