/*  ESERCIZIO AULAB
Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
Primo step: eliminare gli spazi e i segni di punteggiatura:
Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

Esempio:
Input: “i topi non avevano nipoti”
Output: true    javascript semplice
*/ 


// Inserire funzione

// function primaStringa(stringa){
//     // Rimuovere gli spazi unsando un metodo .replace
//     stringa = stringa.replace(/\W/g, "");
    
//     // Per dividere ogni singolo carattere usare il metodo .split
//     // Crearsi una variabile come contenitore
//     let reverse = stringa.split('').reverse().join('');
   

//     if(stringa ==  reverse){
//        return true;
//     }
//     else{
//         return false;
//     }

// }

// console.log(primaStringa('i topi non avevano nipoti'));

// ---------------- \\

// SELFWORK ARRAY 1

let number = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];
// ORDINE CRESCENTE a-b (DECRESCENTE= b - a)   
number.sort( ( a, b ) => b - a );
console.log(number);

// ----------- \\

let numero = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

numero.sort(  (c, d ) => c -d );
console.log(numero);

