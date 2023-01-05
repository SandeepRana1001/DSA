const execute = () => {
    let arr = [0, 1, 1, 0, 0]
    const n = arr.length

    let count = 0

    for (let i = 0; i < n; i++)
        if (arr[i] !== 0)
            arr[count++] = arr[i]


    while (count < n)
        arr[count++] = 0


    return arr

}

exports.execute = execute