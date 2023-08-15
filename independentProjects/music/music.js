const sharpMusicArray = [`A`,`A#`, `B`, `C`, `C#`,`D`, `D#`, `E`, `F`, `F#`, `G`, `G#`];
const flatMusicArray = [`A`,`B flat`, `B`, `C`, `D flat`,`D`, `E flat`, `E`, `F`, `G flat`, `G`, `A flat`];
const circOfFifths= [`C`, `G`, `D`, `A`, `E`, `B`, `F`, `B flat`,`E flat`, `A flat`, `D flat`, `F#`, `G flat` ]

function majFunc (rootNote) {
    const scaleRoot = musicArray.indexOf(rootNote);
    rootMajArray = [scaleRoot, (scaleRoot+2)%12, (scaleRoot+4)%12, (scaleRoot+5)%12, (scaleRoot+7)%12, (scaleRoot+9)%12, (scaleRoot+11)%12];
    rootMajArray.map((noteNum)=>{
        return console.log(musicArray[noteNum]);
    })
};
function minFunc (rootNote) {
    const scaleRoot = musicArray.indexOf(rootNote);
    rootMinArray = [scaleRoot, (scaleRoot+2)%12, (scaleRoot+3)%12, (scaleRoot+5)%12, (scaleRoot+7)%12, (scaleRoot+8)%12, (scaleRoot+10)%12];
    rootMinArray.map((noteNum)=>{
        (musicArray[noteNum]);
    })
};
majFunc(`F`);

