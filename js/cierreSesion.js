function cerrarSesion() {
    const confirmaSalida = confirm("¿Realmente desea salir?");

    if (confirmaSalida) {
        window.location.href = "login.html";
    }
}