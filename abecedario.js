function solucao(letra, palavras) {

    let rodadaPerdida = palavras.filter((palavra) => palavra[0] !== letra)
    console.log(rodadaPerdida.length)

}

solucao("a",
    [
        "abacaxi",
        "arroz",
        "açúcar",
        "melancia",
        "laranja"
    ])