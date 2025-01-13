// Selezione degli elementi in html (input)


const distance = document.getElementById('distanza');
const age = document.getElementById('eta');
const button = document.getElementById('btn');
const nameSurname = document.getElementById('nome-cognome');

console.log(button);
console.log(distance);
console.log(age);

// Selezione degli elementi in html (output)

const name = document.getElementById('nome');
const offer = document.getElementById('offerta');
const wagon = document.getElementById('carrozza');
const price = document.getElementById('prezzo')

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
    const finalFirstDiscount = sum - firstDiscount

    // Calcolo dello sconto 'over 65'
    const finalSecondDiscount = sum - secondDiscount

    // If statement per calcolare il prezzo finale 
    if (old < 18) {
        price.innerHTML = finalFirstDiscount.toFixed(2) + " " + "€";
    } else if (old > 65) {
        price.innerHTML = finalSecondDiscount.toFixed(2) + " " + "€";
    } else {
        price.innerHTML = sum.toFixed(2) + " " + "€";
    }
});

