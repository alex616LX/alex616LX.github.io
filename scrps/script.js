// Selecciona todos los audios dentro de trabajos
const trabajos = document.querySelectorAll('.trabajos');

trabajos.forEach((trabajo) => {
    // Encuentra todos los elementos de audio dentro de cada trabajo
    const audios = trabajo.querySelectorAll('audio');

    audios.forEach((audio) => {
        // Cuando el audio empieza a reproducirse
        audio.addEventListener('play', () => {
            // Quitar resaltado de otros trabajos
            trabajos.forEach((t) => t.classList.remove('resaltado'));

            // Añadir clase resaltado al contenedor actual
            trabajo.classList.add('resaltado');
        });

        // Cuando el audio se pausa
        audio.addEventListener('pause', () => {
            // Quitar clase resaltado si el audio se pausa
            trabajo.classList.remove('resaltado');
        });

        // Cuando el audio termina
        audio.addEventListener('ended', () => {
            // Quitar clase resaltado al terminar
            trabajo.classList.remove('resaltado');
        });
    });
});



const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
