const execute = () => {
    console.clear()
    nums = [0, 0, 1]
    let lastIndex = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastIndex] = nums[i]
            lastIndex++;
        }
    }

    for (let i = lastIndex; i < nums.length; i++) {
        nums[i] = 0
    }

    console.log(nums)
}

exports.execute = execute