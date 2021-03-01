let gameParameters = {
    name: null,
    counter: 0,
    wrong: 0,
    correct: 0,
    totalQuestions: 3,
    leftOperator: 0,
    rightOperator: 0
}

function populateCalculation(){
    let leftOperator = Math.ceil(Math.random()*15);
    let rightOperator = Math.ceil(Math.random()*15);

    return {
        leftOperator: leftOperator,
        rightOperator: rightOperator
    }
}

function evaluateCalculation(pEnteredValue, params){
    if(pEnteredValue == params.leftOperator * params.rightOperator){
        params.correct++;
    }else{
        params.wrong++;
    }
}

function saveGameInfo(params){
    let childList = localStorage.getItem("childList");
    if(childList == null){
        childList = {};
    }else{
        childList = JSON.parse(childList);
    }

    if(childList[params.name]){
        childList[params.name].oturum++;
        childList[params.name].puan = childList[params.name].puan + params.correct;
    }else{
        childList[params.name] = {
            name: params.name,
            puan: params.correct,
            oturum: params.oturum
        }
    }

    localStorage.setItem("childList", JSON.stringify(childList));
}

function retreieveChildList(){
    let database = localStorage.getItem("childList");
    if(database == null){
        return [];
    }
    let childList = JSON.parse(database);
    return Object.values(childList);
}

function resetParams(){
    gameParameters = {
        name: null,
        counter: 0,
        wrong: 0,
        correct: 0,
        totalQuestions: 3,
        leftOperator: 0,
        rightOperator: 0
    }
}