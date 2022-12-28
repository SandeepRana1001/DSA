const execute = () => {

    let nums = [3, 7, 4, 2, 5, 7, 5]
    // let nums = [3, 2, 1]
    let n = nums.length
    // nums.sort((a, b) => a - b)
    let ans = 0;

    for (let i = 1; i < n - 1; ++i) {
        let max1 = 0, max2 = 0;

        // find maximum value(less than nums[i])
        // from 0 to i-1
        for (let j = 0; j < i; j++)
            if (nums[j] < nums[i])
                max1 = Math.max(max1, nums[j]);

        // find maximum value(greater than nums[i])
        // from i+1 to n-1
        for (let j = i + 1; j < n; j++)
            if (nums[j] > nums[i])
                max2 = Math.max(max2, nums[j]);

        // store maximum answer
        if (max1 && max2)
            ans = Math.max(ans, max1 + nums[i] + max2);
        // console.log(`For i=1 ${nums[i]} \n Max1 = ${max1} and Max2 = ${max2}   `)
    }


    console.log(ans)

}

exports.execute = execute