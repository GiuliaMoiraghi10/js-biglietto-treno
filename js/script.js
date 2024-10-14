const test = "Biglietto del treno"
console.log(test)

// 1.Chiedere numero di km all'utente
    const userKm = parseInt (prompt("Km che vuoi percorrere?"))
    console.log (userKm)
// 2.Chiedere età del passeggero
    const userAge = parseInt (prompt("Quanti anni ha il passeggero?"))
    console.log (userAge)
// 3.Calcolare prezzo totale del viaggio
//  - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//      
//  - va applicato uno sconto del 20% per i minorenni
//  - va applicato uno sconto del 40% per gli over 65
// (4.L’output del prezzo finale va messo fuori in forma umana) 