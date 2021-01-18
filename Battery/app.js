
//VARIABLES
const blackBattery = document.querySelector(".black"); 
const redBattery = document.querySelector(".red");
const orangeBattery = document.querySelector(".orange");
const greenBattery = document.querySelector(".green");

//BUTTONS AND COUNTER
const buttonFlip = document.querySelector(".counter-plus");
const buttonFlop = document.querySelector(".counter-minus");
const counterDisplayElem = document.querySelector('.counter-display');
let count = 0;

//EVENTLISTENERS

buttonFlip.addEventListener("click", chargethetank); 
buttonFlop.addEventListener("click", dechargethetank);


buttonFlip.addEventListener("click",()=>{
        count++;
    updateDisplay();
}) ;

buttonFlop.addEventListener("click",()=>{
        count--;
   updateDisplay();
});

//FUNCTIONS

//COUNTER DISPLAY
function updateDisplay(){
    counterDisplayElem.innerHTML = `Battery Level: ${count}` ;
    if (count>4 || count<0){
        counterDisplayElem.innerHTML = "Ooops! Only For Level";
    }
};

//BATTERY CHARGE
function chargethetank(){

        if (count === 0){
            blackBattery.classList.add("blackLevel");
        }
        if (count === 1){
            redBattery.classList.add("redLevel");
        }
        if (count === 2){
            orangeBattery.classList.add("orangeLevel");
        }
        if (count === 3){
            greenBattery.classList.add("greenLevel");
        }
    }
//BATTERY DECHARGE
function dechargethetank(){
    updateDisplay();

    if (count === 4){
        greenBattery.style.display = "none";
    } 

    if (count === 3){
        orangeBattery.style.display = "none";
    }
    if (count === 2){
        redBattery.style.display = "none";
    }
    if (count === 1){
        blackBattery.style.display = "none";
    }
}













