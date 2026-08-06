let nome = prompt('Qual é o seu nome?');
let nota1Str = prompt(`Olá, ${nome}! Digite a primeira nota (0 a 10):\n(use vírgula ou ponto, ex: 7,5 ou 7.5)`);
let nota2Str = prompt('Digite a segunda nota (0 a 10):');
let nota3Str = prompt('Digite a terceira nota (0 a 10):');
let nota4Str = prompt('Digite a quarta nota (0 a 10):');

let nota1 = Number(nota1Str.replace(',', '.'));
let nota2 = Number(nota2Str.replace(',', '.'));
let nota3 = Number(nota3Str.replace(',', '.'));
let nota4 = Number(nota4Str.replace(',', '.'));

let mensagem = '';
let media = (nota1 + nota2 + nota3 + nota4) / 4;
let mediaFormatada = media.toFixed(1);

function notaValida(nota) {
  return !isNaN(nota) && nota >= 0 && nota <= 10;
}

if (!notaValida(nota1) || !notaValida(nota2) || !notaValida(nota3) || !notaValida(nota4)) {
  mensagem = 'Por favor, informe quatro notas válidas entre 0 e 10.';
} else if (media < 5) {
  mensagem = `${nome}, sua média é ${mediaFormatada} e você está REPROVADO.`;
} else if (media < 7){
    
}