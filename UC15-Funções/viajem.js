function verificarViagem(passagem, hospedagem, alimentacao, passeios) {
    const total = passagem + hospedagem + alimentacao + passeios;
    const limite = 2.000;

    console.log("Custo total da viagem: R$ " + total);

    if (total <= 2.000) {
        console.log("A viagem cabe no orçamento!");
    } else {
        console.log("A viagem passou do orçamento!");
    }
}

verificarViagem(500, 600, 300, 400); 
verificarViagem(800, 700, 400, 300); 