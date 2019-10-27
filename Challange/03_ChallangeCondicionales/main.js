// Juego Piedra, Papel o tijera

let ingPlayer1 = prompt("Ingresa tu opción: ");
let ingPlayer2 = prompt("Ingresa tu opción: ");

let Player1 = ingPlayer1.toLowerCase()
let Player2 = ingPlayer2.toLowerCase()

console.log(Player1, Player2)

let pie = "piedra";
let pap = "papel";
let tij = "tijera";

if(Player1 === Player2){
    console.log("Empate")
}
else if(Player1 === pie && Player2 === tij){
    console.log("Gana Jugador 1")
}
else if (Player1 === pap && Player2 === pie){
    console.log("Gana Jugador 1")
}
else if (Player1 === tij && Player2 === pap){
    console.log("Gana Jugador 1")
}
else {
    console.log("Gana Jugador 2")
}