
//Bu programda ürün listesi sayfanın sol tarafında, satın alınan ürünler ise sag tarafında sepette gösterilecektir. 
//Gerektiginde satin alinan ürünler sepetten cikarilacak ( sepetteki her ürünün bir silme butonu olacak). 
//Sepetin en altında ise toplam satış fiyatı güncel bir sekilde gösterilecektir.
//1-Arrayden bir fonksiyon araciligiyla alinan nesne elemanlari products olarak alinarak ana 
//sayfanin soluna tablo icerigi seklinde sayfa yuklendiginde yerlestirilir. Sayfa yuklendiginde bu islemin gerceklesmesi 
//icin addeventlistener (DOMContentLoaded) kullanilir.
//2=Tablo satirlarinin sonuna buy butonlari eklenir
//3-Buy butonunua eklenecek addeventlistener yardimi ile tiklanan tablo ver'ler' sayfanin solunda olusturulan sectiona aktarilir.
//4-Burada toplanan verilerden elde edilen toplam miktar tutat olarak ayri bir fonksiyon yardimi ile toplanarak bilgisi verilir.


const productList = [  
    { 
        productName: "Aprikosen",
        price: "Aprikosen",
        expireDate: "Aprikosen",    
        productImage: "Aprikosen",
        totalCalories: 469,   
    },
    { 
        productName: "Waldbeeren",
        price: 5.20,
        expireDate: new Date(2021, 3, 19),    
        productImage: "https://image.migros.ch/product-zoom/b1efd55d4b123bdfdb9e5dd644aed4a472a52e21/favorit-konfituere-waldbeeren.jpg",
        totalCalories: 240
    },
    { 
        productName: "Hagenbutten",
        price: 3.10,
        expireDate: new Date(2021, 5, 15),   
        productImage: "https://image.migros.ch/product-zoom/7155c76b6f1134f6a57795ded7c1fb8c80953cf7/extra-konfituere-hagenbutten.jpg",
        totalCalories: 300
    },
    { 
        productName: "Himbeeren",
        price: 10,
        expireDate: new Date(2021, 8, 17),    
        productImage: "https://image.migros.ch/product-zoom/fb3e595303aa4bb287c274b6b0bc7e7c020f80e7/extra-konfituere-himbeeren.jpg",
        totalCalories: 600
    },
    { 
        productName: "Kirschen", 
        price: 13.70,
        expireDate: new Date(2021, 10, 11),  
        productImage: "https://image.migros.ch/product-zoom/2d4a9cc209dcb269be4b805fbf139207c78dc8a4/favorit-konfituere-schwarze-kirschen.jpg",
        totalCalories: 125,
    },
    { 
        productName: "Orangen",
        price: 8.90,
        expireDate: new Date(2021, 6, 18),    
        productImage: "https://image.migros.ch/product-zoom/cfb4e6683236afcefe918e3e5c273dfb2718ea64/extra-marmelade-bitterorangen.jpg",
        totalCalories: 150
    },
    { 
        productName: "Erdbeeren",
        price: 11.90,
        expireDate: new Date(2021, 10, 1),  
        productImage: "https://image.migros.ch/product-zoom/c88b57754e8e31309bf45015a0535ed59c05e02c/m-budget-konfituere-erdbeer.jpg",
        totalCalories: 222
    },
    { 
        productName: "Erdbeer Extra",
        price: 4.80,
        expireDate: new Date(2021, 2, 14),   
        productImage: "https://image.migros.ch/product-zoom/36b67f0227f055314b9ace8fe2daa24e2279c079/extra-konfituere-erdbeeren.jpg",
        totalCalories: 333
    },
    { 
        productName: "Erdbeer Klein",
        price: 19.50,
        expireDate: new Date(2021, 0, 1),    
        productImage: "https://image.migros.ch/product-zoom/023deb389cae5f7f523d2560f5f90f0ee49b8f38/favorit-konfituere-erdbeeren.jpg",
        totalCalories: 250
    }
]

document.addEventListener('DOMContentLoaded', drawTable)


function drawTable(tbody) {
    var tbody = document.getElementById("matchdata");
   	let headerNames = Object.getOwnPropertyNames(productList[0]);
    let columnCount = headerNames.length;
    //Add the header row.
    let row = tbody.insertRow(-1);
    for (let i = 0; i < columnCount; i++) {
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = headerNames[i];
        row.appendChild(headerCell);
    }
    let tr, td;

    // loop through data source on table body
    for (let i = 0; i < productList.length; i++) {
        tr = tbody.insertRow(tbody.rows.length);
        td = tr.insertCell(tr.cells.length);
        tr.classList.add('trClass')
        for(let key in productList[i]){
            td.innerHTML = productList[i][key];
            td = tr.insertCell(tr.cells.length);

            let button = document.createElement('input');
            button.type = 'button';
            button.id = 'submit';
            button.value = 'BUY';
            button.className = 'btn btn-success';
            td.appendChild(button);
            button.addEventListener('click', addToCartClicked)
        }
    }
}


function addToCartClicked() {
    var tbody = document.getElementById("matchdata");
    for (let i = 0; i < tbody.rows.length; i++) {
        const firstCol = tbody.rows[i].cells[0]; 
        const secondCol = tbody.rows[i].cells[1]; 
        const fourthCol = tbody.rows[i].cells[3]; 

    const title = firstCol.innerText
    const price = secondCol.innerText
    const imageSrc = fourthCol.src

    addItemToCart(title, price, imageSrc)

    }
}


function addItemToCart(title, price, imageSrc) {
    
    const cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    const cartItems = document.getElementsByClassName('cart-items')[0]
    cartItems.append(cartRow)
    const cartRowContents = `
        <div class="cart-item">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button id="button" class=" button btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    
}



function removeCartItem(event) {
    const buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}
