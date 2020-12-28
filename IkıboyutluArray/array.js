/*
- Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
- Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
- Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
- Sinifin hangi derste en iyi nota sahip oldugunu gostermesi (Burdaki amac sinifin ders ortalamalarinin karsilastirilmasidir. )
- Sinifin en kötü oldugu dersi gostermesi (Burdaki amac sinifin ders ortalamalarinin karsilastirilmasidir. )
- Tüm derslerin en iyi ögrencilerini bulmasi
*/

const notes = [
    ["Hans", 80, 90, 10, 50], 
    ["Ulrich", 94, 36, 76, 74], 
    ["Olaf", 30, 60, 34, 78], 
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];


 let scoresSeventyup = []
let item = null;
function isFound(item) {
    return item.found;
};

for (let i = 0; i < notes.length; i++) {
    item = notes[i];
    if (item.found) {
        scoresSeventyup 
        popularitySum = item.popularity + popularitySum;
        itemsFound = itemsFound + 1;
    }
 */


/* for (let mammal of mammals) {
    console.log(mammal);
}
 */



   /*  let mathScores = [];
    let firstAverage = 0;
    let secondAverage = 0;
    let thirdAverage = 0;
    let fourthAverage = 0;


notes.map( () => {
    mathScores = (notes[0][1]+notes[1][1]+notes[2][1]+notes[3][1]+notes[4][1]+notes[5][1]+notes[6][1]+notes[7][1]);
    firstAverage = mathScores / notes.length;
    return notes;
});


let gerScores = [];

notes.map( () => {
    gerScores = (notes[0][2]+notes[1][2]+notes[2][2]+notes[3][2]+notes[4][2]+notes[5][2]+notes[6][2]+notes[7][2]);
    secondAverage = gerScores / notes.length;
    return notes;
});

let engScores = [];

notes.map( () => {
    engScores = (notes[0][3]+notes[1][3]+notes[2][3]+notes[3][3]+notes[4][3]+notes[5][3]+notes[6][3]+notes[7][3]);
    thirdAverage = engScores / notes.length;
    return notes;
});

let geoScores = [];

notes.map( () => {
    geoScores = (notes[0][4]+notes[1][4]+notes[2][4]+notes[3][4]+notes[4][4]+notes[5][4]+notes[6][4]+notes[7][4]);
    fourthAverage = geoScores / notes.length;
    return notes;
});

console.log("Matematik Ortalaması:"+ firstAverage,"Almanca Ortalaması:"+ secondAverage,"İngilizce Ortalaması:"+ thirdAverage,"Cografya Ortalaması:"+ fourthAverage);

 */

    
