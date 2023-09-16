// *** Please include your answer below ***
const exampleString = "A quick brown fox jumps over the lazy dog";
//I've done this before for a codewars thing. Got caught up at a gig, wasn't able to devote more time to it... Almost got it I feel...


let longestString = (string) =>{
    let tempArray = string.split(' ');
    let ans = tempArray[0];
    for (i = 0; i <= tempArray.length; i++){
        let testArray = (tempArray[i])..split(' ');
        if ((testArray.length) >= ans) {
            ans = tempArray[i];
        } else if ((testArray.length) < ans){
            //Do nothing.
        }
    }
    return ans;
}

console.log(longestString(exampleString))