function validarCredenciales(evento) {
    evento.preventDefault();
    const correoIngresado = document.getElementById("correo").value.trim();
    const claveIngresada = document.getElementById("clave").value.trim();

    if (correoIngresado === "admin@mail.com" && claveIngresada === "123456") {
        console.log("Acceso permitido");
        window.location.href = "intranet.html";
    } else {
        console.log("Credenciales no válidas");
    }
}
