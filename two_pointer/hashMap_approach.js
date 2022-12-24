const execute = (n, sum) => {

    //[10,15,-5,15,-10,5]
    // 0  1   2  3   4 5

    let current_sum = 0, start = 0, end = -1
    const map = {}

    for (let i = 0; i < n.length; i++) {
        current_sum += n[i]

        let difference = parseInt(current_sum) - parseInt(sum)
        console.log(`Current Sum = ${current_sum}`)
        console.log(` Sum = ${sum}`)
        console.log(`Num = ${n[i]}`)
        console.log(`difference = ${difference}`)
        console.log(`Map Contains = ${map[difference]}`)

        if (difference === 0) {
            start = 0
            end = i
            break
        }

        if (map[difference]) {
            start = map[difference] + 1
            end = i
            break
        }

        map[current_sum] = i
        console.log(`Object = ${JSON.stringify(map)}`)
        console.log(`\n\n\n`)


    }

    if (end > 0) {
        console.log(`Start = ${start} \n End = ${end}`)
    } else {
        console.log(`Not Found`)
    }





}

exports.execute = execute