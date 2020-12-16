let ciftlik = ["inek","tavuk","koyun","tavuk","domuz","inek","koyun", "koyun"];
let hayvanBacakSayisi = 0;

for(let index = 0; index < ciftlik.length; index++){
    if(ciftlik[index] == "koyun"){
        hayvanBacakSayisi = hayvanBacakSayisi + 4;
    }
    if(ciftlik[index] == "inek"){
        hayvanBacakSayisi = hayvanBacakSayisi + 4;
    }
}
console.log(hayvanBacakSayisi);

















