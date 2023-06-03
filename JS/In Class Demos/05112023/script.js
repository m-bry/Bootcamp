//var hour = 18;

//if (hour < 12) {
//    document.write("good morning");
//} else if (hour > 12 && hour < 17) {
//    document.write("good afternoon");
//} else {
//    document.write("good evening");
//}
//var age = 18;

//var result = age >= 21? "Get drunk" : "Dats illegal bruh";
//document.write(result);

//var result = age < 25
//?'not old enough'
//: age > 30
//?'Ur good chief'
//:'I need to card ya bro';
// document.write(result);

//var count = 1;
//while(count < 11){
//    document.write("count is" + count)
//   count++;
//}
//var num = 1;

//while (num <= 99){
//    document.write(num + " ");
//    num = num + 2;
//}

//function fullGreeting(age, name) {
//    return `Hi, ${name}, I believe you are ${age} years old.`;
//}
//document.write(fullGreeting(27, 'Jenny'));
//var theAge = 27;
//var theName = "Jenny";

//console.log(fullGreeting(27, "Jenny"));
//function area(length = 0, width = 0){
//    return (length*width)
//}
//document.write(area(10, 2));

//function even(number) {
    //if (number % 2 > 0){
    //    return false;
    //} else {
    //    return true;
    //}}

    //function even(number) {
    //    return number % 2 === 0 ? true :
     //   false;
    //}

//function hello(){
//    //local scope
//    var blah = "It's early in the morning";
//    console.log(blah);
//}

//hello()
//console.log(blah);

//function hello (){
//    document.write("Will you be my friend?");
//    document.write("Please? I'll give you money!");
//}

//setInterval(hello, 1000);

//let id = setInterval(hello, 4000);

//console.log(id)

//setTimeout(
//    () = clearInterval(id), 20000);
//var f1 = () => {
//    console.log("this is where stuff happens");
//}
// var f1 = stuff => (
//    console.log("this is another way to do things");
// )

//var f1 = stuff => (
//    "this is where" + stuff + " happens"
//)

//console.log(f1("magic"));

///var num = [1, 2, 3, 4, 5];

//var names = ['Reed', 'Susan', 'Ben', 'Johnny', 'Franklon'];
//document.write(names[0]);

//var pets = ['Moxxi', 'Pickle', 'Hootchie'];

//pets[0]
//pets[1]
//pets[2]
//pets.toString();
//var person = {
//    name: "Walter White",
//    age: 50,
//    city: "Alburqurque",
//    hobbies: "Cooking"
//}

//var person = {}

//person.name = "Walter White";
//person.age = 50;
//person.city = "Alburquerque";
//person.hobbies = "Cooking"

//var person = {
//    name: "Walter White";
//    age: 50,
//    family: ["Skylar", "Flynn", "Holly"],
//    city: "Alburqurque",
//    smart: true,
//    assosciates: {
//        friend: "Jesse",
//        enemy: "Gus"
//    }
//    hobbies: "Cooking"
//}

//var posts = [
//    {
//        title: "How to cook the perfect scrambled eggs";
//        author: "Bob Odenkirk",
//        comments: ["The secret it lots of butter", "Will this raise me cholesterol?"]
//    },
//    {
//        title: "Eggs are cheap, quick, and easy",
//       author: "Bryan Cranston",
//        comments: ["What if I don't have a spatula?", "Ilove butter.", "Salt and pepper are the ONLY spices you need"]
//    }
//]

//posts[0]. author;
//posts[1].comments[1];

//var person = {
//    fname: "Scott",
//    lname: "Lang",
//    age: 40,
//    isMarried: true,
//''    numOfChildren: 1
//}

//var {fname, lname, age, isMarried, numofChildren} = person;
//we are making variables with keys as the name
