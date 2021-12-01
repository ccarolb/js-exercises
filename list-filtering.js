function filter_list(l) {
    l = l.map((item) => {
        if (typeof item === "number") { return item }
    }).filter(item => item !== undefined)
    return l
}
