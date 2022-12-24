const execute = () => {
    const n = 4
    let bool = true

    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i !== n) {
            bool = false
            break
        }
    }

    console.log(bool)
}

exports.execute = execute