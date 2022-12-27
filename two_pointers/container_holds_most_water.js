const execute = () => {

    // const str = '1 8 6 2 5 4 8 3 7'
    const str = '9 5 6 7 3'
    const height = str.split(' ').map((element) => parseInt(element))

    let left = 0, right = height.length - 1, max = 0

    while (left < right) {
        let lh = height[left]
        let rh = height[right]

        let min_h = Math.min(lh, rh)
        max = Math.max(max, min_h * (right - left))

        if (lh < rh) {
            left++
        } else {
            right--
        }

    }

    console.log(max)

}

exports.execute = execute