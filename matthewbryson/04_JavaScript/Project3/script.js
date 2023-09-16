var numStringOne = window.prompt("Give me a number, please.");
var numStringTwo = window.prompt("You're not gonna like this... but I need another number");
var numStringThree = window.prompt("Hey... I'm not trying to be a dick, but for this to work I need a third number.");
var stringArray = [numStringOne, numStringTwo, numStringThree];
var numSum = 0;
for (var i = 0; i < stringArray.length; i++) {
    numSum = numSum + (parseInt(stringArray[i]));
}

window.alert(`The sum of all of your numbers is ${numSum}.`);

