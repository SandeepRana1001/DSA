const execute = () => {

    let str = '0,-1,-2,1,3,4'

    let arr = str.split(',').map((element) => {
        return parseInt(element)
    })
    let array = arr.filter((element) => {
        return element > 0
    }).sort((a, b) => a - b)

    const container_set = new Set()
    let max = 0

    //populate value in set and get max

    for (let val of array) {
        container_set.add(val)
        if (max < val) max = val
    }

    let ans = 1
    do {
        if (!container_set.has(ans)) {
            break
        }
        ans++
    } while (ans <= max);

    return ans

}

exports.execute = execute