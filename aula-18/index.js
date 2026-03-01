function saudacao(nome){
    //console.log(`Bom dia! ${nome}!`);
    return `Bom dia! ${nome}!`;
}

//saudacao('Paulo');
const variavel = saudacao('Alice');
console.log(variavel);

function soma (x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 3));
console.log(soma(2, 12));
console.log(soma(10, 16));

const resultado = soma(12, 12);
console.log(resultado);

//Função anônima
const raiz =  function(n){
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(16));

//Arrow Function
const raizQ = n => n ** 0.5;
console.log(raizQ(81));