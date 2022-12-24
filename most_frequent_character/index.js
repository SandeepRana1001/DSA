const execute = () => {
    console.clear()

    // const text = 'aaaaAAAAbbbbbBBBBB'
    // const text = 'Statements are unique.'
    const text = 'aaBAAA'
    const obj = {}

    for (let i = 0; i < text.length; i++) {
        let char = text[i]
        if (!obj[char]) obj[char] = 1
        else obj[char] = obj[char] + 1
    }

    const arr = Object.keys(obj)
    arr.sort()


    let i = 1;
    let data = {
        char: arr[0],
        count: obj[arr[0]]
    }

    while (i < arr.length) {
        let val = arr[i]

        if (obj[val] > data.count) {
            data.count = obj[val]
            data.char = val
        }
        i++
    }

    const str = data.char + ' ' + data.count
    console.log(str)

    return str


}

exports.execute = execute