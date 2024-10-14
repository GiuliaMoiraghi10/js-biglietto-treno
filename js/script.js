const test = "Biglietto del treno"
console.log(test)

// 1.Chiedere numero di km all'utente
    const userKm = parseInt (prompt("Km che vuoi percorrere?")) //number
    console.log (userKm)

// 2.Chiedere età del passeggero
    const userAge = parseInt (prompt("Quanti anni ha il passeggero?")) //number
    console.log (userAge)

// 3.Calcolare prezzo totale del viaggio
//  - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     - calcolare costo del biglietto in base ai km che farà l'utente
    const priceTicket = (userKm *0.21) //number
    console.log (priceTicket)
//  - va applicato uno sconto del 20% per i minorenni
//      - SE il passeggero è < 18 anni
//          -> sconto del 20%
//  - va applicato uno sconto del 40% per gli over 65
//      - ALTRIMENTI SE il passeggero è > 65 anni
//          -> sconto del 40%
//      - ALTRIMENTI nessuno sconto

    let sale20 = priceTicket * 20 / 100
    let sale40 = priceTicket * 40 / 100
    if (userAge <18){
        console.log(priceTicket - sale20)
    } else if (userAge > 65){
        console.log(priceTicket - sale40)
    } else {priceTicket}




    
// (4.L’output del prezzo finale va messo fuori in forma umana)
    