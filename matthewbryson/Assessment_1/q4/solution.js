function trueCounter(booleanArray) {
// define function
    var trueCount = 0;
    // intialize container to store function data
    for (var i = 0; i < booleanArray.length; i++) {
        //iteration within function
        booleanArray[i] === true ? trueCount = trueCount + 1 : trueCount;
        //check value of array element; is the value "true"? if so, add 1 to var trueCount. Otherwise, return var trueCount.
    }
    return trueCount;
    //return amount of elements that are "true".
}