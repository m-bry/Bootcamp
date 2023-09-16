//var hisDog = 'Atlas';

//immediately invoked function expression (IIFE)
//(function() {
//    var myDog = 'theo'
//    console.log(`My dog ${myDog} is very awesome!`)
//    console.log(`His dog, ${hisDog} many dogs`)
//    console.log('too many dogs')
//}())
//Tricking the computer to run a function without a name

//console.log(`What's my ]dog's name? Was it ${myDog}`)
//function greetings(){
//    for(var i = 0; i <5: i++){
//        console.log(i);
//    }
//greetings()
//}

//if(1 === 1){
//    var car = 'Lexus';
//}
//var a = 5
//var b = a
//a = 12
//console.log('b is', b)
//var a = {name: 'oranges', quantity: 12}
//var b = a
//a.quanitity = 6
//console.log(b)

//var a = {name: 'oranges', quantity 12}
//var b = Object.create(a)
//a.quantity = 6
//console.log(b.quantity)
//var b = ['1', '2', '3',]
//var c =  Array(1, 2, 3)
//console.log(b,c)
//var a = {name:'oranges', quantity: 12}
//var b = object.create(a)
//a.quantity = 6;

//var a = {name: 'ACC', city: 'Austin'}
//var b = {name: 'ACC', city: 'Austin'}
//console.log(JSON.stringify(A) === JSON.stringify(B))

//var c = JSON.parse(JSON.stringify(personA))
//var d = {...b}
//console.log(c === b)

var obj1 = {
    name: 'john',
    age: 20,
    country: 'USA'
}

var obj2 = {..obj1, city: 'New York'}

console.log(obj2)




