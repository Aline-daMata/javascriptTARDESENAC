// // While - enquanto

let pratossujos = 5;

while (pratossujos > 0) {

    console.log('Lavando um prato... Pratos restantes: ', pratossujos);

//     // Decrementando a variavel + '--' = vai dimnuindo 
//     // ex: pratossujos--; Vai aparecer no node watch os numeros diminuindo
//     //     Lavando um prato... Pratos restantes:  5
//     // Lavando um prato... Pratos restantes:  4
//     // Lavando um prato... Pratos restantes:  3
//     // Lavando um prato... Pratos restantes:  2
//     // Lavando um prato... Pratos restantes:  1
    pratossujos--;
}

console.log('Todos os pratos estão limpos!');

// // Do While - faça enquanto isso...
let pratoslimpos = 0;

do {
//incrementar = ++ 
    pratoslimpos++;
    console.log('Lavando Pratos', pratoslimpos);
} while(pratoslimpos < 5);

console.log('Todos os pratos foram limpos!');

// for - quantas vezes repetir - 
// no caso do exemplo: até 5
for (let i=1; i <= 5; i++){
    console.log('Execução loop for ' + i);
}

// For each - para cada um - "Foreach" percorre cada item 
// da array/coleção/lista;
const pratos = ["P01", "P02", "P03"];
pratos.forEach(pratos => {
    console.log('lavando ' + pratos);
});

