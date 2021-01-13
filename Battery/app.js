
const chargebutton = document.querySelector('#flip')






function chargethetank(){
    green.style.display = "block"
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame(){
        if (pos == 350){
            clearInterval(id);
            chargethetank.innerHTML = "%20";
            green.style.width = "200px";

        }   else {
            pos++;
            green.style.top = pos + "px";
            green.style.left = pos + "px";
        }
    }
}

function dechargethetank(){
    green.style.display = "block"
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame(){
        if (pos == 350){
            clearInterval(id);
            chargethetank.innerHTML = "%20";
            green.style.width = "200px";

        }   else {
            pos++;
            green.style.top = pos + "px";
            green.style.left = pos + "px";
        }
    }
}