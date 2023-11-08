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

let listadoNombres = [];
let nombre;
do {
  nombre = prompt('Ingrese un nombre');

  if (nombre) {
    listadoNombres.push(nombre);
  }
} while (nombre);

listadoNombres[50] = 'UNO'
listadoNombres.splice(0, 0, "UNO")
listadoNombres.splice(5, 25)

for (let i = 0; i < listadoNombres.length; i++) {
  console.log(`En la posicion ${i} esta el elemento: ${listadoNombres[i]}`);
}