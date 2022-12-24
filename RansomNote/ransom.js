const execute = (ransomNote, magazine) => {
    const map = {}

    for (let i = 0; i < magazine.length; i++) {
        let value = magazine[i]
        if (!map[value]) {
            map[value] = 1
        } else {
            map[value] += 1
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        let value = ransomNote[i]
        if (!map[value] || map[value] === 0) {
            return false
        }

        map[value] = map[value] - 1
    }

    return true

}

exports.execute = execute