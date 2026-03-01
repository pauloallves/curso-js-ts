//            0123456789
const nome = 'Paulo Henrique'
console.log(nome[0]);
//                0        1       2
const alunos = ['Luiz', 'Maria', 'Paulo'];
console.log(alunos[1]);

//alunos[0] = 'Eduardo'; Altera elemento no Array
console.log(alunos)

alunos[3] = 'Luiza';  // Adiciona o elemento no final do Array
console.log(alunos);

console.log(alunos.length);

//alunos[alunos.length] = 'Eduardo';  //Adiciona o elemento no final do Array
//alunos[alunos.length] = 'Otávio';
//alunos[alunos.length] = 'Alessandra';
alunos.push('Fábio');      //Adiciona o elemento no final do Array
alunos.push('Henrique'); //Adiciona o elemento no final do Array
console.log(alunos.length);

alunos.unshift('Alice'); //Adiciona o elemento no começo do Array
alunos.unshift('Ayla'); //Adiciona o elemento no começo do Array
console.log(alunos);
console.log(alunos.length);

//Removendo elementos do final Array
alunos.pop();
console.log(alunos);
console.log(alunos.length);

//Removendo elementos do início Array e salvado em uma váriável
const removido = alunos.shift();
console.log(alunos);
console.log(alunos.length);
console.log(removido);

//Apagando elemento do meu Array sem alterar meus indices 
delete alunos[5];
console.log(alunos);

//Acesssando indice que não existe
console.log(alunos[50]);

//Adicionando elemento no meu indice vazio do Array
alunos[5] = 'Ayla';
console.log(alunos);
console.log(alunos.length);

//Fatiando exibição de forma positiva
console.log(alunos.slice(0, 3));

//Fatiando exibição de forma negativa
console.log(alunos.slice(0, -1));

//Verificando o tipo do meu Array
console.log(typeof alunos);
console.log(alunos instanceof Array); //Se retornar true ele é um Array