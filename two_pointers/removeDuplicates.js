const execute = () => {

    const nums = [2, 2, 2, 3, 4, 4, 9], n = 7
    let i = 0, j = 0, count = 1

    for (let i = 0; i < n - 1; i++) {

        if (nums[i] === nums[i + 1]) {
            count += 1
        } else {
            count = 1
        }
        if (count > 2) {
            nums.splice(i + 1, 1)
        }
    }
    var res = {
        newLength: nums.length,
        newArray: nums
    }
    console.log(res)
}

exports.execute = execute