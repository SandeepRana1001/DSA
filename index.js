console.clear()
// const magicSquare = require('./magicSquare/index')
// const pattern = require('./pattern/index')
// pattern.execute()

// const permutation = require('./string_permutation/index')
// permutation.execute()

// const fibonacii = require('./fibonacci/index')
// fibonacii.execute()

const coprime = require('./coprime/index')
// coprime.execute()

const prime = require('./prime/index')
// prime.execute()

const distinct_factor = require('./distinct_factors/index')

// distinct_factor.execute()

// const string_addition = require('./string_addition/index')
// string_addition.execute()

const trailing_zero = require('./trailing_zero/index')

// trailing_zero.execute()

const factorial_String = require('./factorial_string/index')
// console.log(factorial_String.execute())

const sum_of_series = require('./sum_of_series/I')
// console.log(sum_of_series.execute())

const sorting = require('./sorting/index')
// sorting.execute()

const repeated_substraction = require('./repeated_substraction/index')
// repeated_substraction.execute()

const most_freqent_char = require('./most_frequent_character/index')
// most_freqent_char.execute()

const most_repeated_temperature = require('./most_repeated_temperature/index')
// most_repeated_temperature.execute()


const bracket_pattern = require('./bracket_pattern/index')
// bracket_pattern.execute()

const postfix_operation = require('./postfix_operation/index')
// postfix_operation.execute()
let root = {
    "val": 6,
    "left": {
        "val": 4,
        "left": {
            "val": 5,
            "left": null,
            "right": null,
            "next": null,
            "parent": null
        },
        "right": null,
        "next": null,
        "parent": null
    },
    "right": {
        "val": 3,
        "left": null,
        "right": null,
        "next": null,
        "parent": null
    },
    "next": null,
    "parent": null
}

const recursion = require('./recursion/index')
// console.log(recursion.execute(root))

const LinkedList = require('./LinkedList/index')
root = new LinkedList(1)
root.push(2)
root.push(2)
root.push(1)
let head = root.head


const reverseLinkedList = require('./LinkedList/reverseLinkedList')
// reverseLinkedList.execute(head)

const pallindrome_linkedlist = require('./LinkedList/pallindrome_linkedlist')
// pallindrome_linkedlist.execute(head)

const string_permutation_pallindrome = require('./string_permutation_pallindrome/index')

// string_permutation_pallindrome.execute()

const anagram = require('./anagram/index')
// anagram.execute()

const smallest_positive_integer = require('./smallest_positive_integer/index')
smallest_positive_integer.execute()

const rotate_matrix = require('./rotate_matrix/index')
// rotate_matrix.execute()

const spiral_matrix = require('./spiral_matrix/generate_from_array')
const spiral_matrix_new = require('./spiral_matrix/create_fresh')
// spiral_matrix.execute()
// spiral_matrix_new.execute()

const zero_matrix = require('./zero_matrix/index')
// zero_matrix.execute()

const stocks_profit = require('./stocks_profit/index')
// stocks_profit.execute()

const stock_profit_greedy_approach = require('./stocks_profit/greedy_approach')
// stock_profit_greedy_approach.execute()


const pair_with_given_sum = require('./two_pointers/pair_with_given_sum')

// pair_with_given_sum.execute()

const merge_sorted_array = require('./two_pointers/merge_sorted_array')
// merge_sorted_array.execute()

const triplets = require('./two_pointers/triplets')
// triplets.execute()

const removeDuplicates = require('./two_pointers/removeDuplicates')
removeDuplicates.execute()