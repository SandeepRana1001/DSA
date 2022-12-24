const execute = () => {
    const nums = [2, 7, 11, 15], target = 9

    let start = 0, end = nums.length - 1, sum = 0

    while (start < end) {
        sum = nums[start] + nums[end]

        if (sum > target) {
            end--
        } else if (sum < target) {
            start++
        } else {
            console.log(`Start = ${start + 1}  End = ${end + 1}`)
            break
        }
    }


}

exports.execute = execute