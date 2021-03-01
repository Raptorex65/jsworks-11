
//CHILDREN LIST SECTION
let randomNumFirst = Math.ceil(Math.random()*15);
let randomNumSecond = Math.ceil(Math.random()*15);
let resultofMultiplication = randomNumFirst*randomNumSecond;
let gameindex= 0;
let totalQuestions= 5;
let correct = 1;
let wrong = 1;
let point = 10;

const tableBody = document.querySelector("#body");
tableBody.addEventListener("click", function(pEvent){
    if(pEvent.target.dataset.player === "default"){
        showGameArea();
    }else if(pEvent.target.dataset.player === "saver"){
        addtoList()
    }
});

function addtoList(){
    let childName = document.querySelector("#firstname").value;
    let childSurname = document.querySelector("#lastname").value;
    const newLine = `
        <th scope="row">3</th>
        <td>${childName}</td>
        <td>${childSurname}</td>
        <td>                
            <button class="btn btn-primary start" data-player="default" type="button">START</button>
        </td>
        <td></td>`

      let newLinetoBody = document.createElement("tr")
      newLinetoBody.innerHTML= newLine
      let tBody = document.getElementById("body")
      tBody.appendChild(newLinetoBody)
      newLinetoBody = tBody.insertRow();
}

let correctReply=0;
let pointAcquired=0;
let wrongReply = 0;

function showGameArea(){
const divChart = document.querySelector("#chart");
const tableChart = document.createElement("table")
tableChart.innerHTML =
`<table class="table">
<thead class="table-secondary">
  <tr >
    <th scope="col">First Integer</th>
    <th scope="col"></th>
    <th scope="col">Second Integer</th>
    <th scope="col">Quess</th>
    <th scope="col">Correct</th>
    <th scope="col">Wrong</th>
    <th scope="col">Point</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody class="table-danger">
  <tr>
    <td class="random"> ${randomNumFirst++} </td>
    <td> X </td>
    <td class="random"> ${randomNumSecond++} </td>
    <td> 
      <input id="number-input" placeholder="Sonucu Giriniz" type="number" value=""> 
    </td>
    <td id="correct-number">${correctReply}</td>
    <td id="wrong-number">${wrongReply}</td>
    <td id="point-number">${pointAcquired}</td>
    <td id="td-button"><button class="btn btn-success start" data-player="default" type="button">NEXT</button></td>
  </tr>
  </tbody>
  </table>
`
tableChart.classList.add("table");
divChart.appendChild(tableChart);
document.getElementById("number-input").addEventListener("change", compareResult);
}

let givenNumber;
function compareResult(pEvent){
      if(gameindex < totalQuestions){
      givenNumber = pEvent.target.value
      evaluation();
      gameindex++
    }else {
      alert("Hakkiniz Doldu")
    }
    document.querySelector("#td-button").addEventListener("click", showGameArea)
}

function evaluation(){

  if(givenNumber == resultofMultiplication){
    correctReply =+ correct;
    pointAcquired =+ point;
    console.log(correctReply, pointAcquired)

  }else{
    wrongReply =+ wrong;
    pointAcquired =- point;
  }
}

