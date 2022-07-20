//chiedere all'utente quanti km deve fare
let kmTravel = parseInt( prompt('how many km do you have to travel?') ) 

//chiedere all'utente quanti anni ha 
let age = parseInt( prompt('how old are you?') )

//costo al km
const oneKmPrice = 0.21

//calcolo il prezzo in base ai km
let ticketPrice = (kmTravel * oneKmPrice)

console.log(kmTravel , age , ticketPrice)


//se l'età è minore di 18
if ( age < 18 ) {
    ticketPrice = ticketPrice * 0.8
    ticketPrice = ticketPrice.toFixed(2)
    console.log(ticketPrice)
}

//se l'età è maggiore di 65
if ( age > 65 ) {
    ticketPrice = ticketPrice * 0.6
    ticketPrice = ticketPrice.toFixed(2)
    console.log(ticketPrice)
}

const ticket_price = document.getElementById('ticket_price')

console.dir(ticket_price)

ticket_price.innerHTML = 'il prezzo del biglietto è di: ' + ticketPrice


