const execute = (head) => {
    // let linkedList = new LinkedList(5)

    let curr = head
    let next;
    let prev = null

    while (curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev


}

exports.execute = execute;