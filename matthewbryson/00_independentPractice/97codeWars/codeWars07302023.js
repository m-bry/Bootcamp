// ## [Question One]

// Write a function that takes an array of numbers, and returns the sum of all of the positives ones.

// Example [1,-2, 3, 5] => 1 + 3 + 5 = 9

// Example [-1,-2,-5] => 0

// Note: if there is nothing to sum, the sum is default to 0. Test that each member of the array is actually a number before adding them.  Provide the test, so one only has to run the solution.js file.

// create a function that takes in the starting/sample array stored in the variable called sampleNum
// let numArray = [-5, 4, -3, 2];
// function sumFunc(sampleNum) {
//     let numSum = 0;
//     for (let i=0; i < sampleNum.length; i++){
//         if (sampleNum[i] >= 0) {
//             numSum = numSum + sampleNum[i];
//         }
//     }
//     return numSum;
// }

// // console.log(sumFunc(sampleNum));
// console.log(sumFunc([1, -2, -8]));
// console.log(sumFunc(numArray));

// function positiveSum(arr) {
//     function positive(num) {
//         return num > 0;
//     }
//     var posNum = arr.filter(positive);
//     var sum=0;

//     posNumbers.forEach(function(item) {
//         return sum = sum + item;
//     });
//     return(sum);
// }

// function positiveSum(arr) {
//     var posNum = arr.filter(elem => {
//         elem > 0
//     });
//     var sum=0;
//     posNumbers.forEach(function(item) {
//         return sum = sum + item;
//     });
//     return(sum);
// }

// assertion comes with nodejs
var assert = require('assert')

function posSum(arr) {
    var sum = 0;
    if (Array.isArray(arr)){
        arr.forEach(function(item) {
            if (typeof item === 'number') {
                sum = sum + (item > 0 ? item: 0);
            }
        });
    }
    return (sum);
}

let numArray = [-5, 4, -3, 2];
assert.equal(posSum(numArray), 6);
assert.equal(posSum([]), 0);
assert.strictEqual(posSum('hello'), 0);

console.log('All tests have passed!')