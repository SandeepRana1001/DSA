let count = []
const getFactors = (n, val) => {
    let check = true
    for (let i = 2; i < n; i++) {
        if (n % i === 0 && val % i === 0) {
            check = false
            break
        }
    }
    if (check) {
        count.push(val)
    }
}
const execute = () => {
    const n = 1

    for (let i = 1; i <= n; i++) {
        getFactors(n, i)
    }


    console.log(count.length)
}

exports.execute = execute