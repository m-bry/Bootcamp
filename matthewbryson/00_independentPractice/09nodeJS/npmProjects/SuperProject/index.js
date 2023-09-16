const marvel = require('marvel-characters');
let marvelArray = marvel.characters;
let manArray = [];
let ironManArray = [];
 
for (let i = 0; i < marvelArray.length; i++) {
  let temp = marvelArray[i];
  if (temp.search(/^Man/gm) !== -1) {
    manArray.push(temp);
    marvelArray.splice(i, 1);
    i--;
  } else if (temp.search(/^Iron Man/gm) === -1){
    console.log(`Sorry, couldn't find anything`)
  }
}

console.log(manArray);
console.log(marvelArray.length);

for (let i = 0; i < marvelArray.length; i++) {
  let temp = marvelArray[i];
  if (temp.search(/^Iron Man/gm) !== -1) {
    ironManArray.push(temp);
    marvelArray.splice(i, 1);
    i--;
  } else if(temp.search(/^Iron Man/gm) === -1) {
    console.log(`Sorry, couldn't find anything`);
  }
}

console.log(manArray);
console.log(marvelArray.length);
console.log(ironManArray);