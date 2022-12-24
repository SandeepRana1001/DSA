const generateMatrix = require('../generate_matrix/index')

const execute = () => {

    const matrix = generateMatrix.execute(3, 3)

    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
    const size = matrix.length * matrix[0].length
    const result = []
    const new_result = []

    while (result.length < size) {

        // left to right

        for (let i = left; i <= right && result.length < size; i++) {
            result.push(matrix[top][i])
        }
        top++

        // bottom to top

        for (let i = top; i <= bottom && result.length < size; i++) {
            result.push(matrix[i][right])
        }
        right--

        // right to left

        for (let i = right; i >= left && result.length < size; i--) {
            result.push(matrix[bottom][i])
        }
        bottom--

        // bottom to top

        for (let i = bottom; i >= top && result.length < size; i--) {
            result.push(matrix[i][left])
        }
        left++


    }

    console.log(result)


}

exports.execute = execute