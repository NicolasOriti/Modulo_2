const nombre = prompt('Ingrese su nombre');

document.body.innerHTML += `<p>Esto es un parrafo</p>`;

const title = document.getElementById('title');

title.innerHTML = `<h1>Hola ${nombre}</h1>`;

const button = document.querySelectorAll('button');
console.log(button);

document.body.appendChild(title.cloneNode(false));
document.body.removeChild(title);

const btnDont = document.querySelector('#btn-dont')

// const handlerBtnDont = () => {

// }

// function handlerBtnDont() {

// }

btnDont.addEventListener('click', (event) => {
  console.log(event)
  alert('No me toques')
})