
var readline = require("readline-sync");
var resultat = 1;

var saisie = readline.questionInt ("saisissez votre chiffre : " );
 cpt = 1;

while ( saisie > resultat) {
    cpt ++;
    resultat = cpt * resultat;
    
    console.log(cpt+ "ème passage-resultat : " + resultat);

}

