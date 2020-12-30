/* 
1)  string olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirin.
ornek: “asik veysel“ ==> “Asik Veysel“

2)  0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdiriniz (10x10 luk bir kare seklinde)

3)  0 dan 100 e kadar olan prime (asal sayilari) yazdirin (Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar)
    PRIME.JS DOSYASINDADIR ==>>>

4)  Kucuk, buyuk, ozel karakterler ve sayilardan olusan 8 ile 16 (hane) uzunluklari arasinda guvenli 50 adet sifre olusturunuz. 
    PASS.JS DOSYASINDADIR ==>>>>

5)  Asagidaki sekli programlama yapilarini kullanarak cizdiriniz.
​
*
**
***
****
*****
******


----- */


// 1.PROBLEMİN CÖZÜMÜ ASAGIDADIR:
const str1 = 'asık'
const str2 = 'veysel'

const caps = str1.charAt(0).toUpperCase() + str1.slice(1) +" "+ str2.charAt(0).toUpperCase() + str2.slice(1);
console.log(caps);



// 2. PROBLEMİN KODU AŞAGIDADIR;

let numbersArray = [] , max = 100;

for ( let i=1; numbersArray.push(i++) < max;);  // numbers = [1,2,3 ... 100] 

let array2 = numbersArray.slice(0,10);
let array3 = numbersArray.slice(10,20);
let array4 = numbersArray.slice(20,30);
let array5 = numbersArray.slice(30,40);
let array6 = numbersArray.slice(40,50);
let array7 = numbersArray.slice(50,60);
let array8 = numbersArray.slice(60,70);
let array9 = numbersArray.slice(70,80);
let array10 = numbersArray.slice(80,90);
let array11 = numbersArray.slice(90,100);


console.log (array2.join(","), '\n'+array3.join(","), '\n'+array4.join(","), '\n'
+array5.join(","), '\n'+array6.join(","), '\n'+array7.join(","), '\n'+array8.join(","), '\n'
+array9.join(","), '\n'+array10.join(","), '\n'+array11.join(","), '\n');


