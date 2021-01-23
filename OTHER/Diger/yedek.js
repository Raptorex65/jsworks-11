const firstProductHeader = document.createElement('th');
firstProductHeader.classList('firstph');
const secondProductHeader = document.createElement('th');
secondProductHeader.classList('secondph');
const thirdProductHeader = document.createElement('th');
thirdProductHeader.classList('thirdph');
const fourthProductHeader = document.createElement('th');
fourthProductHeader.classList('fourthph');
const fifthProductHeader = document.createElement('th');
ProductHeader.classList('secondph');



const pruductInput = document.querySelector("")
const productButton = document.querySelector("")
const todoList = document.querySelector(".todo-list");



productButton.addEventListener("click", addtoList);

function addtoList(event){
    //Prevent default
    event.preventDefault();
    //Create a new DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")
    //Create new list
    const newList = document.createElement('li');
    newList.innerText = 'hey'
    newList.classList.add('todo-item')
    todoDiv.appendChild(newList);
    //Remove Button
    const removeButton = document.createElement('button');
    removeButton.innerHTML = <button type="button" class="btn btn-warning">REMOVE</button>
    todoDiv.appendChild(removeButton);
    //Append to List
    todoList.appendChild(todoDiv);


}


<tbody>
<tr>


</tr>
<tr>
  <th scope="row"></th>
  <td>Jacob</td>
  <td>Thornton</td>
  <td>@fat</td>
  <td>@@@</td>
  <td> <button type="button" class="btn btn-success">Buy</button></td>
</tr>
<tr>
  <th scope="row"></th>
  <td>Larry</td>
  <td>the Bird</td>
  <td>@twitter</td>
  <td>@@@</td>
  <td> <button type="button" class="btn btn-success">Buy</button></td>
</tr>
</tbody>
</table>


var cartItemNames = shopItems.getElementsByClassName('cart-item-title')
for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
        alert('This item is already added to the cart')
        return
    }


    function composeList( ){
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
    
        var cartItems  = document.getElementsByClassName('cart-items')[0]
    
        const cartRowContents = 
                `<table class="table caption-top">
                <caption></caption>
                <thead>
                <span class="cart-item-title">${productName}</span>
                <input class="cart-quantity-input" type="number" value=${price}>
                <input class="cart-quantity-input" type="date" value=${expireDate}>
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <input class="cart-quantity-input" type="number" value=${totalCalories}>
                <button class="btn btn-danger" type="button">ADDTOCART</button>
                </thead>
                </table>`
    
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
    }
    }
    
    composeList(productList.productName, productList.price);

    

    productList.productName, productList.price, productList.productImage


    function addItemToCart(title, price, imageSrc) {
        var cartItems = document.getElementsByClassName('cart-items')[0]
        var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText == title) {
                alert('This item is already added to the cart')
                return
            }
        }
        var cartRowContents = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    }
    


    function getProducts (){
        for (i= 0; productList.length <0; i++){
        let itemProductName = productList[i].productName;
    
        let itemPrice = 
    
        let itemExpire = 
    }

    object.values(productList[i]).array.forEach(value => {
        return tdCell = value[i];
    })


    function addproducts (ObjName){

        for (i= 0; i < ObjName.length; i++){
            let objectValues = 
    
            ObjName.values.forEach(function() { 
            `<td>${Object.values(ObjName)}</td>
            <td>${Object.values(ObjName)}</td>
            <td>${Object.values(ObjName)}</td> 
            <td>${Object.values(ObjName)}</td>
            <td>${Object.values(ObjName)}</td>`
        })
        }
    }   
    