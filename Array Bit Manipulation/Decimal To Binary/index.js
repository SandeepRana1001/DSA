let num = 14
let binary = []

while (num >= 1) {
    if (num % 2 === 0)
        binary.push(0)
    else
        binary.push(1)
    num = Math.floor(num / 2)

    if (num === 1) {
        binary.push(1)
        break
    }
}

const res = parseInt(binary.reverse().join(''))

console.log(res)