/* ESERCIZIO 1
 Scrivi un algoritmo per trolete il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10;
let num2 = 20;

let max = (num1 > num2) ? num1 : num2;

console.log(max);


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const givenNumber = 10;

if (givenNumber !== 5) {
  console.log("not equal");
}
else{
  console.log("equal");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const isDivisibleNumber = 15; 

if (isDivisibleNumber % 5 === 0) {
    console.log("divisibile per 5");
}
else{
  console.log("non è perfettamente divisibile");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 5; 
let n2 = 3; 

let sum = n1 + n2;
let difference = Math.abs(n1 - n2);

let result = (n1 === 8 || n2 === 8 || sum === 8 || difference === 8);

console.log(result);


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una letiabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 40;

let shippingCost = totalShoppingCart > 50 ? 0 : 10;
let totalAmountToCharge = totalShoppingCart + shippingCost;

console.log(totalAmountToCharge);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = 70;

const blackFridayDiscount = totalShoppingCart * 0.2; 
totalShoppingCart -= blackFridayDiscount; 

shippingCost = totalShoppingCart > 50 ? 0 : 10;
totalAmountToCharge = totalShoppingCart + shippingCost;

console.log(totalAmountToCharge);


/* ESERCIZIO 7
  Crea tre letiabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let item1 = 25;
let item2 = 30;
let item3 = 20;

if (item1 < item2) {
    [item1, item2] = [item2, item1]; //non l'abbiamo fatto nel corso, ma sono abituato a fare così. "destructuring assignment"
}
if (item2 < item3) {
    [item2, item3] = [item3, item2];
}
if (item1 < item2) {
    [item1, item2] = [item2, item1];
}

console.log(item1 + ' '+ item2 + ' '+ item3);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valueToCheck = 42; 

if (typeof valueToCheck === "number") {
    console.log("il valore è un numero.");
} else {
    console.log("il valore non è un numero.");
}




/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
number = 7; //non so più che nome dare alle letiabili quindi ri-uso quelle di prima

if (number % 2 === 0) {
    console.log("il numero è pari");
} else {
    console.log("il numero è dispari");
}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto';

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);
console.log(arr)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr[arr.length - 1] = 100;
console.log(arr)

