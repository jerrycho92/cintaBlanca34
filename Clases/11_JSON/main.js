let data = {
    nombre: 'Gerardo',
    phone: '5519507280',
    direccion: 'Tlalpan',
}
let nombre = document.getElementById("nombre");
let phone = document.getElementById("phone");
let direccion = document.getElementById("direccion");
nombre.innerHTML = data.name;
phone.innerHTML = data.phone;
direccion.innerHTML = data.direccion;