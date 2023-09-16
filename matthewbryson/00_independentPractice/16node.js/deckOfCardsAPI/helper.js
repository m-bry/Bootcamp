// we know we have an array of object
// how do we simulate dealing cards one at a time
// player who has a hand computer will have a hand
exports.dealCards = (arr) => {
    // arr is an array of 10 objects
    let counter = 0;
    let playerHand = [];
    let computerHand = [];
    arr.forEach(el => {
        if (counter % 2 === 0){
            playerHand.push(el);
        } else {
            computerHand.push(el);
        }
        counter++;
    })




    return [playerHand, computerHand];
};

// need a function that takes an array
// and sorts values in ascendent order
exports.handSorter = (arr) => {
    return arr.sort((a, b)=>{return a.value - b.value});
};

// build a function that converts values equally
// @passes in array of objects
exports.valueConvertor = (arr) => {
    let newCardArray = arr.map((el) => {
      switch (el.value) {
        case "JACK":
          el.value = 11;
          break;
        case "QUEEN":
          el.value = 12;
          break;
        case "KING":
          el.value = 13;
          break;
        case "ACE":
          el.value = 14;
          break;
        default:
          el.value = Number(el.value);
      }
      return el;
    });
    return newCardArray;
  };