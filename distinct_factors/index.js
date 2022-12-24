const execute = () => {
    const n = 4
    let sum = 0
    let counter = 0

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            counter++
            sum += i
        }
    }

    console.log(`${counter} ${sum}`)
}

exports.execute = execute