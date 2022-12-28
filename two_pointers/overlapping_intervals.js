const execute = () => {

    // const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
    // const intervals = [[1, 5], [6, 10], [11, 15], [16, 20], [5, 16]]
    const intervals = [[0, 20], [5, 10], [10, 15]]
    intervals.sort((a, b) => a[0] - b[0])
    let end = 0

    const pair = [intervals[0]]

    for (let interval of intervals) {
        let current_pair = pair[pair.length - 1]
        end = current_pair[1]

        if (interval[0] <= end) {
            current_pair[1] = Math.max(current_pair[1], interval[1])
        } else {
            pair.push(interval)
        }

    }


    console.log(pair)

}

exports.execute = execute