const execute = () => {
    let n = 3
    let sum = 0
    let prev = 1, next = 3
    for (let i = 0; i < n; i++) {
        sum = (sum + (prev * next))
        prev = next
        next = next + 2
    }

    console.log(sum)

}

exports.execute = execute