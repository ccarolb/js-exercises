function solucao(tempo, distancia) {
    let viagemMedia = (tempo * 100) + (50 * distancia)
    let viagemLonga;

    if (tempo < 5) {
        console.log(600)
    }

    if (tempo >= 5 && tempo < 60) {
        console.log(viagemMedia)
    }
    if (tempo > 60) {
        if (distancia < 100) {
            viagemLonga = distancia * 200
        } else {
            viagemLonga = distancia * 150
        }
        console.log(viagemLonga)
    }

}

solucao(100, 120)