console.log('JS OK')

// 
/* 
Bonus- (0) Recuperiamo l'elemento d'interesse dal DOM.
1. Chiediamo Il numero di kilometri all'utente.
2. Chiediamo l'età del passegero.
3. Calcoliamo il prezzo in base ai kilometri (0.21 € per km).
4. Applichiamo il 20 % per i < di 18 anni.
5. Applichiamo il 40% per i > di 65 anni.
6. Stampiamo in pagina.
Bonus Mostriamo in pagina.
*/

// Recupero l'elemento in pagina-Bonus
const result = document.getElementById('result');
console.log(result);

// 1
const kmNumber = parseInt(prompt('Quanti kilometri devi percorrere?', 50));
console.log(kmNumber);

// 2

const ageNumber = parseInt(prompt('Quanti anni ha il passeggero?', 20));
console.log(ageNumber);

// 3

const generatedPrice = kmNumber * 0.21;
console.log(generatedPrice);

// 4 // 5

let finalPrize = generatedPrice;
let advertised = '';

//Validation
if(isNaN(kmNumber) || isNaN(ageNumber)){
    alert('Elemento non riconosciuto')
} else 
    if ( ageNumber < 18){
    finalPrize *= 0.8;
    advertised = 'Complimenti, hai ottenuto il 20% di sconto con il premio Mobilità Giovani';
}
else if (ageNumber > 65){
    finalPrize *= 0.6;
    advertised = 'Complimenti, hai ottenuto il 40% di sconto con il premio Mobilità Anziani';
}

finalPrize = finalPrize.toFixed(2) + '€';
console.log(advertised);
console.log(finalPrize);

// 6

alert(`Il prezzo del tuo biglietto è ${finalPrize} ${advertised}`);