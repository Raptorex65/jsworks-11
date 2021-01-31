// Kayit ekranin sol tarafinda olacak bir form araciligi ile yapialacaktir. 
// Burada ogrenci adi, soyadi, yasi ..vs bilgiler girilebilecektir.
// Programda kayit olan ogrenci listesi ise sayfanın sag tarafında gösterilecektir. 
// Gerektiginde kayit silinebilecektir. Listenin en altında ise toplam ogrenci sayisi gösterilecektir.


document.querySelector("#addbutton").addEventListener("click", recordData);


/*
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
const personList = [];

function recordData(){
    let nameData = document.querySelector("#firstname").value;
    let surnameData = document.querySelector("#lastname").value;
    let ageData = document.querySelector("#age").value;

    personList.push({nameData, surnameData, ageData});
    console.log("personList");
    

}


/*
function totalNumber(){
    let totalDiv = document.getElementById("recordTotal");
    let totalInputForms = 0
    let recordTotalContents = `
    <div class="input-group">
    <span class="input-group-text">${totalInputForms}</span>
    <input type="number" aria-label="First name" class="form-control" value="">
    </div>    `
    totalDiv.appendChild(recordTotalContents);
    for(i=0; i < inputForm.length; i++){
        totalInputForms =+ inputForm[i].length
        return totalInputForms
    }
}
*/