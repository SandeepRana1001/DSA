const arr = [4, 5, 6, 9, 10, 2, 3]
//   0  1  2  3  4   5  6  
let min = 0
const n = arr.length

let start = 0, end = n - 1

// array is not rotated
if (arr[start] < arr[end]) {
    console.log('Value is ' + arr[start])
    return
}

while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (arr[mid] > arr[mid + 1]) {
        start = mid + 1
    } else {
        end = mid - 1
    }
}


console.log(start)

