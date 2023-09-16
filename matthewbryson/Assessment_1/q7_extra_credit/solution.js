function atomizer(input){
//It's more a proliferator, but atomizer sounded cooler 
    var finalResult = '';
    //Declaring where the final result will be held
    var atomizedNumArray = input.toString().split('');
    //Taking input and turning it into a string, then seperatating the string into single characters
    for (let i = 0; i < atomizedNumArray.length; i++){
    //Standared iteration
        atomizedNumArray[i] = (Math.pow((parseInt(atomizedNumArray[i])), 2)).toString();
        //taking the seprated numbers, converting them back into numbers, squaring the result, converting it back into a string, a storing the new value back in it's original variable.
        finalResult = finalResult.concat(atomizedNumArray[i]);
        //Taking the empty string in finalResult, concatenating the string values in atomizedNumArray elements to it, and then storing the new string in the finalResult variable.
    }
    return finalResult;
    //return the final string stored in finalResult.
}