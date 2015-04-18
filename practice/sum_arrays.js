function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

function sumArrays(arr) {
    var total = 0;

    // iterate through each array
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;

        // sum the elements in the array
        for (var x = 0; x < arr[i].length; x++) {
            sum += arr[i][x];
            }

        // add this sum to the total
        total += sum;
    }

    // return the total
    return total;
}

function sumArraysRecursive(arr) {

    console.log("Passed array is: " + arr);

    // Base case: empty array returns 0
    if (arr.length == 0) {
          return 0;
    }

    // It works for multi-dimensional arrays
    first_arr = arr.shift();
    var sum = 0;
    for (var i = 0; i < first_arr.length; i++) {
        sum += first_arr[i]
    }

    helpful_message = "Current sum is " + sum + " Array now is: " + arr;
    console.log(helpful_message);

    return sum += sumArraysRecursive(arr)
}

var error_msg = "Error, expected " + expected + " but got " + actual + "\n\n"

// var arr = [[1,2,3], [4, 5, 6], [7, 8, 9]]
// var expected = 45
// var actual = sumArrays(arr)
// var error_msg = "Error, expected " + expected + " but got " + actual + "\n\n"
// assert(actual == expected, error_msg)
// console.log(actual);
//
// var arr = []
// var actual = sumArrays(arr)
// var expected = 0
// assert(actual == expected, error_msg)
// console.log(actual);

// sumArraysRecursive returns 0 for the empty array
var arr = [];
var actual = sumArraysRecursive(arr)
var expected = 0
assert(actual === expected, error_msg)
console.log(actual);

var arr = [[1,2,3], [4, 5, 6], [7, 8, 9]]
var expected = 45
var actual = sumArraysRecursive(arr)
var error_msg = "Error, expected " + expected + " but got " + actual + "\n\n"
assert(actual === expected, error_msg)
console.log(actual);

console.log("All tests pass!");
