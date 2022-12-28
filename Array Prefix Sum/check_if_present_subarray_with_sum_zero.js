const execute = () => {

    // const str = '4 2 -2 5'
    // const str = '3 2 -1'
    const str = '1 -1'
    // const str = '-1000000000 -1000000000'
    const arr = str.split(' ').map((element) => parseInt(element))
    let n = arr.length
    let prefix_sum = 0, obj = {}

    for (let i = 0; i <= n - 1; i++) {
        prefix_sum += arr[i]
        if (arr[i] === 0 || prefix_sum === 0 || obj[prefix_sum]) {
            return 'Yes'
        }
        obj[prefix_sum] = 1
    }

    return 'No'
}

exports.execute = execute