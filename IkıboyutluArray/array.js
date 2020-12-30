/*
*1- Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
*2- Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
*3- Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
*4- Sinifin hangi derste en iyi nota sahip oldugunu gostermesi (Burdaki amac sinifin ders ortalamalarinin karsilastirilmasidir. )
*5- Sinifin en kötü oldugu dersi gostermesi (Burdaki amac sinifin ders ortalamalarinin karsilastirilmasidir. )
*6- Tüm derslerin en iyi ögrencilerini bulmasi
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


// 1-DERS ORTALAMALARININ  BULUNMASI--- BİRİNCİ YÖNTEM
    let mathScores = [];
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

// DERS ORTALAMALARININ İNDEKSE TANIMLANMIŞ FONKSİYONLA BULUNMASI-- İKİNCİ YÖNTEM
const math_index = 1;
const german_index = 2;
const english_index = 3;
const geo_index = 4;
const studentName = 0;


function findAverageNote(math_index, everyItems) {
    let totalNote = 0;
    let averageNote = 0;
    for (let index = 0; index < everyItems.length; index++) {
        totalNote += everyItems[index][math_index]
        averageNote = Math.round(totalNote / everyItems.length);
    }
    return averageNote;
}

function renderAveregeNote(pLessonName, pAverageNote) {
    console.log(`${pLessonName} Dersinin Not Ortalamasi : ${pAverageNote}`)
}

//Matematik Not Ortalamasinin Bulunmasi ve Ekrana Yazdirilmasi
let mathAverageNote = findAverageNote(math_index, notes);
renderAveregeNote("Matematik", mathAverageNote );

//Almanca Not Ortalamasinin Bulunmasi ve Ekrana Yazdirilmasi
let germanAverageNote = findAverageNote(german_index, notes);
renderAveregeNote("Almanca", germanAverageNote );

//Ingilizce Not Ortalamasinin Bulunmasi ve Konsola Yazdirilmasi
let englishAverageNote = findAverageNote(english_index, notes);
renderAveregeNote("Ingilizce", englishAverageNote)

//Cografya Not Ortalamasinin Bulunmasi ve Konsola Yazdirilmasi
let geoAverageNote = findAverageNote(geo_index, notes);
renderAveregeNote("Cografya",geoAverageNote );


// 2-HERHANGİ BİR DERSTEN 70 NOT ÜZERİNDE ALANLARIN LİSTESİNİN BULUNMASI
function findOverBorderStudent(pNoteList, pLessonIndex, pBorderNote) {
    let passedStudentList = [];
    for (let index = 0; index < pNoteList.length; index++) {
        if (pNoteList[index][pLessonIndex] > pBorderNote) {
            passedStudentList.push(pNoteList[index][studentName] + " " + pNoteList[index][pLessonIndex]);
        }
    }
    return passedStudentList;
}

function renderPassedStudents(pLessonName, pBorderNote, pPassedStudentList) {
    console.log(`${pLessonName} Dersinden ${pBorderNote} üzerinde alan ögrenciler : ${pPassedStudentList}`)
}

//Mathematik Dersinden 70 üzeri alan ögrencilerin listesi
let mathPassedStudentList = findOverBorderStudent(notes, math_index, 70);
renderPassedStudents("Matematik", 70, mathPassedStudentList);

//Almanca Dersinden 70 üzeri alan ögrencilerin listesi
let germanPassedStudentList = findOverBorderStudent(notes, german_index, 70);
renderPassedStudents("Almanca", 70, germanPassedStudentList);

//Ingilizce Dersinden 70 üzeri alan ögrencilerin listesi
let englishPassedStudentList = findOverBorderStudent(notes, english_index, 70);
renderPassedStudents("Ingilizce", 70, englishPassedStudentList);

//Cografya Dersinden 70 üzeri alan ögrencilerin listesi
let geoPassedStudentList = findOverBorderStudent(notes, geo_index, 70);
renderPassedStudents("Cografya", 70, geoPassedStudentList);


// TÜM DERSLERDEN ORTALAMANIN ÜZERİNDE NOT ALAN ÖGRENCİLERİN BULUNMASI
function findOverAverageStudentList(pNoteList, pLessonIndex, pAverageNote) {
    let overAverageStudent = [];
    for (let index = 0; index < pNoteList.length; index++) {
        if (pNoteList[index][pLessonIndex] > pAverageNote) {
            overAverageStudent.push(pNoteList[index][studentName] + " " + pNoteList[index][pLessonIndex]);
        }
    }
    return overAverageStudent;
}

// Ortalamanin üzerinde olan ögrencilerin listesinin konsola yazdirilmasi
function renderOverAverageStudent(pAverageNote, pLessonName, pOverAverageStudent) {
    console.log(`Ortalamasi ${pAverageNote} olan ${pLessonName} dersinden ortalamanin üzerinde not alan ögrenciler: ${pOverAverageStudent}`)
}

//Mathematik Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let mathOverAverageStudentList = findOverAverageStudentList(notes, math_index, mathAverageNote);
renderOverAverageStudent(mathAverageNote, "Mathematik", mathOverAverageStudentList);

//Almanca Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let germanOverAverageStudentList = findOverAverageStudentList(notes, german_index, germanAverageNote);
renderOverAverageStudent(germanAverageNote, "Almanca", germanOverAverageStudentList);

//Ingilizce Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let englishOverAverageStudentList = findOverAverageStudentList(notes, english_index, englishAverageNote);
renderOverAverageStudent(englishAverageNote, "Ingilizce", englishOverAverageStudentList);

//Cografya Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let geoOverAverageStudentList = findOverAverageStudentList(notes, geo_index, geoAverageNote);
renderOverAverageStudent(geoAverageNote, "Cografya", geoOverAverageStudentList);


// 3-DERSİN EN YÜKSEK NOTUNU ALANIN BULUNMASI
function findMaxNoteStudent(pNoteList, pLessonIndex) {
    let lessonNotes = [];
    for (let index = 0; index < pNoteList.length; index++) {
        lessonNotes.push(pNoteList[index][pLessonIndex])
    }
    let maxNote = lessonNotes[0];
    let maxNoteStudent = [];
    for (let index = 0; index < pNoteList.length; index++) {
        if (pNoteList[index][pLessonIndex] >= maxNote) {
            maxNote = pNoteList[index][pLessonIndex]
        }
    }
    for (let index = 0; index < pNoteList.length; index++) {
        if (pNoteList[index][pLessonIndex] === maxNote) {
            maxNoteStudent.push(pNoteList[index][studentName] + " " + maxNote);
        }
    }
    return maxNoteStudent;
}

function renderMaxNoteStudent(pLessonName, pMaxNoteStudent) {
    console.log(`${pLessonName} dersinden en yüksek notu alan ögrenci: ${pMaxNoteStudent}`)
}

//Mathematik Dersinden En Yüksek Notu Alan Ögrencinin Bulunmasi ve Konsola Yazdirilmasi
let mathMaxNoteStudent = findMaxNoteStudent(notes, math_index);
renderMaxNoteStudent("Mathematik", mathMaxNoteStudent);

//Almanca Dersinden En Yüksek Notu Alan Ögrencinin Bulunmasi ve Konsola Yazdirilmasi
let germanMaxNoteStudent = findMaxNoteStudent(notes, german_index);
renderMaxNoteStudent("Almanca", germanMaxNoteStudent);

//Ingilizce Dersinden En Yüksek Notu Alan Ögrencinin Bulunmasi ve Konsola Yazdirilmasi
let englishMaxNoteStudent = findMaxNoteStudent(notes, english_index);
renderMaxNoteStudent("Ingilizce", englishMaxNoteStudent);

//Cografya Dersinden En Yüksek Notu Alan Ögrencinin Bulunmasi ve Konsola Yazdirilmasi
let geoMaxNoteStudent = findMaxNoteStudent(notes, geo_index);
renderMaxNoteStudent("Cografya", geoMaxNoteStudent);


//4-SINIFTAKİ ÖGRENCİLERDEN DERSLERDE EN YÜKSEK NOTU ALAN ÖGRENCİLERİN BULUNMASI
function findMostSuccessfulLesson(pMathAverage, pGermanAverage, pEnglishAverage, pGeoAverage) {
    let averageList = [pMathAverage, pGermanAverage, pEnglishAverage, pGeoAverage]
    let mostSuccessfulNote = Math.max.apply(null, averageList);
    let mostSuccessfulLesson = null
    if (mostSuccessfulNote === pMathAverage) {
        mostSuccessfulLesson = "Mathematik"
    } else if (mostSuccessfulNote === pGermanAverage) {
        mostSuccessfulLesson = "Almanca"
    } else if (mostSuccessfulNote === pEnglishAverage) {
        mostSuccessfulLesson = "Ingilizce"
    } else if (mostSuccessfulNote === pGeoAverage) {
        mostSuccessfulLesson = "Cografya"
    }
    console.log(`Sinifin en basarili oldugu ders ${mostSuccessfulLesson}, not ortalamasi ${mostSuccessfulNote}`)
}


// 5-SINIFIN EN BAŞARILI OLDUĞU DERSİ NOT ORTALAMASINA GÖRE BULAN FONKSİYON
function findMostSuccessfulLesson(pMathAverage, pGermanAverage, pEnglishAverage, pGeoAverage) {
    let averageList = [pMathAverage, pGermanAverage, pEnglishAverage, pGeoAverage]
    let mostSuccessfulNote = Math.max.apply(null, averageList);
    let mostSuccessfulLesson = null
    if (mostSuccessfulNote === pMathAverage) {
        mostSuccessfulLesson = "Mathematik"
    } else if (mostSuccessfulNote === pGermanAverage) {
        mostSuccessfulLesson = "Almanca"
    } else if (mostSuccessfulNote === pEnglishAverage) {
        mostSuccessfulLesson = "Ingilizce"
    } else if (mostSuccessfulNote === pGeoAverage) {
        mostSuccessfulLesson = "Cografya"
    }
    console.log(`Sinifin en basarili oldugu ders ${mostSuccessfulLesson}, not ortalamasi ${mostSuccessfulNote}`)
}

//Sinifin En Basarili Oldugu Dersin Bulunmasi ve Konsola Yazdirilmasi
findMostSuccessfulLesson(mathAverageNote, germanAverageNote, englishAverageNote, geoAverageNote);

// 6-SINIFIN EN BAŞARISIZ OLDUĞU DERSİ NOT ORTALAMASINA GÖRE BULAN FONKSİYON
function findLessSuccessfulLesson(pMathAverage, pGermanAverage, pEnglishAverage, pGeoAverage) {
    let averageList = [pMathAverage, pGermanAverage, pEnglishAverage, pGeoAverage]
    let lessSuccessfulNote = Math.min.apply(null, averageList);
    let lessSuccessfulLesson = null
    if (lessSuccessfulNote === pMathAverage) {
        lessSuccessfulLesson = "Mathematik"
    } else if (lessSuccessfulNote === pGermanAverage) {
        lessSuccessfulLesson = "Almanca"
    } else if (lessSuccessfulNote === pEnglishAverage) {
        lessSuccessfulLesson = "Ingilizce"
    } else if (lessSuccessfulNote === pGeoAverage) {
        lessSuccessfulLesson = "Cografya"
    }
    console.log(`Sinifin en basarisiz oldugu ders ${lessSuccessfulLesson}, not ortalamasi ${lessSuccessfulNote} `)

}

//Sinifin En Az Basarili Oldugu Dersin Bulunmasi ve Konsola Yazdirilmasi
findLessSuccessfulLesson(mathAverageNote, germanAverageNote, englishAverageNote, geoAverageNote);