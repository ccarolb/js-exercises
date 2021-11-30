// return masked string
function maskify(cc) {
    let masked = cc.slice(-4).padStart(cc.length, "#")
    return masked
}

console.log(maskify("minhasenhamuitosecreta"))