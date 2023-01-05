const nums = [-1, 0, 1, 2, -1, -4]
const res = []
const n = nums.length

nums.sort((a, b) => a - b)

for (let i = 0; i < n - 2; i++) {
    let start = i + 1
    let end = n - 1

    while (start < end) {
        let sum = nums[i] + nums[start] + nums[end]
        if (sum === 0) {
            let str = [nums[i], nums[start], nums[end]].toString()
            if (!res.includes(str))
                res.push(str)
            start++
            end--
        }
        else if (sum > 0)
            end--
        else if (sum < 0)
            start++
    }
}

for (let i = 0; i < res.length; i++) {
    res[i] = res[i].split(',').map((val) => parseInt(val))
}