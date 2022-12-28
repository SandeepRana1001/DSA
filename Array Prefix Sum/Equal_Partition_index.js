const reduceMethod = (arr) => {
    return arr.reduce((acc, curr) => {
        return acc + curr
    }, 0)
}
const execute = () => {
    // const arr = [1, 4, 2, 5]
    const arr = [-2, - 3, 4, - 1, - 2, 1, 5, - 3]
    const n = arr.length
    let res = -1, prefix = [], leftSum = 0

    for (let i = 0; i <= n - 1; i++) {

        prefix[i] = arr[i] + leftSum
        leftSum = prefix[i]
    }
    console.log(prefix)
    // [2, 5, 9, 10, 14, 19]

    leftSum = 0
    for (let i = 0; i < n; i++) {
        let rightSum = prefix[n - 1] - prefix[i]
        if (i !== 0) {
            leftSum = prefix[i - 1]
        }

        if (leftSum === rightSum)
            return i

    }
    return -1
}

exports.execute = execute