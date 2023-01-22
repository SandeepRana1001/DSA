const arr = [3, 4, 4, 1]
const n = arr.length

const stack = []

for (var i = 0; i < arr.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1].value < arr[i]) {
        // updating the array as per the stack top
        var d = stack.pop();
        arr[d.index] = arr[i];
    }
    // pushing values to stack
    stack.push({ "value": arr[i], "index": i });
}
// updating the array as per the stack top
while (stack.length > 0) {
    d = stack.pop();
    arr[d["index"]] = -1;
}

console.log(arr);
