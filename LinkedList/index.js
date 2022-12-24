class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

module.exports = class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        let temp = this.head
        let prev = temp
        while (temp.next) {
            prev = temp
            temp = temp.next
        }

        this.tail = prev
        this.tail.next = null
        this.length--
        if (this.length == 0) {
            this.head = null
            this.tail = null
        }
        return this
    }

    unshift(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined
        let temp = this.head
        this.head = temp.next
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        temp.next = null
        return temp
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }

        return temp
    }
    reverse() {
        let current = this.head
        let prev = null
        let next = null
        while (current.next !== null) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev
    }
}


// let linkedList = new LinkedList(1)
// module.exports.LinkedList = LinkedList;
// linkedList.push(6)
// linkedList.push(7)
// // linkedList.reverse()
// // linkedList.shift()

// // linkedList.pop()
// const execute = () => {
//     console.clear()
//     console.log(linkedList.reverse())

// }

// exports.execute = execute
// module.export = LinkedList
