const execute = () => {
    const arr = [[4, 9, 2], [3, 5, 7], [8, 1, 6]]
    const n = 3
    console.log(arr)
    console.clear()
    let col_sum = 0, diag_sum = 0, row_sum = 0, check = false

    for (let i = 0; i < n; i++) {
        diag_sum = diag_sum + arr[i][i]
    }
    console.log(diag_sum)



    for (let i = 0; i < n; i++) {
        col_sum = 0
        row_sum = 0
        for (let j = 0; j < n; j++) {
            col_sum += arr[j][i]
            row_sum += arr[i][j]
        }
        console.log(col_sum)
        if (diag_sum !== col_sum || diag_sum !== row_sum) {
            check = false
            break;
        } else {
            check = true
        }
    }

    return check
    console.log(check)
}

exports.execute = execute