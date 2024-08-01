console.log('JS OK')

/*
Recupero informazioni dal dom
1. Chiediamo Il numero di kilometri all'utente.
2. Chiediamo l'età del passegero.
3. Calcoliamo il prezzo in base ai kilometri (0.21 € per km).
4. Applichiamo il 20 % per i < di 18 anni.
5. Applichiamo il 40% per i > di 65 anni.
6. Stampiamo in pagina.

Milestone 1. Implementiamo il form con i bottoni e l'output funzionante
Milestone 2. Realizziamo in pagina il form funzionante e collegato.

*/

//Recupero informazioni dal DOM
const result = document.getElementById('result');
const kmNumberField = document.querySelector('.km');
const ageNumberField = document.querySelector('.age');
const firstNameField = document.querySelector('.name');
const lastNameField = document.querySelector('.lastname');
const button = document.querySelector('button');
const paragraph = document.querySelector('p');



// GESTIONE EVENTI

button.addEventListener('click', function () {
    console.log('cliccato')
});


// 1 + 2 + recupero valore dell'output

const kmNumber = kmNumberField.value.trim();
const ageNumber = ageNumberField.value.trim();
const firstName = firstNameField.value.trim();
const lastName = lastNameField.value.trim();

button.addEventListener('click', function (){
 console.log(kmNumber , ageNumber , firstName , lastName);   
})

// 3 

const generatedPrice = kmNumber * 0.21;
console.log(generatedPrice)