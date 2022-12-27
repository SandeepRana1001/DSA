const execute = () => {

    let nums = [2, 2, 2, 3, 4, 4, 9], n = 7
    let i = 0

    for (let val of nums) {

        if (i === 0 || i === 1 || nums[i - 2] !== val) {
            nums[i] = val
            i++
        }
    }


    var res = {
        newLength: i,
        newArray: nums.splice(0, i)
    }
    console.log(res)
}

exports.execute = execute