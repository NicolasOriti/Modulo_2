// INT = integer = entero
let num1 = Number(prompt('Ingrese el primer numero: '));
let num2 = prompt('Ingrese el segundo numero: ');
let num3 = 5;
console.log('num1: ', num1);
console.log('num2: ', num2);

// 1- Operadores de asignacion

num3 += 5; // num1 = num1 + 5;
num3 -= 5; // num1 = num1 - 5;
num3 *= 5; // num1 = num1 * 5;
num3 /= 5; // num1 = num1 / 5;
num3 %= 5; // num1 = num1 % 5;

// 2- Operadores aritmeticos

// Suma
let suma = num1 + num2;
console.log('Suma = ', suma);

// Resta
let resta = num1 - num2;
console.log('Resta = ', resta);

// Multiplicacion
let multiplicacion = num1 * num2;
console.log('Multiplicacion = ', multiplicacion);

// Division
let division = num1 / num2;
console.log('Division = ', division);

// Modulo || Resto
let resto = num1 % num2;
console.log('Resto = ', resto);

// 3- Operadores unitarios

// Incremento
// num1 = num1 + 1;
num1++;
console.log('Incremento: ', num1);

// Decremento
// num2 = num2 - 1;
num2--;
console.log('Decremento: ', num2);

// 4- Operadores relacionales

console.log(num1 + ' y ' + num2 + ' Son iguales? ', num1 == num2);
console.log(num1 + ' y ' + num2 + ' Son diferentes? ', num1 != num2);
console.log(num1 + ' es mayor que ' + num2 + '? ', num1 > num2);
console.log(num1 + ' es menor que ' + num2 + '? ', num1 < num2);
console.log(num1 + ' es mayor o igual que ' + num2 + '? ', num1 >= num2);
console.log(num1 + ' es menor o igual que ' + num2 + '? ', num1 <= num2);

console.log(num1 + ' y ' + num2 + ' Son estrictamente iguales? ', num1 === num2);
console.log(num1 + ' y ' + num2 + ' Son estrictamente diferentes? ', num1 !== num2);

// 5- Operadores logicos

// AND
console.log('AND: ', true && true);
console.log('AND: ', true && false);
console.log('AND: ', false && true);
console.log('AND: ', false && false);

// OR
console.log('OR: ', true || true);
console.log('OR: ', true || false);
console.log('OR: ', false || true);
console.log('OR: ', false || false);

// NOT
console.log('NOT: ', !true);
console.log('NOT: ', !false);
