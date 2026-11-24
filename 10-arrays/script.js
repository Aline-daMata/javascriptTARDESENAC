// Array - Coleção/lista de itens da mesma classe
// Index - posição do elemnto na array
// EX: 
// let frutas = ["maçã", "banana", "uva"];
// maça posição 0; banana posição 1; uva posição 2
// for (let i = 0; i<frutas.lenght; i++){
// console.log("indice " + i + ": " + frutas[i]);
// }
//  POP - REMOÇÃO ULTIMO ELEMENTO
//  SHIFT - REMOVE PRIMEIRO ELEMENTO
//  UNSHIFT - ADICIONA ELEMENTO EM PRIMEIRO LUGAR 

const nomes = ["João", " Maria", " José"];

console.log(nomes);

// Para selecionar apenas um:
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);

// undefined - posição não existente no array
console.log(nomes[3]);

// elemento com array

nomes.push('Beatriz');
console.log(nomes[3]);

//remoção ultimo elemento
nomes.pop();
console.log('Beatriz foi removida! Os nomes são: ' + nomes);

// alterar elemento
nomes[0] = 'João Pedro';
console.log(nomes);

// concatenar dois arrays
const numeros = [6, 7, 8];
console.log(numeros.length);

const numeros2 = [3, 9, 2];
const juncao = numeros.concat(numeros2);
console.log(juncao);

// removendo primeiro elemento
const nomes2 = ['Joaquina', ' Felipe', ' Plinio'];
const primnome = nomes2.shift();
console.log(nomes2);

//Adicionar um ou mais elementos no início do array
const numerosTeste = [1, 2, 3];

numerosTeste.unshift(0);
console.log(numerosTeste);

//Encontrar a primeira ocorrência do elemento especificado
const frutas = ["maçã", "banana", "manga", "abacaxi"];

console.log(frutas.indexOf("maçã"));
console.log(frutas.indexOf("laranja")); // aparecerá como -1 no console pq não existe

//Encontrar a última ocorrência do elemento especificado
const letras = ["a", "b", "c", "a", "d"];
console.log(letras.lastIndexOf("a"));

//Verifica se um elemento está presente no array
const frutasDona = ["maçã", "banana", "laranja"];

const temMaca = frutasDona.includes("maçã");
const temMelancia = frutasDona.includes("melancia");
console.log(temMaca);
console.log(temMelancia);

// REVERTENDO ARRAY
const testRev = [1, 2, 3, 4, 5];
console.log(testRev);
testRev.reverse();
console.log(testRev);
