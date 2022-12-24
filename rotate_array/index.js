const revNums = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
}

const execute = () => {
    console.clear()
    let nums = [1, 2, 3, 4, 5, 6, 7]

    let k = 3
    k = k % nums.length
    nums.reverse()
    revNums(nums, 0, k - 1)
    // revNums(nums, k, nums.length - 1)

}

exports.execute = execute