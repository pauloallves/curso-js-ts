/*const nome01 = 'Paulo';
const sobrenome01 = 'Santos';
const idade01 = 28;

const nome02 = 'Alessandra';
const sobrenome02 = 'Santos';
const idade02 = 34;*/

//Criando um objeto literal
const pessoa1 = {
    nome: 'Paulo',
    sobrenome: 'Santos',
    idade: 28
};
console.log(pessoa1.nome);        //Acessando através de anotação de ponto
console.log(pessoa1.sobrenome);   //Acessando através de anotação de ponto
console.log(pessoa1.idade);       //Acessando através de anotação de ponto

const pessoa2 = {
    nome: 'Alessandra',
    sobrenome: 'Santos',
    idade: 28
};
console.log(pessoa2.nome);        //Acessando através de anotação de ponto
console.log(pessoa2.sobrenome);   //Acessando através de anotação de ponto
console.log(pessoa2.idade);       //Acessando através de anotação de ponto

//Função factory
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
const pessoa3 = criaPessoa('Alice', 'Santos', 3);
console.log(pessoa3.nome);

// Criando um novo objeto
const pessoa4 ={
    nome: 'Ayla',
    sobrenome: 'Santos',
    idade: '7 meses',

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },
    incrementaIdade(){
        this.idade++;
    }
};
pessoa4.fala();