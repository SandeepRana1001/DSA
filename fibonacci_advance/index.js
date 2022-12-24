const execute = () => {
    const num = 4
    // generate fibonacci upto num+1 places
    const fibonacci = []

    let current = 1, next = 1, prev = 0

    for (let i = 0; i < num + 1; i++) {
        fibonacci.push(prev)

        prev = current
        current = next
        next = prev + current
    }

    console.log(fibonacci)
}

exports.execute = execute