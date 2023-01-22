const str = 'a##b'
const str2 = 'ab'

let res = false

const getStringFromStack = (str) => {
    const stack = []

    for (let val of str) {
        if (val === '#') {
            stack.pop()
        } else {
            stack.push(val)
        }
    }

    return stack.join('')
}

console.log(getStringFromStack(str))
console.log(getStringFromStack(str2))

if (getStringFromStack(str) === getStringFromStack(str2)) {
    res = true
}

console.log(res)