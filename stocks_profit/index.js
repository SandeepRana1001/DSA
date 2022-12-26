const execute = () => {

    let prices = [7, 1, 5, 3, 6, 4]
    let sellIndex = prices.length - 1
    let profit = 0
    const prof = []

    for (let buyIndex = prices.length - 1; buyIndex >= 0; buyIndex--) {

        let buyVal = prices[buyIndex]
        let sellVal = prices[sellIndex]

        if (buyVal - sellVal >= 0) {
            sellIndex = buyIndex
        } else {
            let prices = sellVal - buyVal
            profit = Math.max(profit, prices)
            prof.push(profit)
        }

    }
    console.log(prof)

}

exports.execute = execute