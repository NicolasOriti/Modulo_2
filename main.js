/* 
Tarea:
1- Hacer el quiz de Introducción a JavaScript
2- Usando métodos matemáticos
Ingresar 3 números
Indicar cual es el mayor
Indicar cual es el menor
Obtener la raíz cuadrada del segundo número
3- Usando métodos de string
Recibir un nombre completo como entrada y utilice 
split para dividirlo en nombre y apellido, y luego 
use charAt y toUpperCase para capitalizar la primera 
letra de cada palabra. 
*/

// let num1 = Number(prompt('Ingrese el primer numero'));
// let num2 = Number(prompt('Ingrese el segundo numero'));
// let num3 = Number(prompt('Ingrese el tercer numero'));

// let numMax = Math.max(num1, num2, num3);
// console.log('El numero mayor es: ' + numMax);

// let numMin = Math.min(num1, num2, num3);
// console.log('El numero menor es: ' + numMin);

// console.log(`La raiz cuadrada de ${num2} es: ${Math.sqrt(num2)}`);

let nombreCompleto = prompt('Ingrese su nombre completo');

let nombreYApellido = nombreCompleto.split(' ');

let nombre = nombreYApellido[0];
let apellido = nombreYApellido[1];

nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1);

// let [nombre, apellido] = nombreCompleto.split(' ');

console.log(nombreYApellido);
console.log(nombre, apellido);
