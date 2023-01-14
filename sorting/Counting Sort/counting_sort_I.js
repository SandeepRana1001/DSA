const str = 'bacdeedcba'
const n = 10
const res = [], final = []

for (let i = 0; i < n; i++)
    res[i] = 0

for (let i = 0; i < n; i++) {
    let char = str[i]

    res[char.charCodeAt(0) - 'a'.charCodeAt(0)]++

}
console.log(res)

for (let i = 0; i < n; i++) {
    for (let j = 0; j < res[i]; j++) {
        let char = String.fromCharCode(i + 'a'.charCodeAt(0))
        final.push(char)
    }
}



console.log(final.join(''))