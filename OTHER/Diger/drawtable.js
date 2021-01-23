function drawTable(tbody) {
    var tbody = document.getElementById("matchdata");
   	let headerNames = Object.getOwnPropertyNames(jsData[0]);
    let columnCount = headerNames.length;
    //Add the header row.
    let row = tbody.insertRow(-1);
    for (let i = 0; i < columnCount; i++) {
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = headerNames[i];
        row.appendChild(headerCell);
    }
    let tr, td;

    // loop through data source
    for (let i = 0; i < jsData.length; i++) {
        tr = tbody.insertRow(tbody.rows.length);
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align", "center");

        for(let key in jsData[i])
        {
            td.innerHTML = jsData[i][key];
            td = tr.insertCell(tr.cells.length);
        }
        
    }
}
drawTable("matchdata");
