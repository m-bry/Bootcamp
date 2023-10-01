// Given two arrays a and b write a function comp(a, b) (or compSame(a, b)) 
// that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). 
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Sample Data:
// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
// function comp(array1, array2) {
//     if (array1 == [] || array2 == []) {
//         return false;
//     } else if (array1 == null || array2 == null) {
//         return false;
//     } else if (array1.length != array2.length) {
//         return false;
//     } else {
//         for (let i = 0; i < array1.length ; i++){
//             array1[i] = (array1[i]**2);
//             array2[array2.indexOf(array1[i])] >= 0 ? array2.splice(array2.indexOf(array1[i]), 1) : false;
//         }
//         return array2.length > 0 ? false : true;
//     }
// }

//TOP RATED SOLUTION
// function comp(array1, array2) {
//     if(array1 == null || array2 == null) return false;
//     array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//     return array1.map(v => v * v).every((v, i) => v == array2[i]);
//   }


// Given a list and a number, create a new list that contains each number of list at most N times,
// without reordering. For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3],
// you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times,
// and then take 3, which leads to [1,2,3,1,2,3].With list [20,37,20,21] and number 1, the result would be 
// [20,37,21]. 

//Sample Data
