function alphabetPosition(text) {

    let alphabet = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"]

    //separa as letras do alfabeto em um array de 26 elementos
    let correctAlphabet = (alphabet[0].split(", "))

    //transforma as letras do texto em minúsculas para fins de comparação e separa cada letra do texto em um array
    let correctText = text.toLowerCase().split("")

    //mapeia todas as letras do correctText, verifica se o correctAlphabet inclui as letras do correctText. Se incluir, retorna a posição da letra no alfabeto + 1, e filtra a array nova feita com o map, escondendo os elementos undefined (como espaço e aspas)
    let letterVerify = correctText.map((letraTexto) => {
        if (correctAlphabet.includes(letraTexto)) {
            let letterPosition = correctAlphabet.indexOf(letraTexto) + 1
            return letterPosition
        }
    }).filter((indice) => indice !== undefined)

    //nos devolve o array letterVerify em forma de string, separando cada elemento por espaço.
    return letterVerify.join(" ").toString()
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
