/* 
1- Crear un array llamado meses y que almacene 
el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista 
los doce nombres del arreglo.
*/

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

let mesesPantalla = `<ol>`;

for (let index = 0; index < meses.length; index++) {
  mesesPantalla += `<li>${meses[index]}</li>`;
  if (index === meses.length - 1) {
    mesesPantalla += '</ol>'
  }
}

document.write(mesesPantalla);
