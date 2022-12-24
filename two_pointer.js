const execute = () => {
    const arr = [10, 20, 30, 40, 50]
    const x = 70
    let i, j = 0, temp = 0
    for (i = 0; i < arr.length; i++) {
        for (j = arr.length; j > 0; j--) {
            temp = arr[i] + arr[j]
            if (temp === x) {
                console.log(i)
                console.log(j)
                break;
            }
        }

    }


}

exports.execute = execute