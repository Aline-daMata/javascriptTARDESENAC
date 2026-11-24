//CONDICIONAIS: "IF"  
const idade = 19;

if (idade >= 18) {
    console.log("Bem vindo à área VIP!");
}

//elseif (duas condições)
let idade3 = 15;

if(idade3 >= 18){    
    console.log("Bem vindo à área VIP!");
} else if (idade3 >= 13 && idade3 <= 17) {
    console.log("Bem vindo à área TEEN!");
} else {
    console.log("Bem vindo à área KIDS!");
}

let idadeNova = 16;

//else: caso if não funcione/seja verdadeiro

if (idadeNova >= 18) {
    console.log("Bem vindo à área VIP!");
} else {
    console.log("Bem vindo à área KIDS!");
}

//SWITCH: opções variadas + opção indefinida
let opcao = "Pizza";

switch(opcao) {

    case "Pizza":
        console.log("Pizza à caminho!");
        break;
    case "Sushi":
        console.log("Sushi fresquinho!");
        break;  
    case "Hambúguer":
        console.log("Hambúrguer suculento!");
        break;    
    default:
        console.log("Escolha inválida!");    
} 
let opcao2 = "Hot-dog";

switch(opcao2) {

    case "Pizza":
        console.log("Pizza à caminho!");
        break;
    case "Sushi":
        console.log("Sushi fresquinho!");
        break;  
    case "Hambúguer":
        console.log("Hambúrguer suculento!");
        break;    
    default:
        console.log("Escolha inválida!");    
} 
