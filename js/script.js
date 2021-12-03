//chiedo all'utente i dati e
//creo 2 variabili per km ed età
//creo una costante per il costo di un km
//ed una variabile per il costo del biglietto
let km = prompt('Inserisci i km da percorrere');
let age = prompt('Inserisci la tua età');
const kmPrice = 0.21;
let ticketPrice;

//calcolo il costo del biglietto
ticketPrice= km * kmPrice;
//console.log(ticketPrice);

//se l'età è <18 calcolo il costo pieno
//scontato del 20% arrotondato a 2 decimali
if(age < 18)
    ticketPrice= Math.round((ticketPrice*0.8)*100)/100;

//se l'età è >=65 clacolo il costo pieno
//scontato del 40% arrotondato a 2 decimali
if(age > 65)
    ticketPrice= Math.round((ticketPrice*0.6)*100)/100;

//stampo il costo del biglietto
let htmlElement = document.getElementById('stamp');
htmlElement.innerHTML= `Il costo del tuo biglietto sarà: ${ticketPrice}€`;