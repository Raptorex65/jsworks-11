/* Ciftcimiz anlasmali oldugu kelle pacaci Necip Ustaya gercek zamanli istatistik vermek istiyor. Gayet müslüman olan Necip Usta ise, sordugu anda kac tane hayvan bacagi oldugu bilgisini almak istiyor.

Program: 
Ciftlikteki hayvanlar bir array icerisinde karisik sekilde tutulacak ve bu ciftlikte sadece su hayvanlar var:
- inek
- tavuk
- domuz
- koyun

Array örnegi: [“inek”, “inek”, “tavuk”, “domuz”, “inek”]
Yapacaginiz program verilen array üzerinden kullanilabilir hayvan bacagi sayisini bulacak ve ekrana bastiracak.
*/


let ciftlik = ["inek","tavuk","koyun","tavuk","domuz","inek","koyun", "koyun"];//ciftlikte varolan hayvanlar
let hayvanBacakSayisi = 0;
// Sadece Koyun ve İneklerin bacak sayıları toplamını bulacak döngümüz:
for(let index = 0; index < ciftlik.length; index++){
    if(ciftlik[index] == "koyun"){
        hayvanBacakSayisi = hayvanBacakSayisi + 4;
    }
    if(ciftlik[index] == "inek"){
        hayvanBacakSayisi = hayvanBacakSayisi + 4;
    }
}
console.log(hayvanBacakSayisi);

















