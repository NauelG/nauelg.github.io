import { Main } from './main.js'

/*
Clase inicializadora de todos los módulos con el load de la página
*/

(function() {
    window.addEventListener("load", () => { new Main() })
})()