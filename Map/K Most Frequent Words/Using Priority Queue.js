class PriorityQueue {
    constructor(length) {
        this.queue = []
        this.length = length
    }

    compare(a, b) {
        if (a.frequency !== b.frequency) {
            return b.frequency - a.frequency
        } else {
            return a.value.localeCompare(b.value)
        }
    }
    add = (value) => {
        this.queue.push(value)
        this.queue.sort(this.compare)
        const current_length = this.queue.length
        if (current_length > this.length) {
            this.queue.pop()
        }
    }

    getKey = () => {
        const array = this.queue.map((val) => {
            return val.frequency
        })

        return array
    }

    getValue = () => {

        const array = this.queue.map((val) => {
            return val.value
        })

        return array

    }
}



const word = 'aa aabc aa aabc a aabc a abc a aa'

const words = word.split(' ')
const k = 2

const obj = new PriorityQueue(k)
const map = {}

for (let val of words) {
    if (map[val]) {
        map[val] += 1
    } else {
        map[val] = 1
    }
}

map

const temp = ['aa', 'aabc', 'a', 'abc']

temp

for (let val in map) {

    let temp_obj = { frequency: map[val], value: val }
    obj.add(temp_obj)
}

console.log(obj.getValue())