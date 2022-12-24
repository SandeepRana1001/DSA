const execute = () => {
    console.clear()
    s = "Let's take LeetCode contest"
    const arr = s.split(' ')
    let newArr = []
    for (let word of arr) {
        console.log(word)
        newArr.push(word.split('').reverse().join(''))
        newArr.push(" ")
    }
    console.log(newArr.join(''))


}

exports.execute = execute