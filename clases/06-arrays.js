// let frase = "Hola Mundo";
// const myArray = [1, 'Pedro', true, false];

// frase = frase + " como estan?"

// console.log(myArray);

// ESTO NO!!!!
// myArray
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);

// let limite = myArray.length;

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
//   if (i <= limite) {
//     myArray.push("Juan");
//   }
// }

// let listadoNombres = [];
// let nombre;
// do {
//   nombre = prompt('Ingrese un nombre');

//   if (nombre) {
//     listadoNombres.push(nombre);
//   }
// } while (nombre);

// listadoNombres[50] = 'UNO';
// listadoNombres.splice(0, 0, 'UNO');
// listadoNombres.splice(5, 25);

// for (let i = 0; i < listadoNombres.length; i++) {
//   console.log(`En la posicion ${i} esta el elemento: ${listadoNombres[i]}`);
// }

const alumnos = ['Nachito', 'Eduardo', 'Alfonso'];

// Agregamos un elemento AL FINAL del array
alumnos.push('German', 'Ivan');
// Agregamos un elemento AL PRINCIPIO del array
alumnos.unshift('Gonzalo');

// Eliminar el ULTIMO elemento del array
alumnos.pop();
// Eliminar el PRIMER elemento del array
alumnos.shift();

// Mostrar el ultimo elemento de un array
console.log(alumnos[alumnos.length - 1]);
console.log(alumnos.at(-1));
console.log(alumnos.at(1));

// La posicion / index de un elemento
let pos = alumnos.indexOf('Ivan');
console.log(pos);

// Saber si un elemento existe en un array
console.log(alumnos.includes('Nico'));

const profes = ['Nicolas', 'Enrico'];

// Concatenar / unir arrays
const comision87i = alumnos.concat(profes);

console.log(alumnos);
console.log(comision87i);

console.log(comision87i.sort());
console.log(comision87i.reverse());
