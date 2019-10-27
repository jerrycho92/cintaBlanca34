// // function saludo(){
// //     console.log("Hola Gerardo");
// // }

// // saludo();
// let saludo = (persona="invitado") =>{
//     console.log("Hola " + persona + " !")
// }

// let suma = (a , b ) => {
//     console.log(a + b)
// }
// saludo("Jerry");
// saludo("Gerardo");
// saludo()

// suma(3, 5);
// suma("hola", 8);
// suma();

// let a = prompt("Ingresa ru primer número");
// let b = prompt("Ingresa tu segundo numero");

// let multiplicacion = (a, b) => {
//     console.log(a*b);
// };

// multiplicacion(a, b)

// Challange
// Area de un triangulo
// Perimetro de un cuadrado
// const areaTriangulo = (b,h) => {
//     let areaTriangulo = ((b*h)/2);
//     console.log(`El area del triangulo es: ${areaTriangulo}`)
// }
// const perimetroCuadrilatero = (j,k,l,m) =>{
//     let perimetroCuadrilatero = (j+k+l+m);
//     console.log(`El perimetro del cuadrilatero es: ${perimetroCuadrilatero}`)
// }
// let opcOperacion = Number(prompt("¿Qué operación desea? 1) Area de un triangulo | 2) Perimetro de un cuadrilatero"))
// if(opcOperacion === 1){
//     let b = prompt("Ingrese su base")
//     let h = prompt("Ingrese su altura")
//     areaTriangulo(b,h)
// }else if(opcOperacion === 2){
//     let j = Number(prompt("Ingrese el tamaño del primer lado"))
//     let k = Number(prompt("Ingrese el tamaño del segundo lado"))
//     let l = Number(prompt("Ingrese el tamaño del tercer lado"))
//     let m = Number(prompt("Ingrese el tamaño del cuarto lado"))
//     perimetroCuadrilatero(j,k,l,m);
// }

let LimInferior = Number(prompt ("Ingresa el rango inicial:"))
let LimSuperior = Number(prompt("Ingresa el rango final"))
// console.log(LimInferior);
// console.log(LimSuperior);
const FizzBuzz = () => {
    for(let i = LimInferior; i<=LimSuperior; i++)
        {
            if(i % 3 === 0 && i % 5 ===0)
            {
            console.log(i + " FizzBuzz")
            }
            else if(i % 3 === 0)
            {
            console.log(i + " Fizz")
            }
            
            else if(i % 5 === 0)
            {
            console.log(i + " Buzz")
            }
            
            else {
                console.log(i)
            }
    }
}
FizzBuzz()