const execute = () => {
    console.clear()
    let i = 0;
    let j = 0;
    let n = 5
    let str = ''
    for (i = 0; i < n; i++) {

        for (let k = 0; k < n - i; k++) {
            str += ' '
        }

        for (j = 0; j <= i; j++) {
            str += '*'
        }

        // for (let l = 1; l <= i; l++) {
        //     str += '*'
        // }
        str += '\n'
    }
    const temp = str
    console.log(temp)

    str = ''


    for (i = 0; i < n; i++) {


        // for (let l = i; l >= 1; l--) {
        //     str += '*'
        // }

        for (j = n; j > i; j--) {
            str += '*'
        }
        for (let k = 0; k < n - 1; k++) {
            str += ' '
        }
        str += '\n'
    }
    console.log(str)
}

exports.execute = execute