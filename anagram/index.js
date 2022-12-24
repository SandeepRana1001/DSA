const execute = () => {
    let s = 'abc'
    let t = 'cab'
    let result = false

    if (s.length != t.length) {
        return false
    }

    let original = s.split('').sort().join('')
    let check = t.split('').sort().join('')

    if (original === check) {
        result = true
    }

    console.log(result)

}


exports.execute = execute