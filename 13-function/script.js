// FUNÇÕES - 
function myfun() {
    console.log('teste');
}
myfun();
myfun(); // reaproveitando função

//função na variavel
const myfunvar = function () {
    console.log('teste var');
}

myfunvar();

// funções com parametro - 
// USE CRASE SEMPRE NA INTERPOLAÇÃO "`${XXX}`"
function saudar(nome) {
    console.log(`Olá, ${nome}`);
}
saudar('Aline');

// '**'= potencia 
// (no caso 2 e 3 dá 8 porque é 2 ao cubo)
function potencia(base, expoente) {
    return base ** expoente;
}

console.log(potencia(2, 3));

//return
const a = 5;
const b = 6;

function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(a, b));

//forma 2 de fazer função 
const res = soma(a, b);
console.log(res);

//arrow function 
const raizquad = (x) => {
    return x * x;
}
console.log(raizquad(4));

//função matematica
// 1.Math.abs(x): Retorna o valor absoluto de x, 
// removendo o sinal negativo. 
// 2.Math.round(x): Arredonda x para o número 
// inteiro mais próximo. 
// 3.Math.max(x, y, ...): Retorna o maior entre zero ou 
// mais números fornecidos como parâmetros de entrada. 
// 4.Math.min(x, y, ...): Retorna o menor entre zero ou 
// mais números fornecidos como parâmetros de entrada. 
// 5.Math.sqrt(x): Retorna a raiz quadrada de x. 
// 6.Math.random(): Retorna um número decimal 
// pseudoaleatório entre 0 (inclusive) e 1 (exclusive). 
// 7.Math.PI: Retorna o valor de π (aproximadamente 3.14159). 
// Operações Aritméticas Básicas
// 1.1 Math.abs(x)
// 1.2 Math.ceil(x) e Math.floor(x)
// 1.3 Math.round(x) e Math.trunc(x)
// Funções de Exponenciação e Raiz
// 3.1 Math.pow(base, expoente)
// 3.2 Math.sqrt(x) e Math.cbrt(x)
// Logaritmos e Exponenciais
// 4.1 Math.exp(x) e Math.expm1(x)
// 4.2 Math.log(x), Math.log10(x), Math.log2(x) e Math.log1p(x)
// Trigonometria e Funções Hiperbólicas
// 5.1 Math.sin(x), Math.cos(x), e Math.tan(x)
// 5.2 Funções Hiperbólicas
// Operações com Precisão e Bitwise
// 6.1 Math.clz32(x)
// 6.2 Math.imul(x, y)
// 6.3 Math.hypot(...valores)
// Funções Aleatórias, Mínimo e Máximo
// 7.1 Math.random()
// 7.2 Math.max(...valores) e Math.min(...valores)
// Constantes Matemáticas no Objeto Math
// 8.1 Math.PI
// 8.2 Math.E
// 8.3 Math.LN10 e Math.LN2
// 8.4 Math.LOG10E e Math.LOG2E
// 8.5 Math.SQRT1_2 e Math.SQRT2
// Conclusão

// Essas funções são essenciais para realizar cálculos matemáticos em JavaScript e podem ser acessadas diretamente através do objeto Math.
let c = 2;
let d = 3;
let f = 2.7;
let h = 4;
let i = 9;
let j = 1;

console.log(Math.pow(c, d)); //potencia
console.log(Math.round(f)); //arredondar
console.log(Math.max(h, i, j)); //maximo
console.log(Math.min(h, i, j)); //minimo

