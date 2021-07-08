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



// recupero elementi input

var username = document.getElementById('name');
var kms = document.getElementById('Kilometers');
var userAge = document.getElementById('Age');


// recupero id buttons

var generateButton = document.getElementById('generate-button');
var cancelButton = document.getElementById('cancel-button');

// recupero elementi ticket section

var ticketSection = document.getElementById('ticket-section');
var passengerName = document.getElementById('passenger-name');
var discount = document.getElementById('discount');
var vagon = document.getElementById('vagon');
var finalPrice = document.getElementById('final-price');
var trainCode = document.getElementById('train-code');


// prezzo km

var price = 0.21;

// creazione evento 
generateButton.addEventListener('click', function () {

    // recupero value utente
    var userNameCompilate = username.value;
    var kmsCompilate = kms.value;
    var userageCompilate = userAge.value;

    // prezzobiglietto
    var ticketPrice = price * kms.value;
    console.log(ticketPrice);

    if (userageCompilate === 'Minorenne') {
        ticketPrice *= 0.8;
        discount.innerText = 'Sconto minori';

    } else if (userageCompilate === 'over-65') {
        ticketPrice *= 0.6;
        discount.innerText = 'Sconto over 65';
    } else {
        discount.innerText = 'Tariffa Ordinaria';
    }

    // randomizzare numero carrozza

    vagonNumber = Math.floor(Math.random() * 12) + 1;

    //inserimento dei valori recuperati negli appositi campi
    passengerName.innerText = userNameCompilate;
    finalPrice.innerText = ticketPrice.toFixed(2) + ' Euro';
    vagon.innerText = vagonNumber;
    trainCode.innerText = '12675';

    // comparsa della sezione ticket
    ticketSection.classList.remove('hidden');
})