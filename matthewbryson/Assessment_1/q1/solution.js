function posIntSum(num) {
    var sum = 0; //initialize container to store final result data

    //iterate through array and store return value in var sum
    for (var i = 0; i < num.length; i++) {
        num[i] > 0 ? sum = sum + num[i] : sum;
        //is array element greater than zero? If so, add array element in var sum. Otherwise, return sum.
    } 
    return sum;
    //return the sum after iteration
}