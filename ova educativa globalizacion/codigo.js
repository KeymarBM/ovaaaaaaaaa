function iniciarSesion() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === "usuario" && password === "1234") {
        alert(`Bienvenido, ${username}`);
        document.getElementById('login').classList.add('oculto');
        document.getElementById('contenidoPrincipal').classList.remove('oculto');
        document.getElementById('userIcon').classList.remove('oculto');
        mostrarSeccion('inicio');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
    return false;
}

function mostrarSeccion(seccion) {
    const secciones = document.querySelectorAll('section');
    secciones.forEach(sec => {
        sec.classList.add('seccionOculta');
        sec.classList.remove('seccionVisible');
    });
    document.getElementById(seccion).classList.remove('seccionOculta');
    document.getElementById(seccion).classList.add('seccionVisible');
}

function toggleSubmenu() {
    const submenu = document.getElementById('submenuJuegos');
    submenu.classList.toggle('oculto');
}


function mostrarMenuJuegos() {
    const botones = document.getElementById('botonesjuegos'); 
    const juegos = document.querySelectorAll('.iframe-container');

    
    juegos.forEach((juego) => (juego.style.display = 'none'));

    
    botones.style.display = 'block';
}


function mostrarJuego(id) {
    const juegos = document.querySelectorAll('.iframe-container');

    
    juegos.forEach((juego) => (juego.style.display = 'none'));

    
    const juegoSeleccionado = document.getElementById(id);
    if (juegoSeleccionado) {
        juegoSeleccionado.style.display = 'block';
    }
}
