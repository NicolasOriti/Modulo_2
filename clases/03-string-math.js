/*
EJERCICIO DE REPASO
La Escuela Café de las 3am solicita un sistema, donde le permita a sus
estudiantes presentarse de una manera más interactiva y eficiente , por eso
deciden acudir a un programador para crear un sistema, en el cual se podrá
ingresar el nombre, edad, actividad favorita y deporte favorito en una tarjeta
de presentación predeterminada.
*/

// let nombre = prompt('Ingrese su nombre:');
// let edad = Number(prompt('Ingrese su edad:'));
// let actividad = prompt('Ingrese su actividad favorita');
// let deporte = prompt('Ingrese su deporte favorita');

// let tarjeta =
//   'Hola mi nombre es ' +
//   nombre +
//   ', tengo ' +
//   edad +
//   ' años, mi actividad favorita es ' +
//   actividad +
//   ' y mi deporte favorito es ' +
//   deporte;

// let tarjeta = `
// Hola mi nombre es ${nombre} y tiene ${nombre.length} letras,
// tengo ${edad} años,
// mi actividad favorita es ${actividad} y
// mi deporte favorito es ${deporte};
// `;

// alert(tarjeta);
// console.log(tarjeta);

// let error1 = "el dijo: "Hola mundo"";
// let error2 = 'I'm Nicolas';
let solucion1 = "el dijo: 'Hola mundo'";
let solucion2 = "I'm Nicolas";

let str = 'Couch potato';
console.log(str);
console.log(str.toLowerCase()); // devuelve el string convertido a minusculas
console.log(str.toUpperCase()); // devuelve el string convertido a mayúsculas
console.log(str.charAt(6)); // devuelve el carácter encontrado en la posición indicada
console.log(str.indexOf('o')); // busca una cadena de texto en el string y devuelve la posición donde la encuentra
console.log(str.lastIndexOf('o')); // empieza la búsqueda desde el final de la cadena
console.log(str.slice(1, 5)); // devuelve un trozo de la cadena de texto
console.log(str.split(' ')); // transforma el string en un array utilizando un string como separador
console.log(str.concat('es')); // une strings y devuelve el resultado
console.log(str.length); // propiedad para saber la longitud del string

let str2 = '999,333,hola';
console.log(str2.charAt(str2.length - 1));
console.log(str2.split(','));

console.clear();
// Math
let numRandom = Math.floor(Math.random() * 100); // genera numeros aleatorios entre 0 y 1
console.log(numRandom);

console.log(Math.round(2.8)); // redondea el numero
console.log(Math.floor(2.8)); // redondea para abajo
console.log(Math.ceil(2.2)); // redondea para arriba
console.log(Math.min(3, 5, 7, 9)); // Devuelve el numero minimo de un conjunto de numeros
console.log(Math.max(3, 5, 7, 9)); // Devuelve el numero maximo de un conjunto de numeros
console.log(Math.pow(2, 8));
console.log(Math.cbrt(256));

let min = 70;
let max = 100;
console.log(Math.round(Math.random() * (min - max) + max));

console.log(min.toString());
