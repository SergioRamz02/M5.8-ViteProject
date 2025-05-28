import './style.css';

//Variables para inicializar
let numeroSecreto;
let minimo = 1;
let maximo = 100;

//Valores para iniciar el juego
const inputMinimo = document.getElementById('minimo');
const inputMaximo = document.getElementById('maximo');
const botonIniciar = document.getElementById('iniciar');

//Variables para adivinar el número
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');

const rangoInfo = document.getElementById('rangoInfo');

//Función para iniciar el juego
botonIniciar.addEventListener('click', () => {
    minimo = parseInt(inputMinimo.value);
    maximo = parseInt(inputMaximo.value);

    if (isNaN(minimo) || isNaN(maximo) || minimo >= maximo) {
        mensaje.textContent = 'Por favor, ingresa un rango válido (mínimo < máximo).';
        return;
    }

    numeroSecreto = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    mensaje.textContent = '';
    rangoInfo.textContent = `La computadora ha generado un número entre ${minimo} y ${maximo}. ¡Adivínalo!`;

    inputNumero.disabled = false;
    botonAdivinar.disabled = false;
});

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    } else if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '¡Felicidades! ¡Adivinaste el número!';
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto.';
    } else {
        mensaje.textContent = 'El número es más bajo.';
    }
});