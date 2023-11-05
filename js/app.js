//Función que oculta o muestra el menu responsivo
let menuVisible = false;
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}


// scroll suave hasta la sección correspondiente

const enlaces = document.querySelectorAll('#nav a');

// Añadir un controlador de eventos para cada enlace
enlaces.forEach(enlace => {
    enlace.addEventListener('click', function (evento) {
        // Prevenir el comportamiento predeterminado de hacer clic en un enlace
        evento.preventDefault();

        // Obtener el valor del atributo href del enlace
        const destino = this.getAttribute('href');

        const menu = document.getElementById('menu');
        menu.classList.remove('activo');

        // Mostrar el elemento del GIF de carga
        const cargando = document.getElementById('cargando');
        cargando.style.display = 'block';

        // Realizar el desplazamiento suave al destino
        const posicion = document.querySelector(destino).offsetTop;
        window.scroll({
            top: posicion,
            left: 0,
            behavior: 'smooth'
        });

        // Ocultar el elemento del GIF de carga después de un retraso de 1 segundo (1000 milisegundos)
        setTimeout(() => {
            cargando.style.display = 'none';
        }, 1000);
    });
});



//Boton de navegacion para abajo
const btnScrollDown = document.getElementById('btn-scroll-down');

btnScrollDown.addEventListener('click', () => {

    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});


// ARREGLO DE FOTOS 
var images = [
    "SMAF/NicoTorgoff-02-Espalda-Barra.jpg",
    "SMAF/SMAF-Martín-Remo-Barra-01.jpg",
    "SMAF/SMAF-Valen-Seba-01.jpg",
    "SMAF/SMAF-Rosario-Estocada-01.jpg"
];
var currentImageIndex = 0;
var elementoFondo = document.querySelector(".inicio");


function changeBackgroundImage() {
    elementoFondo.style.opacity = 0;
    setTimeout(function () {
        elementoFondo.style.backgroundImage = "url(" + images[currentImageIndex] + ")";
        currentImageIndex = (currentImageIndex + 1) % images.length;
        elementoFondo.style.opacity = 1; // Establece la opacidad a 1 después de establecer la imagen de fondo
    }, 1000); // Espera 1 segundo para que se complete la transición de opacidad
}

function removeLoadingClass() {
    elementoFondo.classList.remove("loading");
    elementoFondo.classList.add("loaded");
    currentImageIndex = Math.floor(Math.random() * images.length); // Establece el índice de la imagen de fondo inicial de manera aleatoria
    elementoFondo.style.backgroundImage = "url(" + images[currentImageIndex] + ")";
    elementoFondo.style.opacity = 1; // Establece la opacidad a 1 cuando se carga la primera imagen
}


var backgroundImage = new Image();
backgroundImage.src = images[currentImageIndex];
backgroundImage.onload = function () {
    setTimeout(removeLoadingClass, 1000); // Espera 1 segundo para que se complete la transición de opacidad
};

setInterval(changeBackgroundImage, 4000);

