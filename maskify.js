// return masked string
function maskify(cc) {

    //retorna uma nova string com os 4 últimos caracteres da original
    let masking = cc.slice(-4)
    //completa a string com o caractere do segundo parametro até atingir o tamanho designado no primeiro parametro
    let masked = masking.padStart(cc.length, "#")
    return masked
}

console.log(maskify("minhasenhamuitosecreta"))