const execute = () => {

    const n = 123
    let arr = n.toString().split('')
    const len = arr.length

    let i = 0, j = 0

    for (i = n - 1; i > 0; i--) {
        if (parseInt(arr[i]) > parseInt(arr[i - 1])) break
    }

    for (j = n - 1; j >= i; j--) {
        if (parseInt(arr[i - 1]) < parseInt(arr[j])) {
            let temp = arr[j]
            arr[j] = arr[i - 1]
            arr[i - 1] = temp
        }
    }

    arr = Number(arr.slice(0, i).concat(arr.slice(i, len).sort((a, b) => a - b)).join(''))

    return arr




}


exports.execute = execute