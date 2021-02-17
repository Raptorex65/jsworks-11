//OYUN AKISI
//* Oyun açıldığında random olarak hecelerıne ayrılmıs bır kelıme gelecek.
//* Minimum 10 kelimelik bir oyun olacak
//* Heceler Drag and Drop yontemi ile anlamli olarak siralanacak
//* Siralama bitirildiginde kullanici onblur;an kelimeyi check edecek ve "dogru" veya "yanlis" uyarisi verilecek
/*

const words = ["javascript", "structure", "zimbabwe", "animation"];
let originalWord = getRandomWord(words);
let userWordArray = shuffleSyllableList(extractSyllables(originalWord));

//////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    document.querySelector(".wrapper").innerHTML = createSyllableContainer(pSyllableList);
});


function createSyllableContainer(pSyllableList){
    return pSyllableList.map((syllable, index) => {
        `<div id="syllable-container-${index}">
            <span>${syllable}</span>
        </div>`
    }).join("");
}

//////////////////////////////////////////////////////////////////

function getRandomWord(pwordsArray){
    return pwordsArray[Math.floor(Math.random() * pwordsArray.length)]
}

function extractSyllables(pword){
    let syllableList = [];
    let letterArray = pword.split("");
    while(letterArray.length>0){
        let extractedLetters = letterArray.splice(0, Math.floor(Math.random() * 3) + 1);
        syllableList.push(extractedLetters.join(""))
    }
    return syllableList
}

        function shuffleSyllableList(syllableList){
            return syllableList.sort(() => Math.random() - 0.5);
        }

 */
        

//////////////////////////////////////////////////////////////////////
//SORTABLE DRAG AND DROP LIBRARY
const dragArea = document.querySelector(".wrapper");
new Sortable(dragArea, {
    animation: 350
});



//DRAG AND DROP SECTION--NOT WORKING!!

const draggableElementOne = document.querySelector("#syllable-one")
draggableElementOne.addEventListener("dragstart", e =>{
    e.dataTransfer.setData("text/html", draggableElementOne.id);
});

const draggableElementTwo = document.querySelector("#syllable-two")
draggableElementTwo.addEventListener("dragstart", e =>{
    e.dataTransfer.setData("text/html", draggableElementTwo.id);
});

const draggableElementThree = document.querySelector("#syllable-three")
draggableElementThree.addEventListener("dragstart", e =>{
    e.dataTransfer.setData("text/html", draggableElementThree.id);
});

const draggableElementFour = document.querySelector("#syllable-four")
draggableElementFour.addEventListener("dragstart", e =>{
    e.dataTransfer.setData("text/html");
});



for(const dropZone of document.querySelectorAll(".drop-zone"))

dropZone.addEventListener("dragover", e => {
    e.preventDefault();
    dropZone.classList.add("drop-zone-over")
});

dropZone.addEventListener("drop", e=> {
    e.preventDefault();
    let droppedElement = null;
    if(droppedElement.id==="syllable-one"){
        droppedElement = document.getElementById("#syllable-one")
        droppedElement = e.dataTransfer.getData("text/html", droppedElement.id)


    }

    if(droppedElement.id==="syllable-two"){
        droppedElement = document.getElementById("#syllable-two")
        droppedElement = e.dataTransfer.getData("text/html", droppedElement.id)

    }

    if(droppedElement.id==="syllable-three"){
        droppedElement = document.getElementById("#syllable-three")
        droppedElement = e.dataTransfer.getData("text/html", droppedElement.id)

    }

    if(droppedElement.id==="syllable-four"){
        droppedElement = document.getElementById("#syllable-four")
        droppedElement = e.dataTransfer.getData("text/html", droppedElement.id)

    }

});


const dropZoneFirst = document.querySelector(".drop-zone second")
dropZoneFirst.addEventListener("drop", e=> {
        e.preventDefault();
        //Dropped Element
        const droppedElementId = e.dataTransfer.getData("text/html");
        const droppedElement = document.getElementById(droppedElementId)
        dropZone.appendChild(droppedElement)
        droppedElement.classList.remove("drop-zone-over")
    });
    dropReturn()

}


const dropZoneFirst = document.querySelector(".drop-zone first")
dropZoneFirst.addEventListener("drop", e=> {



const draggableElement = document.querySelector("#syllable-one")
draggableElement.addEventListener("drop", e =>{
    e.dataTransfer.setData("text/html", draggableElement.id);
});

function dropReturn(e){
        //Zone Element
        const zoneElement = document.querySelector("#syllable-two")
        e.dataTransfer.setData("text/html", zoneElement.id);
        const zoneElementId = e.dataTransfer.getData("text/html")
        zoneElement =document.getElementById(zoneElementId);
        dropZone.appendChild(zoneElement)

}


