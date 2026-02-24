// Strings São indexadas

//let umaString = "Um \"texto\"";
//let umaString = "Um \\texto";
//let umaString = "Um texto";

let umaString = "O rato roeu a roupa do rei de roma.";

//console.log(umaString[5]);

//console.log(umaString.charAt(6));

//console.log(umaString.concat(' em', ' um', ' ', 'lindo dia.'));

//console.log(umaString.concat(' em um lindo dia.'));

//console.log(`${umaString} em um lindo dia.`);

//Em qual indixe inicia a palavra texto
//console.log(umaString.indexOf('texto'));

//console.log(umaString.indexOf('o', 3));

//console.log(umaString.lastIndexOf('m', 3));


//Expressão regulares
console.log(umaString.match(/[A-Z]/g));

console.log(umaString.match(/[a-z]/g));

console.log(umaString.search(/x/));

//console.log(umaString.replace('Um', 'Outro'));

console.log(umaString.replace(/r/, '#'));

console.log(umaString.replace(/r/g, '#'));

console.log(umaString.length);

console.log(umaString.slice(2, 6));

//console.log(umaString.length -3);
console.log(umaString.slice(-5));

console.log(umaString.slice(-5, umaString.length -1));
console.log(umaString.slice(-5, -1));

console.log(umaString.substring(umaString.length -5, umaString.length -1));

console.log(umaString.split(' '));

console.log(umaString.split('r'));

console.log(umaString.split(' ', 3));

console.log(umaString.toLocaleUpperCase());

console.log(umaString.toLocaleLowerCase());