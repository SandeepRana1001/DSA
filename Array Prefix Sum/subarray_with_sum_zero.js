const execute = () => {

    const str = '0 0 0 0 0 0 0'.trim()
    // const str = '2 3 1 -4 0 6'
    // const str = '-1000000000 -1000000000'
    const arr = str.split(' ').map((element) => parseInt(element))
    let n = arr.length


    console.log(str)

    let sum = 0, len = 0, start = 0, end = 0
    const map = new Map();
    map.set(0, -1)


    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        if (!map.has(sum))
            map.set(sum, i)

        else {
            let newLen = i - map.get(sum)

            if (len <= newLen) {
                len = newLen
                start = map.get(sum) + 1
                end = i
            }
        }

    }

    if (len === 0)
        return [-1]
    else if (sum === 0)
        return arr

    return arr.slice(start, end + 1)

}

exports.execute = execute