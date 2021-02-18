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

document.addEventListener("DOMContentLoaded", getRandomWord);

    function getRandomWord(pwords){
        return pwords[Math.floor(Math.random() * words.length)]
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
    
    function shuffleSyllableList(psyllableList){
        return psyllableList.sort(() => Math.random() - 0.5);
    }

    document.querySelectorAll(".drop-zone").innerHTML = createSyllableContainer(psyllableList);

    function createSyllableContainer(psyllableList){
        return psyllableList.map((syllable) => {
            `<span id="syllable">${syllable}</span>`
        }).join("");
    }
//////////////////////////////////////////////////////////////////////

//DRAG AND DROP SECTION--

document.addEventListener('DOMContentLoaded', (e) => {

function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragEnd(e) {
    this.style.opacity = '1';

    items.forEach(function (item) {
        item.classList.remove('over');
        });
        }
        function handleDragOver(e) {
        if (e.preventDefault) {
        e.preventDefault();
        }
        return false;
        }
        function handleDragEnter(e) {
        this.classList.add('over');
        }
        function handleDragLeave(e) {
        this.classList.remove('over');
        }
    
        function handleDrop(e) {
            e.stopPropagation();
            if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
            }
            return false;
        }
        
    let items = document.querySelectorAll('.wrapper .drop-zone');
    items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('dragend', handleDragEnd, false);
    item.addEventListener('drop', handleDrop, false);

    });
});

/////////////////////////////////ALTERNATIF OLARAK
//SORTABLE DRAG AND DROP LIBRARY
/*
const dragArea = document.querySelector(".wrapper");
new Sortable(dragArea, {
    animation: 350
});

*/




