const execute = (nums, target) => {


    let mid, start = 0, end = nums.length - 1, output = -1

    while (start <= end) {

        mid = Math.floor((start + end) / 2)

        if (nums[mid] == target) {
            output = mid
            break;
        }
        else if (nums[mid] < target) start = mid + 1
        else if (nums[mid] > target) end = mid - 1
    }

    console.log(`Value Found At Index ${output}`)

}

exports.execute = execute
