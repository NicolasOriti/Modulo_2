// BOM

// console.log('Este es navigator: ', navigator);
// if (navigator.onLine) {
//   console.log('Estoy conectado');
// } else {
//   console.log('No tengo internet :(');
// }

// navigator.geolocation.getCurrentPosition((pos) => {
//   console.log('Mi posición es: ', pos);
// });

// console.log(location);
// location.assign('https://google.com');
// location.reload();

// console.log(history);

// let contador;

// let intervalo1 = setInterval(() => {
//   console.log('Hola cada 1s');

//   contador = 0;
//   // contador++;
// }, 1000);

// let intervalo2 = setInterval(() => {
//   console.log('Hola cada 2s');
// }, 2000);

// setTimeout(() => {
//   clearInterval(intervalo1);
//   console.log(contador);
//   // clearInterval(intervalo2)
// }, 5000);

// let usuario = {};

// setTimeout(() => {
//   usuario.nombre = 'Juan';
//   usuario.edad = 30;
//   usuario.pais = 'Argentina';
//   console.log(usuario);
// }, 3000);

const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Todo Ok');
  }, 2000);
});

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Todo Ok');
  }, 4000);
});

async function funcionAsincronica() {
  const response = await promesa1;
  console.log(response);
  const response2 = await promesa2;
  console.log(response2);
}



funcionAsincronica();
