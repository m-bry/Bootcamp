// // question #2
// function smallNum(sampleArray) {
//     newArray = sampleArray.sort((a,b)=>{return a-b});
//     return newArray[0];
// }
// console.log(smallNum([51, -24, -408]));

//Question 13
// function DNA_RNA(DNA_string) {

//     // Split string into an array of individual characters
//     let DNA_stringArray = DNA_string.split("");
//     // Define an empty array to push individualized converted characters
//     let RNA_Array = [];

//     // Iterate through array to replace any instance of "T" to "U"
//     for (i = 0; i < DNA_stringArray.length; i++) {

//         // If the observed array element is exactly "T"
//         if (DNA_stringArray[i] === "T") {
//             // Then, push "U" to the RNA_Array
//             RNA_Array.push('U');
        
//         // Otherwise, push the observed element into RNA_Array
//         } else {
//             RNA_Array.push(DNA_stringArray[i]);
//         }
//     }
//     // After the array has been iterated through, return the RNA_Array joined into a string with no separators
//     return RNA_Array.join('');
// }

// console.log(DNA_RNA('GCATGCAT'));
// // Output: "GCAUGCAU"


function sentBuilder(wordArray) {

    // Iterate through the array starting at the SECOND array element
    for (i = 1; i < wordArray.length; i++){
        
        // Convert everything but the first array element to lowercase
        wordArray[i] = wordArray[i].toLowerCase();
    }

    // Return the array joined into a string
    return (wordArray.join(' '));

}

console.log(sentBuilder(["How", "Now", "Brown", "Cow"]));