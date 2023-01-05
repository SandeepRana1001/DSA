const execute = () => {
    let str = '-1 0 1 2 -1 -4'
    let arr = str.split(' ').map((val) => parseInt(val))
    let n = arr.length, nums = []

    //Step I : Sort the array
    arr.sort((a, b) => a - b)

    const set = new Set()

    for (let i = 0; i < n - 2; i++) {
        let start = i + 1, end = n - 1
        while (start < end) {
            let diff = arr[i] + arr[start] + arr[end]

            if (diff === 0) {
                let str = [arr[i], arr[start], arr[end]].toString()
                if (!nums.includes(str))
                    nums.push(str)
                start++
                end--
            } else if (diff > 0) {
                end--
            } else if (diff < 0) {
                start++
            }
        }
    }

    // const nums = [...set]
    //convert back to array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i].split(',').map((val) => parseInt(val))
    }
    console.log(nums)
}

exports.execute = execute
