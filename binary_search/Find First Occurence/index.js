const arr = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
const n = arr.length
const target = 1

let start = 0, end = n - 1, output = -1


while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) {
        output = mid
        end = mid - 1
    } else if (arr[mid] < target) {
        start = mid + 1
    }
}

console.log(output)