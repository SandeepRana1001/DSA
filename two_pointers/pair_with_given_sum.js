const execute = () => {

    const arr = [2, 4, 5, 8, 9]

    let start = 0, end = arr.length - 1
    const target_sum = 7
    let result = false

    while (start < end) {

        let sum = arr[start] + arr[end]

        if (sum === target_sum) {
            result = true
            break
        } else if (sum < target_sum) {
            start++
        } else if (sum > target_sum) {
            end--
        }
    }

    console.log(result)

}

exports.execute = execute