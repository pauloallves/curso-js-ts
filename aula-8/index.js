//Tipos de dados primitivos

const nome = 'Luiz'; //String
const nome1 = 'Luiz'; //String
const nome2 = 'Luiz'; //String
const num1= 10; //Number
const num2= 10.52; //Number
let nomeAluno; //undefined -> não aponta para local nenhum da memmória
const sobreNomeAluno = null; //Nulo -> não aponta para local nenhum da memmória
const boolean = true; //Boolean = true, false (lógico)

console.log(typeof sobreNomeAluno, sobreNomeAluno);

//const a = [1, 2];
//const b = a;

//console.log(a, b);

//b.push(3);
//console.log(a, b);

let a = 2;
let b = a;

console.log(a, b);

b = 3;
console.log(a, b);