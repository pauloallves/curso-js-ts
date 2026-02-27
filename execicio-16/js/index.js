const numero = Number(prompt('Digite um numero: '));
//numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p\>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p\>O número ${numero} é um iteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p\>O número ${numero} é um NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p\>Seu número ${numero} arendondado para baixo é: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p\>Seu número ${numero} arendondado para cima é: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p\>Seu número ${numero} com duas casas decimais é: ${numero.toFixed(2)}</p>`;