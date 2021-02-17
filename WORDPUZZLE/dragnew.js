
document.addEventListener('DOMContentLoaded', ready);
const wordsArray = ["KA", "BA", "KU", "LAK"];


function ready(e){
    e.preventDefault();

    const dropBox = document.querySelector(".drop-zone")
    const wordParts = `
    <p>"KA"</p>`
    dropBox.appendChild(wordParts);



    
    const randomButton = document.querySelector("#random")
    randomButton.addEventListener("click", randomizeWord)

}


function randomizeWord(){



console.log("SON KISM")
}
/*
        const randomIndex = Math.floor(Math.random() * wordsArray.length)

    const wordParts = `
    <span class="word-part-one" draggable="true"><p>${'wordsArray[randomIndex]'}</p> </span>
    <span class="word-part-two" draggable="true">${wordsArray[randomIndex]}  </span>
    <span class="word-part-three" draggable="true">${wordsArray[randomIndex]}  </span>
    <span class="word-part-four" draggable="true">${wordsArray[randomIndex]}  </span>`



}


        const thirdPart = document.getElementsByClassName("word-part three");
        thirdPart.innerText = wordsArray[Math.floor(Math.random() * wordsArray.length)];         
        const fourthPart = document.getElementsByClassName("word-part four");
        fourthPart.innerText = wordsArray[Math.floor(Math.random() * wordsArray.length)];       





    }

    list = list.sort(() => Math.random() - 0.5)
/*
/*

    function dragPool(event) {
        event.preventDefault();

        event.dataTransfer.setData("text", event.target.id);
      }
      
      function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
      }
      



//When clicked to random button
const randomButton = document.getElementById("random")
randomButton.addEventListener("click", randomize)

function randomize(event){
    event.preventDefault();
    let partOne = document.querySelector(".word-part one");
    partOne.innerText = wordsArray[0][0];
    console.log(partOne);





    }
*/
