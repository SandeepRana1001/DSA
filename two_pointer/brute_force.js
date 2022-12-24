const execute = (nums, target) => {

    let start = 0, end = 0, counter = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {

            let sum = nums[i] + nums[j]

            if (sum == target && i != j) {
                counter = 1
                start = i
                end = j
                break
            }

        }
        if (counter == 1) {
            break
        }
    }


    console.log(`Start  = ${start} End = ${end}`)
    console.log(`I = ${i}  J = ${j}`)

}

exports.execute = execute