const string = 'bbaaaeeefff'

const map = {}
let length = 0, odd = false

for (let val of string) {
    map[val] = map[val] ? map[val] + 1 : 1
}

map

for (let val in map) {

    val

    if (map[val] % 2 === 0) {
        length = length + map[val]
    } else {
        if (odd === false) {
            length += map[val]
            odd = true
        } else {
            length += map[val] - 1
        }
    }

}



length