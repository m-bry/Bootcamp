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

let noteValues = noteValueArray(musicArray);
let noteNames = noteNameArray(musicArray);

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

let result = vNameFinder(0);
console.log(result)