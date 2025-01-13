// Selezione degli elementi in html

const distance = document.getElementById('distanza')
const age = document.getElementById('eta')
const button = document.getElementById('btn')

console.log(button);
console.log(distance);
console.log(age);

// Calcolo del biglietto 


// Prezzo del biglietto
let price = 0.21;

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
    const sum = price * kilometers

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
        console.log(finalFirstDiscount);
    } else if (old > 65) {
        console.log(finalSecondDiscount);
    } else {
        console.log(sum);
    }
})