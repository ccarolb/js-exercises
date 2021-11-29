function solucao(obj) {

    if ((obj.temIngresso && obj.estaComPais) || (obj.temIngresso && obj.idade >= obj.censura)) {
        if (obj.temCarteirinha || obj.idade < 18) {
            console.log("MEIA")
        } else {
            console.log("INTEIRA")
        }
    } else {
        console.log("ACESSO NEGADO")
    }

}

solucao({
    temIngresso: true,
    idade: 19,
    temCarteirinha: true,
    censura: 18,
    estaComPais: false
})