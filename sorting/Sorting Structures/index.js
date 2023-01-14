const arr = [
    [1, 'Alan', 45, 56, 21, 32, 74],
    [2, 'Fabien', 95, 94, 93, 92, 91],
    [3, 'Gamora', 85, 65, 54, 65, 76]
]

class Student {
    constructor(arr) {
        this.id = arr[0]
        this.name = arr[1].toLowerCase()
        this.marks = arr.slice(2)
    }
}

const custom = (obj1, obj2) => {
    obj1 = new Student(obj1)
    obj2 = new Student(obj2)

    let marks1 = obj1.marks.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    let marks2 = obj2.marks.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    // marks in descending order
    if (marks1 > marks2) {
        return -1
    } else if (marks1 < marks2) {
        return +1
    } else { // name in ascending order
        if (obj1.name > obj2.name) return +1
        else if (obj1.name < obj2.name) return -1
        else { // id in ascending order
            if (obj1.id > obj2.id) return +1
            else if (obj1.id < obj2.id) return -1
        }
    }

}


arr.sort(custom)

// prepare final array
const final = []
for (let i = 0; i < arr.length; i++) {
    final.push(arr[i][0])
}

console.log(final)


// generate class

// for(let )
