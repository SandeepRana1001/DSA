const arr = [1, 2, 3]

let min = Number.POSITIVE_INFINITY

const getMin = (a, b) => {

    let res = Number.POSITIVE_INFINITY

    if (a < b) res = b - a
    else res = a - b

    min = Math.min(min, res)

}

arr.sort((a, b) => a - b)

arr.sort(getMin)
console.log(min)