// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer).
// For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.

//sample data
// const recipe_1 = {flour: 500, sugar: 200, eggs: 1};
// const avail_1 = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
// const recipe_2 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// const avail_2 = {sugar: 500, flour: 2000, milk: 2000};

// function cakes(recipe, available) {
//     const recipeIngArr = Object.keys(recipe);
//     let amountCalc = Math.floor(available[`${recipeIngArr[0]}`]/recipe[`${recipeIngArr[0]}`]);
//     for (let i = 1; i < recipeIngArr.length; i++){
//         let ingCalc = Math.floor(available[`${recipeIngArr[i]}`]/recipe[`${recipeIngArr[i]}`]);
//         if (amountCalc > ingCalc ) {
//             amountCalc = ingCalc;
//         } else if (Number.isNaN(ingCalc) == true){
//             return 0;
//         }
//     }
//     return amountCalc;
//   }

//SIMILAR SOLUTION
// function cakes(recipe, available) {
//     let reqIng = Object.keys(recipe);
//     let availIng = Object.keys(available);
//     let count = 0;
//     let amount = [];
    
//     if (availIng.length === 0) {
//       return 0
//     }
    
//     if (reqIng.length > availIng.length) {
//       return 0;
//     }
    
//     for (const [keys1, values1] of Object.entries(recipe)) {
//       for (const[keys2, values2] of Object.entries(available)) {
//         if (keys1 === keys2) {
//           amount.push(Math.floor(values2 / values1))
//         }
//       }
//     }
//     return Math.min.apply(Math, amount);
//   }

//TOP RATED SOLUTION
// function cakes(recipe, available) {
//     return Object.keys(recipe).reduce(function(val, ingredient) {
//       return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
//     }, Infinity)  
//   }
//EXPLANATION BY COMMENT
// I am a student still beginning my coding life, so I can't promise this is exactly right -- it's just my best interpretation of the solution here.

// The idea is that you can only bake as many cakes as your lowest available-to-needed ratio for any given ingredient. In this case, the amount of ingredients needed are contained in the recipe object.

// Object.keys(recipe) creates an array containing all the keys from the recipe object (e.g. ['flour', 'eggs', 'sugar']).

// The .reduce() array method iterates through an array and returns a single value. It does this by running a function at each iteration, using the current array index as a variable. The function has two arguments:

//     val: this is the value returned by the function during the previous iteration
//     ingredient: this is the value of the array at the index currently being iterated

// Math.min() returns the minimum value passed into it. In this case, it compares two values:

//     Math.floor(available[ingredient] / recipe[ingredient]): if the current ingredient is 'flour', then this will be available.flour divided by recipe.flour. Math.floor rounds down the result.
//         I am not positive what || 0 (i.e. 'or zero') does here, but I'm guessing it will return zero if the above calculation returns an error from dividing by zero or something.
//     val: again, the value returned by the previous iteration of the reduce method

// When reduce is finished iterating through the array, the last value standing will be one of two outcomes:

//     0 (meaning a necessary ingredient is missing)
//     The lowest ratio from dividing each available ingredient by how much of it is required in the recipe

// The Infinity at the end is the second argument of the reduce method (the first argument being the function that was executed at each iteration through the array). The second argument in the reduce method is the value used for comparison during the first iteration. Because every number will evaluate as lower than Infinity, it is a natural starting point when searching for a minimum value.

// I hope this helps -- I tried to be as clear as I could. You can look up the Mozilla or W3 documentation for Object.keys(), Array.reduce(), Math.min(), Math.floor() if any of those are unfamiliar or you want to see them in action. Array.reduce() is by far the least intuitive of these things to me.

//ANOTHER SOLUTION
// function cakes(recipe, available) {
//     var numCakes = [];
    
//     for(var key in recipe){
//       if(recipe.hasOwnProperty(key)){
//         if(key in available){
//           numCakes.push(Math.floor(available[key] / recipe[key]));
//         }else{
//           return 0;
//         }
//       }
//     }
    
//     return Math.min.apply(null, numCakes); 
    
//   }



// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// function accum(s) {
//     let letterArray = s.toUpperCase().split('');
//     for (let i = 1; i < letterArray.length; i++ ){
//         letterArray[i] = letterArray[i] + letterArray[i].toLowerCase().repeat(i);
//     }
//     return letterArray.join('-');
// }
// console.log(accum('abc'));

//TOP RATED SOLUTIION
// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }



// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
// Examples

// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// function removeSmallest(numbers) {
//     let newArray = [];
//     if (numbers.length <= 1){
//         return [];
//     } else{
//         let lowNum = numbers[0];
//         for (let i = 1; i < numbers.length; i++){
//             numbers.map((item)=>{
//                 numbers[i] < item && numbers[i] <= lowNum ? lowNum = numbers[i] : lowNum;
//             })
//         }
//         numbers.map((item)=>{
//             newArray.push(item);
//         });
//         newArray.splice(newArray.indexOf(lowNum), 1);
//         return newArray;
//     }
//   }
//   console.log(removeSmallest([2,2,1,2,1]));

//TOP RATED SOLUTION
// function removeSmallest(numbers) {
//     let indexOfMin = numbers.indexOf(Math.min(...numbers));
//     return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
//   }



// function digitize(n) {
//     let digiStrArr = ((n.toString()).split("").reverse());
//     for (i = 0; i < digiStrArr.length; i++){
//         digiStrArr[i] = parseInt(digiStrArr[i]);
//     }
//     return digiStrArr
//   }
//   console.log(digitize('12345'));

//TOP RATED SOLUTION
// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }

//ANOTHER SOLUTION
// function digitize(n) {
//     return Array.from(String(n), Number).reverse();
//   }



// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.
function count(string) {
    let letterArray = string.match(/[a-zA-z]/g)
    return letterArray.sort();
  }
console.log(count('Llama'));

//testing a lot