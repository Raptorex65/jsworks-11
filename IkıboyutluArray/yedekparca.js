/*  
Oto yedek parca isi yapan Kerem Bey, toptancilardan aldigi yedek parcalari, kendi envanterine kendi sistemi ile kaydedip, bu parcalari depoya yerlestirirken bir takim süreclerden gecirmek istemektir. Bu süreclerin her biri bir fonksiyon olarak tanimlanacaktir.
Araba parcalari ise bir array icinde verilecektir.
1. Parca isimleri büyük harflere cevrilecektir.
2. Parca isimlerinden sayilar cikartilacaktir.
3. Parca isimleri tersine cevrilecektir.
4. Her parcanin basina KEREMAG_ eklenecektir.
5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. 
(Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir) 
*/
   
const yedekesya = [
    "lastik pirelli R16" , 
    "lastik goodyear R18", 
    "jantkapagı 22545R17", 
    "on sinyalled", 
    "led arkastopfarı", 
    "motoryagı Castrol2050", 
    "4650"
];

let upper = (value) => value.toUpperCase();// Büyük harfe dönüştürür
let extract = (value) => value.replace(/[0-9]/g, ''); // Rakamları cıkartır
let reverse = (value) => value.split("").reverse().join(""); // Parca isimlerini tersine cevirir
let attach = (value) => "KEREMAG__"+ value; // Baslangıca kelime ekler
let lastdate = (value) => value + "*" + Date(); //Tarih ekler

//Map fonksiyonu array içindeki elemanlara sırayla dolasarak yukardaki fonksiypnları uygular.
const result = yedekesya.map(upper) 
                      .map(extract)
                      .map(reverse)
                      .map(attach)
                      .map(lastdate);
console.log (result);
