
let miladiValueDate = document.getElementById("miladi");
let hicriDate = document.getElementById("hicri");


document.addEventListener("DOMContentLoaded", miladi);

const clickButton = document.getElementById("buton");
clickButton.addEventListener("click", dateTransform);


function miladi(){
let currentDate = new Date()
miladiValueDate.value = currentDate
dateTransform(currentDate);
}

function dateTransform(currentDate){
//let miladiDate = new Date()

let day = currentDate.getDate();
let month = currentDate.getMonth();

let miladiYear = (new Date()).getFullYear();
let hicriYear = Math.round((miladiYear - 622) * (33 / 32));

let hicriYear = currentDate.getFullYear();
let hicriFullDate = `${day}, ${month}, ${hicriYear}`
hicriDate.value = hicriFullDate
console.log(hicriFullDate)
}