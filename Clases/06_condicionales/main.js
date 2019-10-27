// if (condicion){
//     let edad= 20object
//     1 primero que se cumple
// }else{ 

// El and se escribe && 
// let edad =40

// if( edad <= 17){
    // console.log("eres menor de edad");
//}else if(edad <= 40 ){
    // console.log("Eres un jovenaso ");
//} else{
    // console.log("Eres un viejito");
//}

//Decir si un numero es par o impar----->
//=== 
// let x = 10
// if ( x === '10'){
//     console.log('Es verdadero');
// }else{
//     console.log('Es falso');
// }

//modulo -%-

// let numero = prompt('Ingresa un numero')
// if(numero %2  === 0){
//     console.log('El '+ numero +' es par');
// }else{
//     console.error('El '+ numero +' es impar');
// }


//Si eres menor de 15 años no puedes conducir
//si tienes entre 16-17 puedes sacar tu permiso
//Si tienes de 18 a 60 puedes conducir
//Si tienes ms de 60 mejor no conducas
// let Pedad = prompt("Inserta tu edad")
// let edad = Number(Pedad)
// if(edad <= 15){
//     console.log("No puedes conducir");
// }else if(edad === 16 || edad === 17){
//     console.log("Puedes sacar tu permiso");
// }
// else if(edad >= 18 && edad <=60){   
//     console.log("Eres apto para manejar");
// }else if(edad > 60){
//     console.log("Mejor no menejes por tu seguridad y la mia :(");
// } else{
//    console.log("No te estoy entendiendo ;(");
// }

let prueba = "perritoSalchicha123"
let password = prompt("Inserta tu password");
// let password = String(password);
if(password === prueba){
     console.log("Bienvenido");
 }else{
     alert("Acceso denegado")
 }