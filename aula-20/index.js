/**
 * Tipos de Dados Primitivos (imutáveis) - String, Number,Boolean
 * Undefined, Null, (Bigint, Symbol)
 * 
 * Tipo de dados passados por referência (mutável) -  Array, Object, function
 */

//let a = [1,2,3];
//let b = a;
//console.log(a, b);

//a.push(4);
//console.log(a, b);

const a = {
    nome: 'Paulo',
    sobrenome:  'Henrique'
};
const b = {...a};
a.nome='Pedro';
console.log(a);
console.log(b);
