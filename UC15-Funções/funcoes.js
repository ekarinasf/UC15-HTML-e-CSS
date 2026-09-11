console.log("Olá, Luiz! Seja bem-vindo!")
console.log("Olá, Gustavo! Seja bem-vindo!")
console.log("Olá, Cecília! Seja bem-vinda!")

function darBoasVindas (nome){
    console.log(`Olá, ${nome}! Seja bem-vindo!`);
}

darBoasVindas("Luiz");
darBoasVindas("Gustavo");
darBoasVindas("Cecília");

function apresentar (nome, idade){
    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
}


apresentar("Gaby",24)

function voceEstudando (nome){
    console.log(`Olá ${nome}! Você está estudando!`);
}

voceEstudando("Ellen");

function somar (a,b){
    return a + b;
}

somar(5,3)

//outras formas--- 

let resultado = somar (5, 3)
console.log(resultado);


function verificarAprovacao(nota1, nota2) {
  const media = (nota1 + nota2) / 2;

  if (media > 6) {
    return `Media: ${media} - Aprovado`;
  } else {
    return `Media: ${media} - Reprovado`;
  }
}

console.log(verificarAprovacao(7, 8)); 
console.log(verificarAprovacao(5, 6)); 

function calcularMedia(nota1, nota2){
  return (nota1 + nota2) / 2;
}

let nome = prompt("Digite o nome do aluno:");
let nota1 = Number (prompt("Digite a primeira nota"));
let nota2 = Number (prompt("Digite a segunda nota"));

let media1 = calcularMedia (nota1, nota2);

console.log(`${nome} ficou com média ${media1}`);

if (media1 >= 6) {
  console.log(`${nome} está aprovado!`);
} else {
  console.log(`${nome} está reprovado!`);
}


calcularMedia(nota1, nota2);