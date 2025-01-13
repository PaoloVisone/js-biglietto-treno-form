// Selezione degli elementi in html

const distance = document.getElementById('distanza')
const age = document.getElementById('eta')
const button = document.getElementById('btn')

console.log(button);
console.log(distance);
console.log(age);

// Calcolo del biglietto 


// Prezzo del biglietto
const price = 0.21;

// Sconto minorenni
const minDiscount = 20;

// Sconto maggiorenni
const maxDiscount = 40;

// Funzione per calcolare il prezzo del biglietto

button.addEventListener('click', () => {
    // Recupero del valore Km
    let kilometers = distance.value.trim();
    console.log(kilometers);

    // Recupero del valore età
    let old = age.value.trim();
    console.log(old);

    // Calcolo prezzo x chilometri
    let sum = price * kilometers

    // Calcolo somma x lo sconto 'minori'
    let firstDiscount = sum * minDiscount / 100;
    console.log(firstDiscount);

    // Calcolo somma x lo sconto 'over 65'
    let secondDiscount = sum * maxDiscount / 100;

    // If statement per calcolare il prezzo finale 

    if (old < 18) {
        console.log(sum - firstDiscount);
    } else if (old > 65) {
        console.log(sum - secondDiscount);
    } else {
        console.log(sum);
    }
})