const execute = () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const n = 3
    const new_matrix = []

    for (let i = 0; i < n; i++) {
        let temp = []
        for (let j = n - 1; j >= 0; j--) {
            temp.push(matrix[j][i])
        }
        new_matrix.push(temp)
    }

    console.log(new_matrix)
}

exports.execute = execute