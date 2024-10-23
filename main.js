// Selfwork Array 2
// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:  

// Esempio:

//         Input: a = [3, 5, 10, 2, 8]
//         Output: media = 5.6, valori minori = [3, 5, 2]


// Variante:

//       Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.



function calcola_media(array) {
    let somma = array.reduce( (acc,n)=> acc+n );
    let valore = (somma / array.length); 
    return valore.toFixed(2);
}

 

let a = [3, 5, 10, 2, 8, -34, 93, 44];
let media = calcola_media(a);

let minori   = a.filter((val) => val < media);
let maggiori = a.filter((val) => val > media);

console.log("Array: "+a);
console.log("Media: "+ media);
console.log("Elementi dell'array minori della media: "+minori);
console.log("Elementi dell'array maggiori della media: "+maggiori);
console.log(`Conteggio valori minori: ${minori.length}`);
console.log(`Conteggio valori maggiori: ${maggiori.length}`);



