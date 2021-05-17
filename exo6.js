var readline = require("readline-sync");

cpt = readline.questionInt ("entrez un numero entre 1 et 5 : " );


while ( cpt >=1 && cpt <=5) // 1 <= saisie <=5
 {
         cpt = readline.questionInt ("entrez un numero entre 1 et 5 : " );
} 
        console.log( "vous avez saisi : " + cpt);
        


