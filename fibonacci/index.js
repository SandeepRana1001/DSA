const execute = () => {
    let n = 3
    let i = 0
    let curr = 0, next = 1, prev = 0
    while (i < 3) {

        prev = curr
        curr = next
        next = curr + prev
        i++;
    }

    console.log(curr)
}

exports.execute = execute