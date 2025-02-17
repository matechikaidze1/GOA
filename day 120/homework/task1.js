function qvenakrebi(set1, set2) {
    for (let elem of set1) {
        if (!set2.has(elem)) {
            return false
        }
    }

    return true
}
