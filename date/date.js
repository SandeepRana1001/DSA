const execute = () => {
    date = new Date('12/01/2023')
    date = date.getTime()
    const current = new Date().getTime()
    const diff = Math.floor((date - current) / (1000 * 24 * 24 * 60))
    console.log(diff)
}

exports.execute = execute