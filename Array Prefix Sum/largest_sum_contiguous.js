const execute = () => {
    const str = '-2 -3 4 -1 -2 1 5 -3'
    // const str = '-1000000000 -1000000000'
    const arr = str.split(' ').map((element) => parseInt(element))
    let n = arr.length
    let currSum = 0
    let max = Number.NEGATIVE_INFINITY

    for (let i = 0; i < n; i++) {
        currSum += arr[i]
        if (currSum < 0) {
            max = Math.max(currSum, max)
            currSum = 0
        } else {
            max = Math.max(currSum, max)
        }
    }

    return max
}

exports.execute = execute