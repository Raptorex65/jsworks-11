let removeElementFromTable = document.querySelector("#newDiv");
removeElementFromTable.addEventListener("click", newDivFonk);

function newDivFonk() {
    let item = document.querySelector("li");
    item.remove(item);
}
let elmaReceli = document.querySelector("#sepete-ekle")

elmaReceli.addEventListener("click", sepeteElmaReceliAt);


function sepeteElmaReceliAt() {
    document.querySelector("#newDiv").appendChild(document.querySelector("ul"));
    return
}



const buttonRemove = cartRowContents.getElementsByClassName("button");
buttonRemove.addEventListener('click', removeCartItem);

button.addEventListener("click", addToCartClicked);


document.getElementsByClassName("trClass");
const title = firstData[0].firstChild.innerText
secondCol = document.getElementsByClassName("trClass");
const price = secondData[0].innerText
var thirdData = document.getElementsByClassName("trClass");
const imageSrc = thirdData[0].src
