const execute = () => {

    let n = 74

    let ans = BigInt(1)

    for (let i = BigInt(1); i <= n; i++) {
        ans = ans * i
    }

    return ans.toString()
}

exports.execute = execute