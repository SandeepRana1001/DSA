const setMatrixZero = (row, col, matrix) => {

    // First Rows . Column is constant and rows are changing

    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0
    }

    // second goes column. Row is constant and columns are changing

    for (let i = 0; i < matrix[0].length; i++) {
        matrix[row][i] = 0
    }
}

const execute = () => {

    const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
    const location = []
    // get location of zero 
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                location.push([row, col])
            }
        }
    }

    // set matrix to zero based on location

    for (let addr of location) {
        let row = addr[0]
        let col = addr[1]

        setMatrixZero(row, col, matrix)
    }


    console.log(matrix)
}

exports.execute = execute