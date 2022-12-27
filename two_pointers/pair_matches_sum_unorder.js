const execute = () => {

    const nums = [2, 4, 5, 9, 8], target = 7
    const ans = []
    let map = new Map()
    let diff, k = 0

    for (let val of nums) {
        diff = target - val

        if (map.has(val)) {
            ans[0] = map.get(val)
            ans[1] = k
            break
        } else {
            map.set(diff, k)
        }
        k++
    }

    console.log(map)
    console.log(ans)

}

exports.execute = execute