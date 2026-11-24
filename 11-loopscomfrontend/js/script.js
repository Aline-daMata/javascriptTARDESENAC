const input = document.getElementById("number");

input.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        calcular();
    }
});
function calcular() {
    const number = document.getElementById("number").value;
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = '';

    if (number === '') {
        resultado.innerHTML = 'Digite um número';
        return;
    }

    for (let i =1; i<=10; i++) {
        resultado.innerHTML += `${number} x ${i} = ${number * i}<br>`;
    }

}

// Criação de: const, events, DOM, if, comparação, loop for com interpolação;
// grande evolução em js hoje.