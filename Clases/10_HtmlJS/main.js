// let etiqueta = document.getElementById("etiqueta");
// let parrafo = document.getElementById("parrafo");
// let boton = document.getElementById("boton");
// let input = document.getElementById("input");
// let palabra = document.getElementById("palabra")
// parrafo.innerHTML = "Soy el parrafo desde JS";
// const cambiar = () =>{
//     parrafo.innerHTML = "Soy el parrafo cambiado desde JS";
// }
// const valor = () =>{
//     let valorInput = input.value
//     palabra.innerHTML = valorInput
// }
// boton.addEventListener("click", cambiar)
// boton.addEventListener("click", valor)

// Challange: Hacer un formulario donde se pregunte el nombre, el telefono, la dirección (Calle), si les gusta la pizza con piña o sin piña y mostrarlo en una lista
let boton = document.getElementById("boton");
let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let direccion = document.getElementById("direccion");
let pina = document.getElementById("pina");
let nombreguardado = document.getElementById("nombreguardado");
let telefonoguardado = document.getElementById("telefonoguardado");
let direccionguardado = document.getElementById("direccionguardado");
let pinaguardado = document.getElementById("pinaguardado");
const ingresa = () => {
    let valornombre = nombre.value
    let valortelefono = telefono.value
    let valordireccion = direccion.value
    let valorpina = pina.value
    nombreguardado.innerHTML = valornombre
    telefonoguardado.innerHTML = valortelefono
    direccionguardado.innerHTML = valordireccion
    pinaguardado.innerHTML = valorpina
}
boton.addEventListener("click", ingresa)