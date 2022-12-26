const execute = () => {

    let nums = [3, 7, 4, 2, 5, 7, 5]
    let n = 7
    // let nums = [3, 2, 1]
    let maxA = 0, maxB = 0, maxC = 0, prev = 0, result = 0

    for (let i = 0; i < n; i++) {

        if (maxA !== nums[i] && maxB !== nums[i] && maxC !== nums[i]) {

            if (nums[i] > maxA) {
                maxC = maxB
                maxB = maxA
                maxA = nums[i]
            } else if (nums[i] > maxB) {
                maxC = maxB
                maxB = nums[i]
            } else if (nums[i] > maxC) {
                maxC = nums[i]
            }

        } else {
            continue
        }

        result = maxA + maxB + maxC
        if (result === prev) {
            result = 0
        } else {
            prev = result
        }
    }

    console.log(result)
    console.log(maxA)
    console.log(maxB)
    console.log(maxC)


}

exports.execute = execute