// *** Please include your answer below ***

//Example Array
exArray = [3, 78, 99, 54, 6, 101, 10, 24, 20];

//function
function secondHiLo(array){
    //Sort inserted array from lowest to highest, then store in a new array.
    tempArray = array.sort((a,b)=>{return a-b});
    //Define the returned array as the second lowest and the second highest numbers in the sorted array.
    ansArray = [(tempArray[1]), (tempArray[tempArray.length-2])];
    //return the ansArray, this contains the second lowest adn second highest number.
    return console.log(ansArray);
}
 secondHiLo(exArray);