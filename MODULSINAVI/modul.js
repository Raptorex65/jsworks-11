
let miladiValueDate = document.getElementById("miladi");
let hicriDate = document.getElementById("hicri");
const currentDate = new Date()
const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

document.addEventListener("DOMContentLoaded", miladi);

const clickButton = document.getElementById("buton");
clickButton.addEventListener("click", dateTransform);

function miladi(){
let miladiFullDate = `${day}, ${month +1}, ${year}`
miladiValueDate.value = miladiFullDate
}

function dateTransform(){
let miladiYear = year;
let yearHicri = Math.round(((miladiYear - 621) / 33) + (miladiYear - 621));
let hicriFullDate = `${day}, ${month +1}, ${yearHicri}`
hicriDate.value = hicriFullDate
console.log(hicriFullDate)
}

/*MİLADİ YILIN HİCRİ YILA ÇEVRİLMESİ
Miladi yıldan 621 rakamını çıkarınız 1999 - 621 = 1378 (2.sayı)
(2.sayı) çıkan sayıyı 33'e bölünüz 1378 : 33 = 41.75 (=42)
Bölümü 2.çıkan sayı ile toplayınız 1378 + 42 = 1420
Kaynak
https://www2.diyanet.gov.tr/DinHizmetleriGenelMudurlugu/Sayfalar/HicridenMiladiye.aspx
*/