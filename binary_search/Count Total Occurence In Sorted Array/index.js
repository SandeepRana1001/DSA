const arr = [-1, 2, 2, 4, 7]
const target = 2
const n = arr.length

let start = 0, end = n - 1, count = 0

// First Occurence

const firstOccurence = (start, end, arr, target) => {
    let output = -1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === target && (mid === 0 || arr[mid - 1] < target)) {
            output = mid
            return output
        } else if (arr[mid] < target) {
            start = mid + 1
        } else if (arr[mid] >= target) {
            end = mid - 1
        }
    }
    return -1
}

// Last Index

const lastOccurence = (start, end, arr, target) => {
    let output = -1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === target && (mid === arr.length - 1 || arr[mid + 1] > target)) {
            output = mid
            return output
        } else if (arr[mid] <= target) {
            start = mid + 1
        } else if (arr[mid] > target) {
            end = mid - 1
        }
    }
    return -1
}


const firstIndex = firstOccurence(0, n - 1, arr, target)
const lastIndex = lastOccurence(0, n - 1, arr, target)

if (firstIndex === -1)
    return 0

const totalOccurence = (lastIndex - firstIndex) + 1

console.log(totalOccurence)