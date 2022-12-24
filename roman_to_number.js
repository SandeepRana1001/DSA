const execute = (n) => {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        const curr = roman[n[i]]
        const next = roman[n[i + 1]]
        if (curr < next) {
            sum = sum + (next - curr)
            i++;
        } else {
            sum = sum + curr
        }
    }

    console.log(sum)


}

exports.execute = execute