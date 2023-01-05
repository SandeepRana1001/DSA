const execute = () => {

    const nums = [10, 5, 2, 7, 1, 9]
    let N = nums.length
    let K = 15, map = new Map(), prefix = 0, len = 0
    map.set(0, -1)

    // get prefix obj
    for (let i = 0; i < N; i++) {
        prefix += nums[i]

        if (!map.has(prefix))
            map.set(prefix, i)

        let diff = prefix - K

        if (diff === 0 || map.has(diff)) {
            len = Math.max(len, i - map.get(diff))
        }
    }


    console.log(len)

}

exports.execute = execute