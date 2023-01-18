const x = 4
const n = 2

let low = 1, high = x, esp = 1e-6

while ((high - low) > esp) {
    let mid = (low + high) / 2

    if (Math.pow(mid, n) < x) {
        low = mid
    } else {
        high = mid
    }
}
console.log(Math.ceil(low))
console.log(Math.floor(high))