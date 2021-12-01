const isSquare = (n) => {
    n = Math.sqrt(n)
    if (n !== parseInt(n)) {
        return false
    }
    return true;
}