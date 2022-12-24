const execute = () => {
    console.clear()

    // let s = '([)]'
    // let s = '()[]{}'
    // let s = '([)]'

    // let s = '{[]}'

    // let s = '(((){}[]'
    let checkIsValid = true

    const stack = []

    let opening = ''


    for (let i = 0; i < s.length; i++) {

        let char = s[i]
        console.log(stack)

        if (char === ')') opening = '('
        else if (char === '}') opening = '{'
        else if (char === ']') opening = '['

        if (char === ')' || char === '}' || char === ']') {
            // check if last element was opening bracket stack
            // If exists , pop out  the opening bracket and don't push the closing bracket
            let popped = stack.pop()
            if (i === 0) {
                checkIsValid = false
                break
            } else if (popped === opening) {
                checkIsValid = true
            } else {
                checkIsValid = false
                break
            }

        } else {
            stack.push(char)
        }
    }

    if (checkIsValid && stack.length > 0) {
        checkIsValid = false
    }

    console.log(checkIsValid)
    console.log(stack)

    return checkIsValid

}

exports.execute = execute