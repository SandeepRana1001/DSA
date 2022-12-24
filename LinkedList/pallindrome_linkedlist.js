let reverseLinkedList = require('./reverseLinkedList')

const execute = (head) => {

    let fast = head
    let slow = head
    let isPallindrome = false

    // heir Tortoise algorithm

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    let reversed = reverseLinkedList.execute(slow)
    console.log(reversed)

    let root = head

    while (reversed && root) {
        console.log(`Root  =  ${root.value}   Reversed = ${reversed.value} `)
        if (root.value === reversed.value) {
            isPallindrome = true
        } else {
            isPallindrome = false
            break
        }
        root = root.next
        reversed = reversed.next
    }

    console.log('\n')
    console.log(isPallindrome)


}

exports.execute = execute