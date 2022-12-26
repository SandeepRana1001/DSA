const execute = () => {

    const nums1 = [1, 2, 3]
    const nums2 = [2, 5, 6]
    const n = 3, m = 3

    const result = [...nums1, ...nums2].sort((a, b) => a - b)

    console.log(result)

}

exports.execute = execute