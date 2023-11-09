// Recibir dos valores y la operación a realizar (+, -, *, /)
// Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
// Con una estructura switch verificar la operación y devolver un mensaje con el
// resultado de la misma.
// Si se ingresa una operación que no está contemplada devolver un mensaje de error.

function calculadora(factor1, factor2, operacion) {
  if (isNaN(factor1)) {
    return alert(`El factor1 ${factor1}, no es un numero`);
  }

  if (isNaN(factor2)) {
    return alert(`El factor2 ${factor2}, no es un numero`);
  }

  switch (operacion) {
    case '+':
    case 'suma':
      alert(`El resultado de ${factor1} + ${factor2} = ${factor1 + factor2}`);
      break;
    case '-':
    case 'resta':
      alert(`El resultado de ${factor1} - ${factor2} = ${factor1 - factor2}`);
      break;
    case '*':
    case 'multiplicacion':
      alert(`El resultado de ${factor1} * ${factor2} = ${factor1 * factor2}`);
      break;
    case '/':
    case 'division':
      alert(`El resultado de ${factor1} / ${factor2} = ${factor1 / factor2}`);
      break;

    default:
      console.error(`La operacion ${operacion} no existe en esta calculadora`);
      break;
  }
}

let confirmacion;

do {
  let num1 = Number(prompt('Ingrese el primer factor'));
  let num2 = Number(prompt('Ingrese el segundo factor'));
  let operacion = prompt('Ingrese la operacion a realizar');

  calculadora(num1, num2, operacion);

  confirmacion = confirm('Queres hacer otra operacion?');
} while (confirmacion);
