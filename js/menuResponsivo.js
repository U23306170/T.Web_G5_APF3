document.addEventListener("DOMContentLoaded", function () {
    const botonMenu = document.querySelector(".boton-menu");
    const menuPrincipal = document.querySelector(".menu-principal");

    if (botonMenu && menuPrincipal) {
        botonMenu.addEventListener("click", function () {
            menuPrincipal.classList.toggle("menu-activo");
            const menuAbierto = menuPrincipal.classList.contains("menu-activo");
            botonMenu.setAttribute("aria-expanded", menuAbierto ? "true" : "false");
        });
    }
});