const execute = () => {

    const meetings = [[0, 20], [5, 10], [10, 15]]
    const start = meetings.map((element) => element[0]).sort((a, b) => a - b)
    const end = meetings.map((element) => element[1]).sort((a, b) => a - b)


    let res = 0, count = 0, e = 0, s = 0

    while (s < start.length) {

        if (start[s] < end[e]) {
            s++
            count++
        } else {
            e++
            count--
        }
        res = Math.max(res, count)
    }

    console.log(res)



    console.log(start)
    console.log(end)
}

exports.execute = execute