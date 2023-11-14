const opciones = ['PIEDRA', 'PAPEL', 'TIJERA'];

function playGame() {
  let bot = Math.round(Math.random() * 2);

  let jugador = prompt('Ingrese su opcion: 0 = PIEDRA | 1 = PAPEL | 2 = TIJERA');

  switch (true) {
    case jugador == bot:
      alert('EMPATE');
      break;
    case jugador == 0 && bot === 2:
      alert('GANASTE');
      break;
    case jugador == 1 && bot === 0:
      alert('GANASTE');
      break;
    case jugador == 2 && bot === 1:
      alert('GANASTE');
      break;

    default:
      alert('PERDISTE');
      break;
  }
}
