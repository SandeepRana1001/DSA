const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const n = nums.length
let start = 0, end = 1

while (end < n) {
    if (nums[start] !== nums[end]) {
        start++
        nums[start] = nums[end]
    }
    end++
}

start += 1

console.log(nums)
console.log(start)
console.log(nums.slice(0, start))