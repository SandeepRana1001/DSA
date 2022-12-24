const execute = (str) => {

    const arr = str.split(' ').reverse();
    let data = []
    for (let s of arr) {
        if (s.length > 0)
            data.push(s)
    }

    console.log(data.join(' '))


}

exports.execute = execute