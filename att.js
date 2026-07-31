

const nomeCompleto = "Ellen";
const cargo = prompt("Digite seu cargo ou função:");
const empresaOuEscola = prompt("Digite sua empresa ou escola:");
const email = prompt("Digite seu e-mail:");

const nomeMaiusculo = nomeCompleto.toUpperCase();

const cartaoVisita = `
========================================
    CARTÃO DE VISITA DIGITAL - ${nomeMaiusculo}
========================================
Nome:    ${nomeMaiusculo}
Cargo:   ${cargo}
Empresa: ${empresaOuEscola}
E-mail:  ${email}
========================================
`;

console.log(cartaoVisita);

alert(`Cartão de visita de ${nomeCompleto} gerado com sucesso! Verifique o console.`);

alert("Olá, Ellen! Vamos calcular o desconto do seu produto.");

const nomeProduto = prompt("Digite o nome do produto:");
const precoOriginal = parseFloat(prompt("Digite o preço original do produto (ex: 100.00):"));
const percentualDesconto = parseFloat(prompt("Digite o percentual de desconto (%):"));

const valorDesconto = precoOriginal * (percentualDesconto / 100);
const precoFinal = precoOriginal - valorDesconto;

const formatadorMoeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const precoOriginalFormatado = formatadorMoeda.format(precoOriginal);
const valorDescontoFormatado = formatadorMoeda.format(valorDesconto);
const precoFinalFormatado = formatadorMoeda.format(precoFinal);

const resultado = `
RESUMO DA SUA COMPRA
Produto: ${nomeProduto}
Preço Original: ${precoOriginalFormatado}
Desconto (${percentualDesconto}%): ${valorDescontoFormatado}
Preço Final: ${precoFinalFormatado}
`;

console.log(resultado);
alert(resultado);

alert("Olá, Ellen! Vamos analisar a segurança da sua senha.");
[
]
const senha = prompt("Ellen, digite a senha que deseja verificar:");

const tamanho = senha.length;
const temMaiuscula = /[A-Z]/.test(senha);
const temMinuscula = /[a-z]/.test(senha);

let classificacao = "Fraca";

if (tamanho >= 8 && temMaiuscula && temMinuscula) {
    classificacao = "Forte";
}
const analiseConsole = `
--- ANÁLISE DE SEGURANÇA DA SENHA (USUÁRIA: ELLEN) ---
Tamanho: ${tamanho} caracteres
Possui maiúscula: ${temMaiuscula ? "Sim" : "Não"}
Possui minúscula: ${temMinuscula ? "Sim" : "Não"}
Classificação: Senha ${classificacao}
======================================================
`;

console.log(analiseConsole);
alert(`Ellen, a senha informada é considerada: ${classificacao.toUpperCase()}`);
