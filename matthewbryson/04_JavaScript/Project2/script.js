var userName = window.prompt("Please enter your name");
var numOne = window.prompt("Give me a number, please.");
var numTwo = window.prompt("You're not gonna like this... but I need another number");
function nameResponse() {
    window.alert(`You are going to have a wonderful day, ${userName}`);
}
function numResponse() {
    var sum = parseInt(numOne) + parseInt(numTwo);
        window.alert(`By the way, the sum of your numbers is ${sum}.`);
}
nameResponse();
numResponse();