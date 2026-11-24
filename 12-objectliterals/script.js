// OBJECT LITERALS: TIPO BANCO DE DADOS, COM KEYS
// DADOS DE TIPOS DIFERENTES 
// EX: DADOS PESSOAIS (NOME, EMAIL, NUMERO, IDADE, ETC) 

const obj = {
    nome: 'joão',
    idade: 30,
    fav: 'tiramisu'
};

console.log(obj);
console.log(typeof obj);
// aceesar só um elemento
console.log(obj.nome);

// remover propriedade
delete obj.idade;
console.log(obj);

// adc uma propriedade
obj.sobrenome = 'nascimento';
console.log(obj);

// mutação propriedade
obj.sobrenome = "do nascimento miguel";
console.log(obj);

// assign - FUSÃO DADOS
const obj1 = {
    nome:'Aline',
    idade:'26'
}
const obj2 = {
    altura: 1.72,
    gênero: 'Feminino'
};

const objdestino = {};
// 'O' de Object sempre maiusculo!
Object.assign(objdestino, obj1, obj2);
console.log(objdestino);

// KEYS - NOME/TIPO DOS DADOS
const chaves = Object.keys(objdestino);
console.log(chaves);

