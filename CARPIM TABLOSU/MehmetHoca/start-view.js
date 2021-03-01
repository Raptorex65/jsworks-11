document.querySelector("#game-area")
        .addEventListener("click", function(pEvent){
            if(pEvent.target.className === "start-triger"){
                let childName = pEvent.target.dataset.child;
                gameParameters.name = childName;
                showGameArea(gameParameters);
            }else if(pEvent.target.id == "save-triger"){
                let childName = document.querySelector("#firstname").value;
                saveGameInfo({
                    name: childName,
                    correct: 0,
                    oturum: 0
                });
                showStartView();
            }
        });

document.querySelector("#game-area")
        .addEventListener("show-list", function(){ 
            resetParams();
            showStartView();
        })       

function showStartView(){
    let list = retreieveChildList();
    document.querySelector("#game-area").innerHTML = createStartView(list);
}

function createStartView(pList){
    return `
    <section id="container-start-view">
        <table>
            ${createHeader()}
            ${createChildrenNameList(pList)}
            ${createNewChildForm()}
        </table>
    </section>
    `;
}

function createHeader(){
    return `
    <tr>
        <th>Isim</th>
        <th>Toplam Puan</th>
        <th>Oturum Sayisi</th>
        <th>operasyon</th>
    </tr>
    `;
}

function createChildrenNameList(pList){
    return pList.map(child => `
        <tr>
            <td>${child.name}</td>
            <td>${child.puan}</td>
            <td>${child.oturum}</td>
            <td><button class="start-triger" data-child="${child.name}">start</button></td>
        </tr>
    `).join("");
}

function createNewChildForm(){
    return `
    <tr>
        <td colspan="3">
            <input id="firstname" placeholder="cocuk ismi giriniz"/>
        </td>
        <td><button id="save-triger">kaydet</button></td>
    </tr>
    `;
}