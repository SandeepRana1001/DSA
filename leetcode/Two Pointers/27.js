/*
    Remove Element
    Two Pointers
*/

const nums = [0, 1, 2, 2, 3, 0, 4, 2]
const val = 2

let count = 0

for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
        nums[count] = nums[i]
        count++
    }
}

console.log(count)
console.log(nums.splice(0, count))