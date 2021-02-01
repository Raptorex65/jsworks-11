// Kayit ekranin sol tarafinda olacak bir form araciligi ile yapialacaktir. 
// Burada ogrenci adi, soyadi, yasi ..vs bilgiler girilebilecektir.
// Programda kayit olan ogrenci listesi ise sayfanın sag tarafında gösterilecektir. 
// Gerektiginde kayit silinebilecektir. Listenin en altında ise toplam ogrenci sayisi gösterilecektir.

const personList = [];

document.querySelector("#addbutton").addEventListener("click", getPerson);

function getPerson(){
    let firstName = document.querySelector("#firstname").value;
    let lastName = document.querySelector("#lastname").value;
    let age = document.querySelector("#age").value;
    personList.push({firstName, lastName, age});
    createPersonRows();
}

function createPersonRows(){
    let personRows = 
    personList.map(data => 
        `<tr id= "trow">
            <td>${data.firstName}</td>
            <td>${data.lastName}</td>
            <td>${data.age}</td>
            <td id="rowindex">${indexTable()}</td>
        </tr>`).join("");

    let tableData = 
    `<table border=1>
    <thead class="light">
    <th>Name</th>
    <th>Surname</th>
    <th>Age</th>
    <th>Total</th>
    </thead>
    ${personRows}
    </table>`

    document.querySelector("#result").innerHTML = tableData;

    indexTable();
}

function indexTable(){
    return personList.length
}

/*
// DAHA ONCE KOMUTLA OLUSTURULAN YAPI ICIN PRATIK CALISMA 
function addToCartClicked(event) {
    event.preventDefault();
    let inputForm = event.target;
    inputForm = document.createElement('form');
    inputForm.classList.add('record');
    const inputField = document.getElementById('recordRow')
    inputField.appendChild(inputForm)
    
    let textfieldOne = document.createElement("input");
    textfieldOne.type = "text";
    textfieldOne.value = "DENEME";
    textfieldOne.classList.add('name')
    inputForm.appendChild(textfieldOne);

    let textfieldTwo = document.createElement("input");
    textfieldTwo.type = "text";
    textfieldTwo.classList.add('surname')
    textfieldTwo.value = "";
    inputForm.appendChild(textfieldTwo);

    let numfieldOne = document.createElement("input");
    numfieldOne.type = "number";
    numfieldOne.value = "";
    numfieldOne.classList.add('age');
    inputForm.appendChild(numfieldOne);

    let button = document.createElement('input');
    button.type = 'button';
    button.id = 'submit';
    button.value = 'REMOVE';
    button.className = 'btn btn-danger';
    inputForm.appendChild(button);

}
*/



