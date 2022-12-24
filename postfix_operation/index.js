const execute = () => {
    console.clear()

    // let exp = '2 3 +'
    let exp = '7 9 + 3 8 + + 2 6 * 1 3 + - + 6 3 * 8 9 * - 2 8 * 5 7 * - + -'
    // let exp = '5 11 + 9 5 - + 10 *'
    const arr = exp.split(' ')
    console.log(arr.length)
    let operation = 0

    const stack = []

    for (let i = 0; i < arr.length; i++) {
        let char = arr[i]
        console.log(stack)
        if (char.trim() === '') continue
        let checkisNaN = isNaN(parseInt(char))

        if (!checkisNaN) { // if character is a number
            stack.push(parseInt(char))
        } else {
            let val1 = stack.pop()
            let val2 = stack.pop()
            // console.log(`Val 1= ${val1} Val 2 = ${val2}`)

            switch (char) {
                case '+':
                    operation = val1 + val2
                    stack.push(operation)
                    break;
                case '-':
                    if (val1 > val2)
                        operation = val1 - val2
                    else
                        operation = val2 - val1
                    stack.push(operation)
                    break;
                case '*':
                    operation = val1 * val2
                    stack.push(operation)
                    break;
                default:
                    break;
            }
            console.log('Operator = ' + char + ' Operation = ' + operation)


        }

    }
    // console.log(stack)
    // console.log(operation)
    // console.log(stack.pop())
}

exports.execute = execute