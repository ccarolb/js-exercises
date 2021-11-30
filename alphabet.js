function alphabetPosition(text) {

    const alphabet = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"][0].split(", ")

    text = text.toLowerCase().split("")

    const letterVerify = text.map((textLetter) => {
        if (alphabet.includes(textLetter)) {
            let letterPosition = alphabet.indexOf(textLetter) + 1
            return letterPosition
        }
    }).filter((index) => index)

    return letterVerify.join(" ").toString()
}
