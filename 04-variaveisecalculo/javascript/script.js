function saudarCliente(){
    const nome = document.getElementById("nome").value;
    const elementoMensagem = document.getElementById("mensagem-boas-vindas");
 
    if (nome.trim() !== "") {
    // Interpolação de string usando Template Literals
    elementoMensagem.textContent = `Olá, ${nome}! Seja bem-vindo(a).`;
    } else {
        elementoMensagem.textContent = "Por favor, digite um nome válido.";
    }
}
 
function calcular() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const divResultados = document.getElementById("resultados");
 
  // Operações matemáticas
  const soma = n1 + n2;
  const subtracao = n1 - n2;
  const multiplicacao = n1 * n2;
  const divisao = n2 !== 0 ? (n1 / n2).toFixed(2) : "Divisão por zero não é permitida"
  
  // Exibição dos resultados com interpolação
  
  divResultados.innerHTML = `
  <p><strong>Soma:</strong> ${n1} + ${n2} = ${soma}</p>
  <p><strong>Subtração:</strong> ${n1} - ${n2} = ${subtracao}</p>
  <p><strong>Multiplicação:</strong> ${n1} * ${n2} = ${multiplicacao}</p>
  <p><strong>Divisão:</strong> ${n1} ÷ ${n2} = ${divisao}</p>
  `;
  
};

// * opção 2 para criar resultados com interpolação
// const operacoes = [
//   { nome: "Soma", simbolo: "+", valor: soma },
//   { nome: "Subtração", simbolo: "-", valor: subtracao },
//   { nome: "Multiplicação", simbolo: "×", valor: multiplicacao },
//   { nome: "Divisão", simbolo: "÷", valor: divisao }
// ];

// divResultados.innerHTML = operacoes.map(op => 
//   `<p><strong>${op.nome}:</strong> ${n1} ${op.simbolo} ${n2} = ${op.valor}</p>`
// ).join('');