const generateMatrix = require('../generate_matrix/index')

const execute = (num = 3) => {

    const matrix = generateMatrix.execute(num, num)
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
    let k = 1

    while (left <= right && top <= bottom) {

        // left to right

        for (let i = left; i <= right; i++) {
            // result.push(matrix[top][i])
            matrix[top][i] = k
            k++
        }

        top++

        // bottom to top

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = k
            k++
        }

        right--

        // right to left

        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = k
            k++
        }

        bottom--

        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = k
            k++
        }

        left++
    }

    console.log(matrix)
    return matrix
}
exports.execute = execute