// //Arrays
// let animales =  ["Salchicha", "Pez", "Jirafa", "Araña", "Leopardo", "Oso", "Tigre"];
// let colores = ["rojo", "azul", "rosa", "verde"];
// let objetos = ["pelota", 24, true];

// console.log(animales);
// console.log(animales[5], animales[3], colores[0]);

// //Forma de agregar un nuevo elemento a un arreglo si sabemos la cantidad de objetos dentro de el
// animales[7] = "Cocodrilo";

// console.log(animales)

// //Agregar un nuevo objeto sin conocer la cantidad de objetos dentro
// animales.push("Pinguinito");
// console.log(animales);

// //Borra el ultimo elemento guardado en el arreglo
// animales.pop()
// console.log(animales);

// //Borra un espacio definido en el arreglo
// //Lo que va dentro de los parentesis se llaman parametros. Splice requiere 2 parametros. El primero dice la posicion del elemento a borrar y el segundo de cuantos elementos se van a borrar a partir de ese
// animales.splice(1,1);
// console.log(animales);

// Challange:
// let bandas = ["Tiesto", "Armin Van Buuren", "Vini Vici", "Paul Van Dyk", "Cosmic Gate"];
// let hobbies = ["Videojuegos", "Viajar", "Netflix", "Leer", "Futbol", "Hockey", "Programar"];
// let materias = ["Algebra", "Metodos Numericos", "Diseño Logico", "Electronica", "Quimica", "Administración", "Humanidades", "Redes", "Literatura"]
// // console.log(bandas, hobbies, materias);
// console.log(bandas[0], hobbies[3], materias[8]);
// hobbies.pop();
// console.log(bandas, hobbies, materias);
// bandas.push("Banda MS");
// console.log(bandas, hobbies, materias);
// materias.splice(1,2);
// console.log(bandas, hobbies, materias);

//Objeto

let persona = 
{
    //Sintaxis KEY:
    nombre: "Gerardo",
    edad: 27,
    telefono: "55 1234 5678",
    nacionalidad: "mexicana",
    direccion: 
    {
        calle: "Alvaro Obregon",
        numero: "100",
        colonia: "Roma",
        cp: "10450",
    },
    frameworks:
    {
        css: ["bootstrap", "foundation", "bulma"],
        js: ["react", "vue", "angular"],
    }
}

console.log(persona);
console.log(persona.nacionalidad);
console.log(persona.direccion);
console.log(persona.direccion.cp);
console.log(persona.frameworks.js[0]);

//JSON = JAVASCRIPT OBJECT NOTATION