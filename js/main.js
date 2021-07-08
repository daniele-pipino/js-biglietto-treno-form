/*il prezzo del biglietto è definito in base ai km (0.21 € al km) 
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
Cosa stampare sul biglietto:
Nome passeggero
Codice treno (inseriamo una stringa a caso, per ora)
Numero carrozza (randomizziamo una carrozza da 1 a 12)
Prezzo (stampato con due decimali)
Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65) */

// 1- recuperare tutti gli elementi dall'html
// 2- creare la funzione dei bottoni
// 3- recuperare i value inseriti dall'utente
// 4- calcolare il prezzo del biglietto
// 5- inserire i value nei loro rispettivi posti



// recupero elementi html

var username = document.getElementById('name');
var kms = document.getElementById('Kilometres');
var userage = document.getElementById('Age');

// recupero id buttons

var generateButton = document.getElementById('generate-button');
var cancelbutton = document.getElementById('cancel-button');

// prezzo km

var price = 0.21;

// creazione evento 

generateButton.addEventListener('click', function () {

    // recupero value utente
    var userName = username.value;
    console.log(userName)

})