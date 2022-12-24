const execute = () => {
    console.clear()
    const s1 = 'ab'
    const s2 = 'eidbaooo'
    let bool = false, map = {}, counter = 0

    for (let letter of s1) {
        map[letter] = 1
    }
    console.log(map)

    for (let i = 0; i < s2.length; i++) {
        let char = s2[i]
        if (map[char]) {
            counter++;
        } else {
            counter = 0
        }
        if (counter === s1.length) {
            bool = true
            break
        }

    }
    console.log(bool)
}

exports.execute = execute