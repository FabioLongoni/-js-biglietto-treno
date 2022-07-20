//chiedere all'utente quanti km deve fare
let kmTravel = parseInt( prompt('how many km do you have to travel?') ) 

//chiedere all'utente quanti anni ha 
let age = parseInt( prompt('how old are you?') )

//costo al km
const oneKmPrice = (0.21)

//calcolo il prezzo in base ai km
let ticketPrice = (kmTravel * oneKmPrice)

console.log(kmTravel , age , ticketPrice)

if ( age < 18 ) {
    ticketPrice = (ticketPrice) * 0.8
    console.log(ticketPrice)
}

if ( age > 65 ) {
    ticketPrice = (ticketPrice) * 0.6
    console.log(ticketPrice)
}


