//Sample Data Provided By Question
const samp1 = 'This is not a string';
const samp2 = 'There was string';

//Function to compare and contrast strings and whether or not there are differences
function stringComparison(str1, str2){
//Using the split() string method to create an array of ordered chars, including spaces
    let strArray1 = str1.split(''); //Array consisitng of str1 chars
    let strArray2 = str2.split(''); //Array consisting of str2 chars
    console.log(strArray1, strArray2)
    let result = 0; //Delcare "result" variable that acts a container for amount of differences

    //If statment to account for different lengthed strings; avoids comparing null values
    if (str1.length == str2.length){ //if the lengths of the strings are equal
        for (let i = 0; i < strArray1.length; i++){ //iterate through both arrays based off the length of strArray1 (amount of chars in str1)
            strArray1[i] !== strArray2[i] ? result += 1 : result;
        }
        result; //return the result; the amount of differences
    } else if (str1.length > str2.length){ //if the length of string one is greater than length of string 2
        result += (str1.length - str2.length); //take the difference of the lengths and add them to the result variable
        for (let i = 0; i < strArray2.length; i++){ //iterate through both arrays based off the length of strArray2 (amount of chars in str2); base iteration off of smaller array
            strArray1[i] !== strArray2[i] ? result += 1 : result;
        }
        result; //return the result; the amount of differences
    } else if (str1.length < str2.length){ //if the length of string one is lesser than length of string 2
        result += (str2.length - str1.length); //take the difference of the lengths and add them to the result variable
        for (let i = 0; i < strArray1.length; i++){ //iterate through both arrays based off the length of strArray1 (amount of chars in str1); base iteration off of smaller array
            strArray1[i] !== strArray2[i] ? result += 1 : result;
        }
        result; //return the result; the amount of differences
    }
    return `There are ${result} differences`;
}

console.log(stringComparison(samp1, samp2));