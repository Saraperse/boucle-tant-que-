var readline = require("readline-sync");



var menu = "1/ Bonjour \n";
menu += "2/ Salut \n";
menu += "3/ Coucou\n";
menu += "0 /Quitter";


console.log(menu);


var saisie = "";
while( saisie !== 0) {
    saisie = readline.questionInt("saisissez votre chiffre entre 1 et 3: " );
switch(saisie){
    case 1  : console.log("Bonjour");
    break;
    case 2  : console.log("Salut");
    break;
    case 3  : console.log("Coucou");
    break;
    case 0 : console.log("A bientot");
    break;
    default : console.log("rien compris");
}

}




  
        
    





