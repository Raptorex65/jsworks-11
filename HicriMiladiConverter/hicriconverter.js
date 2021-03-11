
function readyForHicri(){
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
    convertToHicri(year, month, day);
}


function convertToHicri(){
    let miladiYear = year;
    let yearHicri = Math.round((miladiYear - 621) * 33/32);
    let hicriFullDate = `${day}, ${month}, ${yearHicri}`
    console.log(hicriFullDate) 
}


module.exports = {readyForHicri, convertToHicri};