
let suspectLocoNumber = 3;
let searchLocoNumber = 5;
let scores = [100, 80, 60, 40];

// Puanlama fonksiyonu
function mySample() {
    var text;
    var guessNumber = prompt("Select a wagoon number until 10 to find the suspect!", "3");
    switch(guessNumber) {
     case (searchLocoNumber === suspectLocoNumber && tryNumber === 0):
       text = "Congrats! you found the suspect at first shot:', 100, 'points'";
       break;
     case (searchLocoNumber === suspectLocoNumber && tryNumber === 1):
       text = "Congrats! you found the suspect at second shot:', 80, 'points'";
       break;
     case (searchLocoNumber === suspectLocoNumber && tryNumber === 2):
        text = "Congrats! you found the suspect at third shot:', 60, 'points'";
       break;
    case (searchLocoNumber === suspectLocoNumber && tryNumber === 3):
        text = "Congrats! you found the suspect at third shot:', 40, 'points'";
        break;
     default:
       text = "You finished your FOUR chances to find the suspect and he escaped the train!!..";
     }
     document.getElementById("example").innerHTML = text;
   }

//Yönlendirme Döngüsü

for (let tryNumber = 0; tryNumber < scores.length; tryNumber++){

    if (searchLocoNumber > suspectLocoNumber && tryNumber === 0){
        console.log('Try ONE MORE looking at the FRONT wagoons');
    } else (searchLocoNumber < suspectLocoNumber && tryNumber === 0)
        console.log('Try ONE MORE looking at the BACK wagoons');        
    if  (searchLocoNumber > suspectLocoNumber && tryNumber === 1){
        console.log('Try SECOND MORE looking at the FRONT wagoons');
    } else (searchLocoNumber < suspectLocoNumber && tryNumber === 1)
        console.log('Try SECOND MORE looking at the BACK wagoons');
    if (searchLocoNumber > suspectLocoNumber && tryNumber === 2){
        console.log('Try THIRD MORE looking at the FRONT wagoons');
    } else (searchLocoNumber < suspectLocoNumber && tryNumber === 2)
        console.log('Try THIRD MORE looking at the BACK wagoons');
}
