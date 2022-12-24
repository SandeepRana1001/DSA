const getFactorial = (n) => {
    let fact = 1

    for (let i = n; i > 0; i--) {
        fact = fact * i
    }
    return fact
}

const execute = () => {
    console.clear()
    let n = 125, count = 0
    const factorial = getFactorial(n).toString()
    console.log(factorial)

    for (let i = 0; i < factorial.length - 1; i++) {
        if (factorial[i + 1] === '0') {
            count++
        } else {
            count = 0
        }
    }

    console.log(count)

}

exports.execute = execute