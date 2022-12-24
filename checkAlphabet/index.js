const execute = () => {
    const X = 0

    let n = X.toString().charCodeAt(0);
    let strStartsWithALetter = (n >= 65 && n < 91) || (n >= 97 && n < 123);

    if (strStartsWithALetter) {
        console.log(true)
    } else {
        console.log(false)
    }


}

exports.execute = execute