function numberToArray(number) {
    let array = number.toString().split("");//stringify the number, then make each digit an item in an array
    return array.map(x => parseInt(x));//convert all the items back into numbers
}
function justGreater(arr_val, num) {
    arr_val.sort((a, b) => b - a)
    let final = 0
    for (let i = 0; i < arr_val.length; i++) {
        if (arr_val[i] > num) {
            final = arr_val[i]
        }
    }
    return final

}

//74751
//719918460
// const num = 74751  //75147
// const num = 719918460  //719918604
// const num = 9876543 //-1
const num = 88101 //88110

let arr = numberToArray(num)
const len = arr.length - 1
let i = -1, j = -1

for (i = len; i >= 0; i--) {
    let curr = arr[i]
    let prev = arr[i - 1]

    if (curr > prev) {
        i = i - 1
        break
    }
}
if (i == -1) {
    console.log(-1)
    return -1
}



const val = justGreater(arr.slice(i + 1), arr[i])
const index = arr.lastIndexOf(val)

let temp = arr[i]
arr[i] = arr[index]
arr[index] = temp


// console.log(arr.splice(i + 1).sort())

arr = arr.concat(arr.splice(i + 1).sort());
console.log(parseInt(arr.join('')))

