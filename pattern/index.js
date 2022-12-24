const execute = () => {
    let n = 5
    console.clear()
    const arr = []
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j <= i; j++) {
            str += '* '
        }
        arr.push(str)
    }

    for (let i = n - 1; i > 0; i--) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += '* '
        }
        arr.push(str)
    }

    // console.log(arr)
    arr.forEach((val) => {
        console.log(val)
        // console.log('\n')
    })

    function findLargestNumber(a, b, c) {
        if (a > b && a > c) return a
        else if (b > a && b > c) return b
        else if (c > b && c > a) return c
    }

    console.log(findLargestNumber(40.777, -90.0, 40))
}

exports.execute = execute