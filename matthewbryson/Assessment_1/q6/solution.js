function vowelCounter(input){
    var vowelCount = 0;
    // Container for the amount of vowels in a string
    var vowels = ['A', 'E', 'I', "O", "U"];
    // Defining what a 'vowel' is
    var letterContainer = input.toUpperCase().split('');
    // A new array holding the string as characters, uppercasing the letters to avoid issues with lowercase and uppsercase letters

    for (let i = 0; i < vowels.length; i++) {
    //iterating which vowel is being searched for
        for (let ii = 0; ii < letterContainer.length; ii++) {
        //iterating which letter of the string is being checked
            vowels[i] === letterContainer[ii] ? vowelCount = vowelCount + 1 : vowelCount;
            //Is the vowel being looked for the same as the letter we are looking at? If so, add one to var vowelCount. Otherwise, return var vowelCount.
        }
    }
    return vowelCount;
}