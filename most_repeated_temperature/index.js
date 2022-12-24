const execute = () => {
    console.clear()

    const text = '-10 11 15 20 11'
    // const text = '-10 0 10 20 30'
    // const text = '-3 0 -3 5 -1 -5 -2 -3 -4 -1 0 -1 -1 -3 1 1 3 4 0 2 -1 -3 -2 -1 -1 5 5 3 4 2 -4 0 -5 5 -4 -2 -1 -1 -2 -2 -3 -5 2 0 3 2 2 4 -4 -2 -2 4 -3 3 -4 2 2 5 5 0 -3 1 0 -4 5 4 -5 1 -2 -5 3 1 3 4 2 3 -1 2 -5 -5 -3 3 -1 2 1 0 1 5 0 4 -3 1 5 -4 3 0 -3 3 -1 5'

    // const text = '1 -4 -5 -1 -1 3 -5 1 -2 1 2 2 0 2 -2 1 -5 5 4 2'

    const temps = text.split(' ')

    let check = true
    let index = 0
    let final = 0
    const obj = {}

    for (let i = 0; i < temps.length; i++) {
        let char = temps[i]
        if (!obj[char]) obj[char] = 1
        else obj[char] = obj[char] + 1
    }
    console.log(obj)



    const keys = Object.keys(obj)
    const values = Object.values(obj)

    console.log(keys)
    console.log(values)
    let compare = 1

    for (let i = 0; i < values.length - 1; i++) {

        if (values[i] >= compare) {
            compare = values[i]
            check = false
            index = i
        }
    }



    if (check) {
        let temp = keys.map((val) => {
            return Number(val)
        })
        temp.sort((a, b) => a - b)
        final = temp[temp.length - 1]
    } else {
        final = keys[index]
    }


    console.log(final)
    return final


}

exports.execute = execute