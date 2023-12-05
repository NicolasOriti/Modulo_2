let agenda = JSON.parse(localStorage.getItem('agenda')) || [];

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

const addContact = () => {
  let nombre = document.querySelector('#nombreText');
  let telefono = document.querySelector('#telefonoText');

  if (!nombre.value || !telefono.value) {
    alert('Debes ingresar un nombre y un teléfono');
    nombre.focus();
    return;
  }

  console.log('Hola');

  agenda.push(new Contacto(nombre.value, telefono.value));
  localStorage.setItem('agenda', JSON.stringify(agenda));
  showContacts(agenda);
};

const showContacts = (array) => {
  let cuerpo = document.querySelector('#cuerpoTabla');

  array.forEach((element, index) => {
    let fila = document.createElement('tr');
    let datos = `
      <td>${element.nombre}</td>
      <td>${element.telefono}</td>
      <td>
        <button class="btn btn-danger" onclick="deleteContact(${index})">Eliminar</button>
      </td>
    `;
    fila.innerHTML = datos;

    cuerpo.appendChild(fila);
  });
};

showContacts(agenda);
