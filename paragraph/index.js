const execute = () => {
    const paragraph = 'the quick Brown fox jumps over The lazy dog.';
    const arr = paragraph.split(' ')
    const new_arr = arr.map((val) => {
        const temp = val.replace(val[0], val[0].toUpperCase())
        return temp
    })
    return new_arr.join(' ')
}

exports.execute = execute