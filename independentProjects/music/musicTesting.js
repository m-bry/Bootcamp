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
    { value: 11, noteName: [null, `G#`, `A flat`] },
];
function majFunc(rootNote) {
    const naturalNote = rootNote.slice(0);
    let evalArray1 = [];
    for (var key in musicArray) {
        evalArray1.push(musicArray[key].noteName.indexOf(rootNote));
    }

    scaleRoot = (musicArray[evalArray1.indexOf(1)].value);
    noteValueArray = [scaleRoot, (scaleRoot + 2) % 12, (scaleRoot + 4) % 12, (scaleRoot + 5) % 12, (scaleRoot + 7) % 12, (scaleRoot + 9) % 12, (scaleRoot + 11) % 12];
    noteValueArray.forEach((item) => {
        let evalArray2 = [];
        for (var key in musicArray) {
            if (item === musicArray[key].value) {
                evalArray2.push((musicArray[key].noteName));
            }
        }
        console.log(evalArray2)
    })
};

majFunc(`A`);