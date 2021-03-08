// KULLANACAGIMIZ DORT ISLEM FONKSIYONLARINI OLUSTURDUK
function toplama(a, b){
    let toplama = a+b ;
    return toplama
}

function cikarma(a, b){
    let cikarma = a-b ;
    return cikarma
}

function carpma(a, b){
    let carpma = a*b ;
    return carpma
}

function bolme(a, b){
    let bolme = a/b ;
    return bolme
}

//FONKSIYONLARI APP.JS DEN KULLANABIMEK ICIN EXPORT ETTIK
module.exports = {toplama, cikarma, carpma, bolme};