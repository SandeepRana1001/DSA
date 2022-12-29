const execute = () => {

    const arr = [100, 200, 300, 400]
    const k = 2
    let curr_sum = 0, res = 0

    for (let i = 0; i < k; i++)
        res += arr[i]

    curr_sum = res

    for (let i = k; i < arr.length; i++) {

        curr_sum = curr_sum + arr[i] - arr[i - k]
        res = Math.max(curr_sum, res)
    }

    return res
}

exports.execute = execute