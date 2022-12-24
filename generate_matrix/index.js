const execute = (n, m) => {

    if (n === m) {
        m === n
    }

    let k = 1
    const result = []
    //construct a matrix

    for (let i = 0; i < n; i++) {
        let temp = []
        for (let j = 0; j < m; j++) {
            temp.push(k)
            k++
        }
        result.push(temp)
    }

    return result
}

exports.execute = execute