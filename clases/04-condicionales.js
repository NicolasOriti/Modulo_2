// if (true) {
//   console.log('Hola');
//   alert('Chau');
// }

let edad = parseInt(prompt('Ingrese su edad'));

if (edad >= 18) {
  console.log('Sos mayor de edad');
} else {
  console.log('Sos menor de edad');
}

let num1 = Number(prompt('Ingrese un numero'));

if (num1) {
  console.log(num1);

  if (num1 % 2 === 0) {
    console.log(`El numero ${num1} es par`);
  } else {
    console.log(`El numero ${num1} es impar`);
  }
} else {
  console.log('Ingrese un numero correctamente');
}

// Valores Falsy
// NaN
// 0
// null
// undefined
// ''

let letra = prompt('Ingrese una letra');
if (letra.length > 1) {
  console.log('Ingrese solo una letra');
} else {
  switch (letra) {
    case 'a':
      console.log('pa');
      break;
    case 'e':
      console.log('pe');
      break;
    case 'i':
      console.log('pi');
      break;
    case 'o':
      console.log('po');
      break;
    case 'u':
      console.log('pu');
      break;
    default:
      console.log('Ingrese una letra vocal');
  }
}
