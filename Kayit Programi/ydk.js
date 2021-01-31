

addItemToCart(name, surname, age)

function addItemToCart(name, surname, age) {
    const cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    const cartItems = document.getElementsByClassName('cart-items')[0]
    cartItems.append(cartRow)
    const cartRowContents = `
        <div class="cart-item">
            <span class="cart-item-title">${name}</span>
            <span class="cart-price cart-column">${surname}</span>
            <span class="cart-price cart-column">${age}</span>
            <button id="button" class=" button btn btn-danger" type="button">REMOVE</button>
        </div>`

    cartRow.innerHTML = cartRowContents

}



var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList" 


let IndexField = document.createElement("input");
IndexField.type = "number";
IndexField.value = 0;
IndexField.classList.add('field');
inputForm.appendChild(IndexField);






const inputFormEvent = document.querySelector("form")
inputFormEvent.addEventListener("load", totalNumber);



