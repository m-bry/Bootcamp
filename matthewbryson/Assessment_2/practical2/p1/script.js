// *** Please include your answer below ***

//for loop iterating thhrough specificed number range
for (i=-10; i <= 10; i++){
    //Establishing an array for defining multiples of three within given number range
    const threeArray = [];
    //another for loop to calculate multiples of three, and then push them into the array
        for (j=-3; j <= 3; j ++){
            threeArray.push(3*j);
        }
    //if then statement for comparing numbers being iterated through...
    //I would call this a longwinded filter. There is probably a better, more universal way to  do this.
    if (threeArray.includes(i)){
        //if the number is within numbers in the array, do nothing.
    } else {
        //if the number is not within numbers in the array, console log the number.
        console.log(i);
    }
}