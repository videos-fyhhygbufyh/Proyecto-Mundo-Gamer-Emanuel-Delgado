document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const seccion = document.querySelector(link.getAttribute('href'));
        seccion.scrollIntoView({ behavior: 'smooth' });
    });
});
const proyectos = document.querySelectorAll('.game-item');
window.addEventListener('scroll', () => {
    proyectos.forEach(proyecto => {
        const alturaPantalla = window.innerHeight * 0.8;
        if (proyecto.getBoundingClientRect().top < alturaPantalla) {
            proyecto.style.opacity = 1;
        }
    });
});

// Validación del formulario
const form = document.getElementById('formulario');
form.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !correo || !mensaje) {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        alert("El correo no es válido, revisa de nuevo.");
        return;
    }

    alert("Gracias " + nombre + ", tu mensaje fue enviado.");
    form.reset();
});