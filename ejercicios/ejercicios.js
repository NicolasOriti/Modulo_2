// Recibir dos valores y la operación a realizar (+, -, *, /)
// Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
// Con una estructura switch verificar la operación y devolver un mensaje con el
// resultado de la misma.
// Si se ingresa una operación que no está contemplada devolver un mensaje de error.

let num1 = Number(prompt('Ingrese el primer factor'));
let num2 = Number(prompt('Ingrese el segundo factor'));
let operacion = prompt('Ingrese la operacion a realizar (+, -, *, /)');

if (isNaN(num1)) {
  console.log('El num1 es NaN');
  num1 = 0;
}

if (isNaN(num2)) {
  console.log('El num2 es NaN');
  num2 = 0;
}

switch (operacion) {
  case '+':
    console.log(`El resultado de ${num1} + ${num2} = ${num1 + num2}`);
    break;
  case '-':
    console.log(`El resultado de ${num1} - ${num2} = ${num1 - num2}`);
    break;
  case '*':
    console.log(`El resultado de ${num1} * ${num2} = ${num1 * num2}`);
    break;
  case '/':
    console.log(`El resultado de ${num1} / ${num2} = ${num1 / num2}`);
    break;

  default:
    console.error(`La operacion ${operacion} no existe en esta calculadora`);
    break;
}
