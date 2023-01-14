const arr = [2, -5, 1, -2, 4]

const compare = (a, b) => {
    a = Math.abs(a)
    b = Math.abs(b)
    return a - b
}


console.log(arr.sort(compare))