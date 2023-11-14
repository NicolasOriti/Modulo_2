const notas1 = [5, 7, 10, 8];
const notas2 = [3, 5, 10, 9];

// Funcion Declarativa
function promediar(arrayNotas) {
  let sumatoria = 0;
  for (let index = 0; index < arrayNotas.length; index++) {
    // sumatoria = sumatoria + numeros[index]
    sumatoria += arrayNotas[index];
  }

  let promedio = sumatoria / arrayNotas.length;

  return promedio;
}

// Funcion Expresiva / Funcion anonima
const mostrarPromedio = (notas, callback) => {
  console.log(`Las notas son: ${notas}`);
  let promedio = callback(notas);
  console.log(`El promedio de las notas todo el año es: ${promedio}`);
};

mostrarPromedio(notas2, promediar);

// Callbacks
