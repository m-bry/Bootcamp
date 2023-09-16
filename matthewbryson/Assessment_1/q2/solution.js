function negativeNancy(num) {
//no matter what you put in, it'll be negative.
    var result = 0 //intialize container to store result data
    num > 0 ? result = num - (num*2) : result = num;
    // is num greater than 0? If so, subtract num*2 from num and store result in var result. Otherwise, store num in var result.
    return result;
    // return data stored in var result.
}