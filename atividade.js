let nomeCliente = "Maria";
let valorCompra = 650;
let clienteVip = false;

let desconto;


// Verifica desconto
if (clienteVip == true) {
    desconto = 20;
}
else if (valorCompra >= 500) {
    desconto = 15;
}
else if (valorCompra >= 200) {
    desconto = 10;
}
else {
    desconto = 0;
}


// Cálculos
let valorDesconto = valorCompra * (desconto / 100);
let valorFinal = valorCompra - valorDesconto;


// Frete
let frete;

if (valorFinal > 1000) {
    frete = "Parabéns! Você ganhou frete grátis.";
}
else {
    frete = "Frete será cobrado normalmente.";
}


// Resultado
let resultado = `
RESULTADO DA COMPRA

Nome: ${nomeCliente}

Valor da compra: R$ ${valorCompra.toFixed(2)}

Desconto: ${desconto}%

Valor do desconto: R$ ${valorDesconto.toFixed(2)}

Valor final: R$ ${valorFinal.toFixed(2)}

${frete}
`;

alert(resultado);