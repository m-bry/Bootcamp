var a = "Value 1";
var b = "Value 2";
b = b + ',' + a;
a = (a.substring(/[,]+\w+/g));
console.log(a,b);
