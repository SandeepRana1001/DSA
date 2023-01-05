const execute = () => {

    const str = '1 5 1 1 6 4'

    const arr = str.split(' ').map((val) => parseInt(val))

    const n = arr.length

    for (let i = 0; i < n - 1; i++) {
        if (i % 2 === 0) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        } else {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }


    return arr

}


exports.execute = execute