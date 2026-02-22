/**
 * Operadores aritméticos
 * +  Adição e Concatenação
 * - Subtração
 * / Divisão
 * -> * Multiplicação
 * -> ** Potenciação 
 * -> % Resto da divisão
 *  Ordem de precendência, primeiro excuta o que est5á dentro doa (), 
 *  depois executa **, depois executa * / % e por último + e -
 * --------------------------------------------------------------------
 * Operadores de incremento
 * ++ Incrementa
 * -- Decrementa 
 * -------------------------------------------------------------------
 * Operadores de atribuição 
 * +=
 * *=
 * ------------------------------------------------------------------
 * Nan - Not a number
 * Métodos de conversão de Strings
 * parseInt (Inteiro) parseFloat(decimais)
 */

const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log( (num1 + num2) * num3);

let contador = 1;
contador++;
console.log('Contador', contador);

const passo = 2;
let contador1 = 0;
contador1 = contador1 + passo;
console.log('Contador 1', contador1);
contador1 = contador1 + passo;
console.log('Contador 1', contador1);

const passo2 = 3;
let contador2 = 0;
contador2 += passo2; // Contador = Contador + 3
contador2 += passo2; // Contador = Contador + 3
contador2 += passo2; // Contador = Contador + 3
console.log('Contador 2', contador2);

//const passo3 = 3;
let contador3 = 2;
contador3 *= 2; 
contador3 *= 2; 
contador3 *= 2;
console.log('Contador 3', contador3);