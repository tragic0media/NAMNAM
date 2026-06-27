// ÑAMÑAM - JavaScript principal



// Menu movil
var btnAbrir = document.getElementById("btnAbrirMenu");
var btnCerrar = document.getElementById("btnCerrarMenu");
var menuMovil = document.getElementById("menuMovil");

if (btnAbrir) {
    btnAbrir.addEventListener("click", function () {
        menuMovil.classList.add("activo");
    });
}

if (btnCerrar) {
    btnCerrar.addEventListener("click", function () {
        menuMovil.classList.remove("activo");
    });
}
