/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
Tem 1.8 de altura e seu IMC é de 25.925925925...
Luis Otávio nasceu em 1980
 */
const nome = 'Luis Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura)
const anoAtual = 2026;
let anoNascimento = anoAtual - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg');
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}`);
console.log('Luis Otávio nasceu em' + ' ' + anoNascimento);