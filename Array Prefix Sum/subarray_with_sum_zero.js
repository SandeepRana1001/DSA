const execute = () => {

    const str = '2 3 1 -4 0 6'
    // const str = '-1000000000 -1000000000'
    const arr = str.split(' ').map((element) => parseInt(element))
    let n = arr.length
    const sum = 0

    let curr_sum = arr[0], start = 0, i, end = 0


    // create prefix array

    for (i = 1; i <= n - 1; i++) {

        while (curr_sum > sum && start < i - 1) {
            curr_sum = curr_sum - arr[start]
            start++
        }

        if (curr_sum === sum) {
            end = i - 1
        }

        if (i < n) {
            curr_sum = curr_sum + arr[i]
        }
    }
    console.log(start)
    console.log(end)
    // return arr.splice(start, end)

}

exports.execute = execute