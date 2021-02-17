let partTwo = document.createElement("input");
let partThree = document.createElement("input");
let partFour = document.createElement("input");
partOne.classList.add("parts")
partOne.classList.add("parts")
partOne.classList.add("parts")
partOne.classList.add("parts")

partOne.innerText = wordsArray[0][0];
partTwo.innerText = wordsArray[0][1];
partThree.innerText = wordsArray[0][2];
partFour.innerText = wordsArray[0][3];

const dropZoneTwo = document.querySelector(".drop-zone-two")
dropZoneTwo.append(partTwo)
const dropZoneThree = document.querySelector(".drop-zone-three")
dropZoneThree.append(partThree)
const dropZoneFour = document.querySelector(".drop-zone-four")
dropZoneFour.append(partFour)



//When clicked to check button


//DRAGSTART
const draggableElement = document.querySelector(".word");
draggableElement.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", draggableElement.id)
});

//When draggable element is dropped onto drop zone (DROP event)
const draggableElements = document.querySelector(".word")
draggableElements.addEventListener("drag", e => {
    e.preventDefault();
    const droppedElementId = e.dataTransfer.getData("text/plain")
    const droppedElement = document.getElementsByClassName(".word")
});

//Hovering effect for drop zone with DRAGOVER
const dropZone = document.querySelector(".drop-zone")
dropZone.addEventListener("dragover", e => {
    e.preventDefault();
    dropZone.classList.add("drop-zone--over")

});




const draggableElement = document.querySelector("#draggableElement")
draggableElement.addEventListener("dragstart", e =>{
    e.dataTransfer.setData("text/plain", draggableElement.id)
});

for(const dropZone of document.querySelectorAll(".drop-zone")) {
    dropZone.addEventListener("dragover", e=> {
        e.preventDefault();
        dropZone.classList.add("drop-zone--over");
    });
}


`<span class="word-part-two" draggable="true">${"BA"}  </span>
<span class="word-part-three" draggable="true">${"KU"}  </span>
<span class="word-part-four" draggable="true">${"LAK"}  </span>`



for(const dropZone of document.querySelectorAll(".drop-zone")){
    dropZone.addEventListener("dragover", e=>{
        e.preventDefault();

        dropZone.classList.add("drop-zone-over")
    });

    dropZone.addEventListener("dragleave", e=>{
        e.preventDefault();

        dropZone.classList.remove("drop-zone-over")

    });


    <div class="drop-zone">
    <span draggable="true" id="syllable-one">KA</span>
  </div>
  <div class="drop-zone">
    <span draggable="true" id="syllable-two">BA</span>
  </div>
  <div class="drop-zone">
    <span draggable="true" id="syllable-three">KU</span>
  </div>
  <div class="drop-zone">
    <span draggable="true" id="syllable-four">LAK</span>
  </div>
