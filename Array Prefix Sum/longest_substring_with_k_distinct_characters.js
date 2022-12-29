const execute = () => {

    const s = 'abacd'
    const k = 3

    let ans = 0, i = -1, j = -1, str = ''

    const map = new Map()

    while (true) {

        let loop1 = false
        let loop2 = false

        while (i < s.length - 1) {
            loop1 = true
            i++
            let char = s[i]

            map.set(char, map.has(char) ? map.get(char) + 1 : 1)
            if (map.size <= k) {
                let len = i - j
                ans = Math.max(len, ans)
                str += char
            } else {
                break
            }
        }

        while (j < i) {
            loop2 = true
            j++
            let char = s[j]

            if (map.get(char) === 1) {
                map.delete(char)
            } else {
                map.set(char, map.get(char) - 1)
            }

            if (map.size > k) {
                continue
            } else {
                let len = i - j
                ans = Math.max(len, ans)
                break
            }

        }

        if (!loop1 && !loop2)
            break

    }
    console.log(str)
    return ans
    // return str.length
}

exports.execute = execute