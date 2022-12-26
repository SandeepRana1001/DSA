const execute = () => {

    let prices = [7, 1, 5, 3, 6, 4]

    let profit = 0, i = 1

    while (i < prices.length) {
        if (prices[i] > prices[i - 1]) {
            profit = profit + (prices[i] - prices[i - 1])
        }
        i++
    }

    console.log(profit)
}

exports.execute = execute