let edad = parseInt(prompt("Introduza sua idade")); 
if(isNaN(edad)){
    console.log("nao é um número");
    }
    else {
        if(edad>18){ 
            console.log("É maior de idade"); 
            }else{ 
            console.log("É menor de idade"); 
        }
    }