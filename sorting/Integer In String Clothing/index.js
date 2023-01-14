const arr = ['3', '30', '1', '124', '54644']

const compare = (a, b) => {
    a = BigInt(a)
    b = BigInt(b)

    if (a > b) return +1
    else if (a < b) return -1
    else return 0
    // return a-b
}


console.log(arr.sort(compare))