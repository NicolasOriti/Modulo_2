class Alumno {
  constructor(apellido, comision, curso, edad, nombre) {
    this.apellido = apellido;
    this.comision = comision;
    this.curso = curso;
    this.edad = edad;
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola! soy ${this.nombre}`);
  }
  estudiar() {
    console.log('Leyendo... resumiendo...');
  }
  presentarse() {
    console.log(`
        Nombre: ${this.nombre}
        Apellido: ${this.apellido}
        Edad: ${this.edad}
        Curso: ${this.curso}
        Comision: ${this.comision}
        `);
  }
}

const alumno = new Alumno('Valoy', '87i', 'fullstack', 23, 'German');
const alumno2 = new Alumno('Barrera Oro', '87i', 'fullstack', 14, 'Ignacio');
alumno.presentarse();
alumno2.presentarse();

/***************************************************************/

class Persona {
  constructor(nombre, apellido, edad = 23) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola soy ${this.nombre} ${this.apellido}`);
  }
}

const persona1 = new Persona('Nicolas', 'Oriti Tizio', 25);
persona1.saludar();

class Profesor extends Persona {
  constructor(nombre, apellido, edad, materia) {
    super(nombre, apellido, edad);
    this.materia = materia;
  }

  presentarMateria() {
    console.log(`Buen dia, hoy veremos ${this.materia}`);
  }
}

const profesor1 = new Profesor('Enrico', 'Palomares', 27, 'Frontend');

profesor1.saludar();
profesor1.presentarMateria();
