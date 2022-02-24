/*
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
*/



let pontosUs = 0
let pontosCPu = 0

while (pontosUs < 2 && pontosCPu < 2) { // operadores relacionais poderiam ser !=

    let game = parseInt(prompt(" escolha :\n 1 para tesoura\n 2 para papel\n 3 para pedra"));

    let cpu = parseInt(Math.random() * 3 + 1);

    switch (game) {

        case 1:
            if (cpu == 2) {
                pontosUs++
                console.log(" usuário : tesoura\n CPU : papel \n vitoria do usuário")
            } else if (cpu == 3) {
                pontosCPu++
                console.log(" usuário : tesoura\n CPU : pedra \n vitoria do CPU")
            } else {
                console.log(" usuário : tesoura\n CPU : tesoura \n empate")
            }
            break;
        case 2:
            if (cpu == 1) {
                pontosCPu++
                console.log(" usuário : papel\n CPU : tesoura \n vitoria do CPU")
            } else if (cpu == 3) {
                pontosUs++
                console.log(" usuário : papel\n CPU : pedra \n vitoria do usuário")
            } else {
                console.log(" usuário : papel\n CPU : papel \n empate")
            }
            break;
        case 3:
            if (cpu == 1) {
                pontosUs++
                console.log(" usuário : pedra\n CPU : tesoura \n vitoria do usuário")
            } else if (cpu == 2) {
                pontosCPu++
                console.log(" usuário : pedra\n CPU : papel \n vitoria do CPU")
            } else {
                console.log(" usuário : pedra\n CPU : pedra \n empate")
            }
            break;//break no ultimo case porque sim, tenho toque.
    }
console.log("pontos do usuário",pontosUs,"pontos do CPU", pontosCPu)// console logue dentro do while para acompanhar o placar
}

if (pontosUs > pontosCPu) {
    alert("vitoria do usuário\n"+'pontos usuario: '+pontosUs+'\n'+'pontos do cpu: '+pontosCPu)
    
}else{
    alert("vitoria do cpu\n"+'pontos usuario: '+pontosUs+'\n'+'pontos do cpu: '+pontosCPu)
}