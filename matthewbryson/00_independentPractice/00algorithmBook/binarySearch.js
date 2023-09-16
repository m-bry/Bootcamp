function binarySearch(array, value) {
    let low = 0;
    let high = array.length - 1;
    
    while (low <= high) {
        let guess = Math.floor((low + high) / 2);
        
        if (array[guess] === value) {
            return guess;
        } else if (array[guess] < value) {
            low = guess + 1;
        } else {
            high = guess - 1;
        }
    }
    
    return -1; // Value not found
}

let newArray = []; 
for (let i = 1; i <= 100; i++) {
   newArray.push(i);
}

console.log(binarySearch(newArray, 43));