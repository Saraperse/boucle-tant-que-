var readline = require("readline-sync");
var saisie = readline.questionInt("saisissez votre chiffre entre 1 et 3: " );

if(saisie == 1){
    console.log("Bonjour");

          } else if (saisie == 2){
    console.log("Salut");

          } else if (saisie == 3) {
    console.log("Coucou");

}else {
    console.log("Cas non pris en compte"); 
}
