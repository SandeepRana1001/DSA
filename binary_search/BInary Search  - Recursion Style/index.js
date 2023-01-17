const arr = [1, 2, 3, 4, 5, 6]
const n = arr.length
const key = 5

const binary_search = (arr, start, end, key) => {
    if (end < start)
        return -1

    let mid = Math.floor((start + end) / 2)

    if (arr[mid] === key) {
        return mid
    } else if (arr[mid] < key) {
        start = mid + 1
    } else if (arr[mid] > key) {
        end = mid - 1
    }

    return binary_search(arr, start, end, key)

}

console.log(binary_search(arr, 0, n - 1, key))