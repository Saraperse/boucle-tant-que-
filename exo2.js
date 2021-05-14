var readline = require("readline-sync");


var message = readline.question("saisir coucou : ");
while ( message !== "coucou"){
 
var message = readline.question("saisir coucou : ");   
}
///améloriation : eviter de déclarer deux fois "message"

var readline = require("readline-sync");

var message = ""; // declarer et initialiser la variable avant de l'utiliser ligne suivante
while ( message !== "coucou"){
 
var message = readline.question("saisir coucou : ");   
}

