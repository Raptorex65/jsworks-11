


const cartItems = document.getElementById("cart-row");
cartItems.innerHTML = 
`<div class="table-responsive">
  <table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>${productList[0].productName}</th>
      <th>${productList[1].price}</th>
      <th>${productList[2].price}</th>
    </tr>
  </thead>
  </table>
</div>`







    const firstCell = document.createElement("td");
    firstCell.innerHTML = 
    productRow.appendChild(firstCell);
    const firstbuttonAdd = document.createElement("button");
    firstbuttonAdd.classList.add('btn btn-danger')
    productRow.appendChild(firstbuttonAdd)
    productRow[0].innerHTML = p1


    let secondCell = document.createElement("td");
    secondCell.innerHTML = p2;
    productRow.appendChild(secondCell);

    let thirdCell = document.createElement("td");
    thirdCell.innerHTML = p3;
    productRow.appendChild(thirdCell);

    let fourthCell = document.createElement("td");
    fourthCell.innerHTML = p4;
    productRow.appendChild(fourthCell);

    let fifthCell = document.createElement("td");
    fifthCell.innerHTML = p5;
    productRow.appendChild(fifthCell);

    
}
}
document.addEventListener("DOMContentLoaded", addItemToCart);
function addItemToCart(List) {

    productsTable.appendChild(createTbody);
createTbody.appendChild(productsRow);


<table class="table">
<thead>    
    <tr>
      <th>productName</th>
      <th>price</th>
      <th>expireDate</th>
      <th>productImage</th>
      <th>totalCalories</th>
      <th>Button</th>
    </tr>
</thead>

<tbody class="bodyguard">
<td>fghfghfghfh</td>
</tbody>

</table>

Object.values(ObjName[j])




function addproducts (ObjName){
    
  let objectFirst = ObjName[i].
  let tableRow = document.createElement("tr");
  tableRow.appendChild(addtoTableBody);

  for (let j = 0; j < 5 ; j++) {
      let tableFirstCell = document.createElement("td");
      tableRow.appendChild(tableFirstCell);
      cellText = document.createTextNode('Text1');
      tableFirstCell.appendChild(Text1)
  }
}
}


function addproducts (pArray){
  pArray.map((item) => {
  addtoTableBody.innerHTML +=  
  `<tr>
      <td>${item.productName}</td>
      <td>${item.price}</td>
      <td>${item.expireDate}</td>
      <td>@${item.productImage}</td>
      <td>@${item.totalCalories}</td>
  </tr>` 
  }).join("");
}


function addproducts (){
  for (var i = 0; i < productList.length; i++) {
      var tr = document.createElement("tr");
      for(var productName in jsData[i]) {
          var td = document.createElement("td");
          td.innerHTML = productList[i][productName];
          tr.appendChild(td);
      }
      addtoTableBody.appendChild(tr);
  }
  }
  addproducts(productList);
  

              //Making 4th cell image appear
              productList[i].productImage.forEach(type => type = 
                `<td><img src="${type[i].productImage}"></img><td>`)

                                        //Making button as last child
                                        buton = document.createElement("button")
                                        buton.innerText =  "Add to Card"
                                        buton.classList.add("add-button")
                                        td.appendChild(buton);

                                        var cartItemNames = cartItems.getElementsByClassName('firstCell')
                                        for (var i = 0; i < cartItemNames.length; i++) {
                                            if (cartItemNames[i].innerText == title) {
                                                alert('This item is already added to the cart')
                                                return
                                            }
                                        }
                                    
                                    
                                    