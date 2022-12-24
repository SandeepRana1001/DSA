const execute = () => {
    console.clear()
    const s = "pwwkew"
    let start = 0, end = 0, map = {}, max = 0

    for (end = 0; end < s.length; end++) {
        let rightChar = s[end]
        map[rightChar] = map[rightChar] + 1 || 1

        while (map[rightChar] > 1) {
            let leftChar = s[start]
            if (map[leftChar] > 1) {
                map[leftChar]--
            } else {
                delete map[leftChar]
            }
            start++
        }

        max = Math.max(max, (end - start) + 1)
    }
    console.log(max)
}

exports.execute = execute

