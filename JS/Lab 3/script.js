//Solution
//document.querySelector("li:nth-of-type(2)").
//setAttribute("class", "completed");

//Solution ("let" could be "var")
//let secondItem = document.querySelector("li:nth-of-type(2)");
//secondItem.setAttribute("class", "completed");

//Alternative Solution
//document.querySelectorAll("li")[1].
//setAttribute("class", "completed");

//document.getElementsByTagName("ul")[0].
//addEventListener("click", () => {
//    console.log("I have been clicked")
//})

//document.querySelectorAll("ul li")[1].
//addEventListener("click", function(){
//    console.log("I have been clicked!!")
//})

var secondListItem = document.querySelectorAll("ul li");

listItems.forEach((element) => {
    item.addEventListner("click", () => {
        console.log(element.item.textContent);
    })
});