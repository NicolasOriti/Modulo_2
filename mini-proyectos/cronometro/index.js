let centesimas = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

// const Centesimas = document.getElementById("Centesimas");
// const Segundos = document.getElementById("Segundos");
// const Minutos = document.getElementById("Minutos");
// const Horas = document.getElementById("Horas");

function iniciar() {
  setInterval(cronometro, 0.1);
}

function cronometro() {
  if (centesimas < 99) {
    centesimas++;
    if (centesimas < 10) {
      centesimas = '0' + centesimas;
    }
    Centesimas.innerHTML = ':' + centesimas;
  }
  if (centesimas == 99) {
    centesimas = -1;
  }
  if (centesimas == 0) {
    segundos++;
    if (segundos < 10) {
      segundos = '0' + segundos;
    }
    Segundos.innerHTML = ':' + segundos;
  }
  if (segundos == 59) {
    segundos = -1;
  }
  if (centesimas == 0 && segundos == 0) {
    minutos++;
    if (minutos < 10) {
      minutos = '0' + minutos;
    }
    Minutos.innerHTML = ':' + minutos;
  }
  if (minutos == 59) {
    minutos = -1;
  }
  if (centesimas == 0 && segundos == 0 && minutos == 0) {
    horas++;
    if (horas < 10) {
      horas = '0' + horas;
    }
    Horas.innerHTML = horas;
  }
}
