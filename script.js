// Exercice1
5 >= 1
    // prediction true
    // resultat true
0 === 1
    // prediction False
    // resultat False
4 <= 1
    // prediction False
    // resultat False
1 != 1
    // prediction False
    // resultat False
"A" > "B"
    // prediction False
    // resultat False
"B" < "C"
    // prediction True
    // resultat true
"a" > "A"
    // prediction true
    // resultat true
"b" < "A"
    // prediction False
    // resultat False
true === false
    // prediction False
    // resultat False
true != true
    // prediction False
    // resultat False


// Exercice2
let numString = prompt("Entrer des chiffres séparés par des virgules :");
let numTable = numString.split(",");
let sum = 0;

for (let i = 0; i < numTable.length; i++) {
    sum += parseInt(numTable[i]);
}
console.log("Le resultat est " +sum);

// Exercice 3
let phrasal = prompt("Entrer ue phrase contenant le mot Nemo :");
let index = phrasal.indexOf("Nemo");
console.log((index != -1) ? "found" : "not found Nemo");

// Exercice 4
const result = "boum";
let numUser = prompt("Entrer un nombre :");
if (numUser < 2) {
    console.log(result);
} else if(numUser > 2 ) {
    if(numUser % 2 == 0 && numUser % 5 == 0) {
        console.log((result+"!").toUpperCase());
    }
    else if(numUser % 5 == 0) {
    
    }
}    