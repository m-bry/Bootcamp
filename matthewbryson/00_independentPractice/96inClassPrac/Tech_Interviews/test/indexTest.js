// TEST
const assert = require('assert');
const mockFunc = require('./../index')

// Code without iteration
function mockFuncNoIter(item) {
    if (item % 5 == 0 && item % 7 != 0){
        return ('Doggy');
    } else if (item % 7 == 0 && item % 5 != 0){
        return 'Horse';
    } else if (item % 7 == 0 && item % 5 == 0){
        return 'Doggy Horse';
    } else {
        return item;
    }
}

//Smoke Test for Code without Iteration
//Only testing maths, don't need to check for if input is not specified data type.
console.log(mockFuncNoIter(5)) // expect 'Doggy'
console.log(mockFuncNoIter(7)) // expect 'Horse'
console.log(mockFuncNoIter(35)) // expect 'Doggy Horse'
console.log(mockFuncNoIter(36)) // expect '36'

//Mocha Tests for mockFuncNoIter
describe('Testing mockFuncNoIter', ()=>{
    it(`Expected Output: 'Doggy'`, ()=>{
        assert.strictEqual(mockFuncNoIter(5), 'Doggy')
    })
    it(`Expected Output: 'Horse'`, ()=>{
        assert.strictEqual(mockFuncNoIter(7), 'Horse')
    })
    it(`Expected Output: 'Doggy Horse'`, ()=>{
        assert.strictEqual(mockFuncNoIter(35), 'Doggy Horse')
    })
    it(`Expected Output: 36`, ()=>{
        assert.strictEqual(mockFuncNoIter(36), 36)
    })
})
console.log(mockFunc())






