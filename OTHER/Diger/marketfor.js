function addproducts (ObjName){
    for (let i = 0; i < ObjName.length; i++) {
        let tableRow = document.createElement("tr");
        const tableBody = document.getElementById("body")[i]
        tableRow.appendChild(tableBody);
    
        for (let j = 0; j < Object.values(ObjName).length ; j++) {
        let tableCell = document.createElement("td");
        tableCell.appendChild(tableRow);
        tableCell.innerText = Object.values(ObjName[j])
        }
        }
    }
    