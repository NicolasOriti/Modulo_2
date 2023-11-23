/*
  Cuenta bancaria
  2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
  Una propiedad titular con el valor "Alex".
  Una propiedad saldo, teniendo como valor inicial 0.
  Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
  Un método extraer() que permita retirar la cantidad pasada como parámetro.
  Un método informar() que retorne la información del estado de la cuenta. 
  
  Flujo de prueba:
  Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

class CuentaBancaria {
  constructor(titular = 'Alex', saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(cantidad) {
    this.saldo += cantidad;
  }

  // TODO: validar que la cantidad sea numerica
  extraer(cantidad) {
    this.saldo -= cantidad;
  }

  informar() {
    console.log('==========Detalle de la cuenta=============');
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${this.saldo}`);
    console.log('===========================================');
  }
}

const cuenta1 = new CuentaBancaria('Nicolas');
cuenta1.informar();
cuenta1.ingresar(10000);
cuenta1.informar();
cuenta1.extraer(500);
cuenta1.informar();
