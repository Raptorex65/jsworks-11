
function readyForMiladi(){
    var d = new Date();
    if ( !!d.valueOf() ) {
        year = d.getFullYear();
        month = d.getMonth()+1;
        day = d.getDate();
    } 
    else { 
    }
    console.log(d)
    console.log(year, month, day)
    convertToMiladi(year, month, day);
}

function convertToMiladi(){
    let hicriYear = year;
    let yearHicri = Math.round((hicriYear * 32/33) + 621);
    let miladiFullDate = `${day}, ${month}, ${yearHicri}`
    console.log(miladiFullDate)
    
}

module.exports = {readyForMiladi, convertToMiladi};