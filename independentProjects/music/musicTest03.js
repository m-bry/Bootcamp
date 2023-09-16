basicAlphabet = [`A`, `B`, `C`, `D`, `E`, `F`, `G`];
const musicArray = [
    { value: 0, noteName: [`G##`, `A`, `B double flat`] },
    { value: 1, noteName: [`A#`, `B flat`, 'C double flat'] },
    { value: 2, noteName: [`A##`, `B`, `C flat`] },
    { value: 3, noteName: [`B#`, `C`, `D double flat`] },
    { value: 4, noteName: [`B##`, `C#`, `D flat`] },
    { value: 5, noteName: [`C##`, `D`, `E double flat`] },
    { value: 6, noteName: [`D#`, `E flat`, `F double flat`] },
    { value: 7, noteName: [`D##`, `E`, `F flat`] },
    { value: 8, noteName: [`E#`, `F`, `G double flat`] },
    { value: 9, noteName: [`E##`, `F#`, `G flat`] },
    { value: 10, noteName: [`F##`, `G`, `A double flat`] },
    { value: 11, noteName: [`G#`, null, `A flat`] },
];

let noteValueArray = (musicArray) => {
    let output = [];
    for (let item of musicArray){
        output.push(item.value);
    }
    return output;
};
let noteNameArray = (musicArray) => {
    let output = [];
    for (let item of musicArray){
        output.push(item.noteName);
    }
    return output;
};

const noteValues = noteValueArray(musicArray);
const noteNames = noteNameArray(musicArray);

let nValueFinder = (noteName) =>{
    let result;
    noteNames.forEach((item)=>{
        for (i = 0; i < item.length; i++){
            if (item[i] === noteName){
                result = noteNames.indexOf(item);
            }
        }
    })
    return result;
};

let vNameFinder = (noteValue) =>{
    return noteNames[noteValue]
};

let halfStep = (noteValue, direction) => {
    if (direction === `up`) {
        return (noteValue + 1)%12;
    } else if (direction === `down` && noteValue != 0) {
        return (noteValue - 1)%12;
    } else if (direction === 'down' && noteValue === 0) {
        return (noteValue + 11)%12;
    }
};

let wholeStep = (noteValue, direction) => {
    if (direction === `up`) {
        return halfStep(halfStep(noteValue, `up`), `up`);
    } else if (direction === `down`) {
        return halfStep(halfStep(noteValue, `down`), `down`);
    }
};

let minThird = (noteValue, direction) => {
    if (direction === `up`) {
        return wholeStep(halfStep(noteValue, `up`), `up`);
    } else if (direction === `down`) {
        return wholeStep(halfStep(noteValue, `down`), `down`);
    }
};

let majThird = (noteValue, direction) => {
    if (direction === `up`) {
        return wholeStep(wholeStep(noteValue, `up`), `up`);
    } else if (direction === `down`) {
        return wholeStep(wholeStep(noteValue, `down`), `down`);
    }
};

let perfFourth = (noteValue, direction) => {
    if (direction === `up`) {
        return minThird(wholeStep(noteValue, `up`), `up`);
    } else if (direction === `down`) {
        return minThird(wholeStep(noteValue, `down`), `down`);
    }
};

let triTone = (noteValue, direction) => {
    if (direction === `up`) {
        return minThird(minThird(noteValue, `up`), `up`);
    } else if (direction === `down`) {
        return minThird(minThird(noteValue, `down`), `down`);
    }
};

let PerfFifth = (noteValue, direction) => {
    if (direction === `up`) {
        return minThird(majThird(noteValue, `up`), `up`);
    } else if (direction === `down`) {
        return minThird(majThird(noteValue, `down`), `down`);
    }
};

let minSixth = (noteValue, direction) => {
    if (direction === `up`) {
        return majThird(majThird(noteValue, `up`), `up`);
    } else if (direction === `down`) {
        return majThird(majThird(noteValue, `down`), `down`);
    }
};

let majSixth = (noteValue, direction) => {
    if (direction === `up`) {
        return perfFourth(majThird(noteValue, `up`), `up`);
    } else if (direction === `down`) {
        return perfFourth(majThird(noteValue, `down`), `down`);
    }
};

let minSeventh = (noteValue, direction) => {
    if (direction === `up`) {
        return perfFourth(perfFourth(noteValue, `up`), `up`);
    } else if (direction === `down`) {
        return perfFourth(perfFourth(noteValue, `down`), `down`);
    }
};

let majSeventh = (noteValue, direction) => {
    if (direction === `up`) {
        return triTone(perfFourth(noteValue, `up`), `up`);
    } else if (direction === `down`) {
        return triTone(perfFourth(noteValue, `down`), `down`);
    }
};



let result = vNameFinder(majSeventh(0, `up`));
console.log(result);