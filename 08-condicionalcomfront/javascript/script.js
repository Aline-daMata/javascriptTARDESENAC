// comando DOM evento click
document.getElementById("btnVerificar").addEventListener("click", verificar);

//Função
function verificar() {
    // CORRIGIDO: mudado de "numero" para "number" para corresponder ao HTML
    const input = document.getElementById("number").value;
    const resultado = document.getElementById("resultado");

    // CORRIGIDO: mudado de "number" para "Number" (com N maiúsculo)
    const numero = Number(input);

    if (numero > 10) {
        resultado.innerHTML = "O número é maior que 10";
        resultado.style.color = "green";
    } else if (numero === 10) {
        resultado.innerHTML = "O número é igual que 10";
        resultado.style.color = "deeppink";
    } else {
        resultado.innerHTML = "O número é menor que 10";
        resultado.style.color = "blue";
    }
}