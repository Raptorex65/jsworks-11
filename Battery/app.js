
//VARIABLES
const buttonFlip = document.querySelector(".flip");
const buttonFlop = document.querySelector(".flop");
const redBattery = document.querySelector(".red");
const orangeBattery = document.querySelector(".orange");
const greenBattery = document.querySelector(".green");
const emptyBattery = document.querySelector(".empty"); 

//EVENTLISTENER
buttonFlip.addEventListener("click", chargethetank); 
buttonFlop.addEventListener("click", dechargethetank);

//FUNCTIONS
function chargethetank(e){
    emptyBattery.classList.add("emptyBlock");
    redBattery.classList.add("redBlock");
    orangeBattery.classList.add("orangeBlock");
    greenBattery.classList.add("greenBlock");

    const clickTime = 0;
    clickTime=e.foreach() => {clicktime += 1);
    if (clickTime === 1){
    emptyBattery.classList.add("emptyBlock");
    redBattery.classList.add("emptyBlock");
    orangeBattery.classList.add("redBlock");
    greenBattery.classList.add("orangeBlock");
    clickTime++;

    if (clickTime === 2){
    emptyBattery.classList.add("emptyBlock");
    redBattery.classList.add("emptyBlock");
    orangeBattery.classList.add("emptyBlock");
    greenBattery.classList.add("redBlock");
    clickTime++;
   
    }
    if (clickTime === 3){
    emptyBattery.classList.add("emptyBlock");
    redBattery.classList.add("emptyBlock");
    orangeBattery.classList.add("emptyBlock");
    greenBattery.classList.add("emptyBlock");
        
    }
}

function dechargethetank(){
    emptyBattery.classList.add("emptyBlock");
    redBattery.classList.add("emptyBlock");
    orangeBattery.classList.add("emptyBlock");
    greenBattery.classList.add("emptyBlock");

}
dechargethetank()


    let counterDisplayElem = document.querySelector('.counter-display');
    let counterMinusElem = document.querySelector('.counter-minus');
    let counterPlusElem = document.querySelector('.counter-plus');
    
    let count = 0;
    
    updateDisplay();
    
    counterPlusElem.addEventListener("click",()=>{
        count++;
        updateDisplay();
    }) ;
    
    counterMinusElem.addEventListener("click",()=>{
        count--;
        updateDisplay();
    });
    
    function updateDisplay(){
        counterDisplayElem.innerHTML = count;
    };
}   













