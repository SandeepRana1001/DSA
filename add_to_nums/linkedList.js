const execute = (l1, l2) => {

    const num1 = parseInt(l1.join(''))
    const num2 = parseInt(l2.join(''))
    const sum = (num1 + num2).toString().split('').reverse()

    console.log(`Num1 = ${num1}   Num2 = ${num2}`)
    console.log(`Sum = ${sum}`)
}

exports.execute = execute