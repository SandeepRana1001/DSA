const str = '()(()(())'

let n = str.length

let stk = [-1];
stk.push();

// Initialize result
let result = 0;

// Traverse all characters of given string
for (let i = 0; i < n; i++) {
    // If opening bracket, push index of it
    if (str.charAt(i) == '(') {
        stk.push(i);
    }

    // If closing bracket, i.e.,str[i] = ')'
    else {
        // Pop the previous opening
        // bracket's index
        if (stk.length != 0) {
            stk.pop();
        }

        // Check if this length formed with base of
        // current valid substring is more than max
        // so far
        if (stk.length != 0) {
            result = Math.max(result, i - stk[stk.length - 1]);
        }

        // If stack is empty. push current index as
        // base for next valid substring (if any)
        else {
            stk.push(i);
        }
    }
}

console.log(result)
return result;
