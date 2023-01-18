const arr = [4, 5, 1, 2, 3]
const n = arr.length
const target = 3

const findPivot = (arr, low, high) => {

    if (high < low)
        return -1;
    if (high == low)
        return low;

    let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*/
    if (mid < high && arr[mid] > arr[mid + 1])
        return mid;

    if (mid > low && arr[mid] < arr[mid - 1])
        return (mid - 1);

    if (arr[low] >= arr[mid])
        return findPivot(arr, low, mid - 1);

    return findPivot(arr, mid + 1, high);
}


console.log(findPivot(arr, 0, n - 1))