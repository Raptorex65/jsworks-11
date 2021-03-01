
document.querySelector("#game-area")
        .addEventListener("keyup", function(pEvent){
            if(pEvent.target.id === "calculation-result" && pEvent.keyCode == 13){
                if(gameParameters.counter < gameParameters.totalQuestions){
                    let givenValue = +pEvent.target.value;
                    evaluateCalculation(givenValue, gameParameters);
                    showGameArea(gameParameters);
                    gameParameters.counter++
                }else{
                    saveGameInfo(gameParameters);
   
                    // yüksek kalite
                    // hash based routing
                    // history api
                    // custom event
                    let event = new CustomEvent("show-list", {});
                    document.querySelector("#game-area").dispatchEvent(event);
                }
            }
        })

function showGameArea(pGameParams){
    let calculation = populateCalculation();
    pGameParams.leftOperator = calculation.leftOperator;
    pGameParams.rightOperator = calculation.rightOperator;

    document.querySelector("#game-area").innerHTML = createGameArea(pGameParams);
}

function createGameArea(pGameParams){
    return `
    <section id="container-game-view">
        <div class="game-header">
            ${createChildName(pGameParams)}
            ${createCounter(pGameParams)}
        </div>
        <div>
            ${createWrongAnser(pGameParams)}
            ${createCorrectAnswer(pGameParams)}
        </div>
        <div>
            ${createQuestion(pGameParams)}
        </div>
    </section>
    `;
}

function createChildName({name}){
    return `<span>${name}</span>`
}

function createCounter({counter}){
    return `<span>${counter}</span>`
}

function createWrongAnser({wrong, totalQuestions}){
    return `<span>${wrong} / ${totalQuestions}</span>`
}

function createCorrectAnswer({correct, totalQuestions}){
    return `<span>${correct} / ${totalQuestions}</span>`
}

function createQuestion({leftOperator, rightOperator}){
    return `
        <span> ${leftOperator} X ${rightOperator} </span>
        <span> = </span>
        <input id="calculation-result" placeholder="sonucu giriniz">
    `;
}