//NODEJS UZERINDE APP.JS DOSYAMIZI FUNCTION JS ILE BAGLANTILANDIRMAK ICIN 'REQUIRE' KOMUTUNU KULLANDIK
// DEGISKENLERI GLOBALDE ATAYARAK BIR DEGISKENE BAGLADIGIMIZ (mathFunctions) FONKSIYONLARI CAGIRDIK

const mathFunctions = require("./function");
let a = 5;
let b = 10;

console.log(mathFunctions.bolme(a, b), mathFunctions.carpma(a, b), 
            mathFunctions.cikarma(a, b), mathFunctions.toplama(a, b))



