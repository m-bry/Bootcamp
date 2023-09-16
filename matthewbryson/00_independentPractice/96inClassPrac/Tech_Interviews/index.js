// "Using JavaScript, write a program that returns the numbers from 5 to 100. 
// But for multiples of 5 print “Doggy” instead of the number and for the multiples of 7 print “Horse”. 
// For numbers which are multiples of both 5 and 7 log “Doggy Horse”.You have 25 min.
// Wrap this program into a function that you can call from a console.log (function should only return the value)



function mockFunc() {
    let mockArray = [];
    for (let i = 5; i <= 100; i++){
        if (i % 5 == 0 && i % 7 != 0){
            mockArray.push('Doggy');
        } else if (i % 7 == 0 && i % 5 != 0){
            mockArray.push('Horse');
        } else if (i % 7 == 0 && i % 5 == 0){
            mockArray.push('Doggy Horse')
        } else{
            mockArray.push(i);
        }
    }
    // mockArray.forEach((item)=>console.log(item));
    return mockArray;
}
mockFunc();

module.exports = mockFunc;