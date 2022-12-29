const execute = () => {

    let s = 'aabcccbcb'

    let start = 0, end = 0, max = 0
    const obj = {}


    for (let end = 0; end < s.length; end++) {
        let char = s[end]
        obj[char] = obj[char] + 1 || 1

        while (obj[char] > 1) {
            let leftChar = s[start]
            if (obj[leftChar] > 1) {
                obj[leftChar]--
            } else {
                delete obj[leftChar]
            }
            start++
        }

        max = Math.max(max, (end - start) + 1)
    }

    console.log(max)

}



exports.execute = execute