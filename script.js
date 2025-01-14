// Selezione degli elementi in html (input)

const distance = document.getElementById('distanza');
const age = document.getElementById('eta');
const button = document.getElementById('genera');
const nameSurname = document.getElementById('nome-cognome');
const form = document.getElementById('main-form');
const city = document.getElementById('citta');

// Selezione degli elementi in html (output)

const name = document.getElementById('nome');
const offer = document.getElementById('offerta');
const destination = document.getElementById('destinazione');
const seat = document.getElementById('posto');
const price = document.getElementById('prezzo');

// Calcolo del biglietto 


// Prezzo del biglietto
let ticketPrice = 0.21;

// Sconto minorenni
let minDiscount = 20;

// Sconto maggiorenni
let maxDiscount = 40;

// Funzione per calcolare il prezzo del biglietto

button.addEventListener('click', () => {
    // Recupero del valore Km
    const kilometers = distance.value.trim();
    console.log(kilometers);

    // Recupero del valore età
    const old = age.value.trim();
    console.log(old);

    // Calcolo prezzo x chilometri
    const sum = ticketPrice * kilometers

    // Calcolo somma x lo sconto 'minori'
    const firstDiscount = sum * minDiscount / 100;
    console.log(firstDiscount);

    // Calcolo somma x lo sconto 'over 65'
    const secondDiscount = sum * maxDiscount / 100;

    // Calcolo dello sconto 'minori'
    const finalFirstDiscount = sum - firstDiscount;

    // Calcolo dello sconto 'over 65'
    const finalSecondDiscount = sum - secondDiscount;

    // If statement per calcolare il prezzo finale 
    if (old < 18) {
        price.innerHTML = finalFirstDiscount.toFixed(2) + " " + "€";
        offer.innerHTML = `Sconto Minorenni`;
    } else if (old > 65) {
        price.innerHTML = finalSecondDiscount.toFixed(2) + " " + "€";
        offer.innerHTML = `Sconto Maggiorenne`;
    } else {
        price.innerHTML = sum.toFixed(2) + " " + "€";
        offer.innerHTML = `Prezzo Standard`;
    }

    // Creo un numero Random
    const numRandom = Math.round(Math.random() * 100 + 1);

    // Aggiungo i valori
    destination.innerHTML = city.value;
    name.innerHTML = nameSurname.value;
    seat.innerHTML = numRandom;

});
