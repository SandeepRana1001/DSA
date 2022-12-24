const execute = () => {
    console.clear()
    const accounts = [[1, 2, 3], [3, 2, 1]]
    const arr = [];
    let sum = 0;
    for (let i = 0; i < accounts.length; i++) {
        sum = 0
        for (let j = 0; j < accounts[i].length; j++) {
            console.log(accounts[i][j])
            sum = sum + accounts[i][j]
        }
        arr.push(sum)
    }
    arr.sort((a, b) => a - b)
    console.log(arr[arr.length - 1])


}

exports.execute = execute