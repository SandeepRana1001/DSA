const execute = () => {
    const string = 'abcd'
    const pattern = [2, 4, 3, 1]
    const new_arr = []

    for (let i = 0; i < string.length; i++) {
        new_arr[pattern[i]] = string.charAt(i)
    }

    console.log(new_arr.join(''))
}

exports.execute = execute