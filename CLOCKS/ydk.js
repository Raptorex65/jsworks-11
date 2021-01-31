function renderClock(){
    // saatin son halini ekrana basmak icin yazdiginiz kodunuz ;)
   }
   // zaman döngüsünü secili sehir icin baslat.
   // saatin son halini her bir saniyede olmak üzere bastir (ekrana basma fonksiyonunu cagir. 1000ms = 1sn)
   // zaman döngüsünün referansi "timeHandler" degiskeninde tut, gerektiginde bu döngü durdurulacak.
   let timerHandler = setInterval(renderClock, 1000); 
   // select box deger degistirdiginde…
   document.querySelector("#time-zone-selection").addEventListener("change", function(){
       // önceki su anda calisan zaman döngüsünü durdur
       clearInterval(timerHandler); // zaman döngüsünü durduran native js fonksiyonu
       // gerekli zaman islemlerini yap
       timerHandler = setInterval(renderClock, 1000); // zaman sayacini yine baslat
   })
   
   
   
   
     function myFunction() {
       
   
       let x = document.querySelector(".secondTime");
       let inputPlace = document.querySelector(".inputTime")
       x = "Deneme"
       x.value= inputPlace.innerText
     }
   
     
     document.addEventListener("onload", defaultTime);

     function defaultTime (){
         let zurichTime = document.getElementById("default");
        zurichTime.value = currentTime.innerText;
     
     }
     var date = "September 21, 2011 00:00:00";
     var targetTime = new Date(date);
     var timeZoneFromDB = 8.00; //time zone value from database
     //get the timezone offset from local time in minutes
     var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
     //convert the offset to milliseconds, add to targetTime, and make a new Date
     var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000);
     
     

-5 300
-4 240
-3 180
-2 120
-1 60
0 0
1 -60
2 120
3 180 
4 240
5 300
6 360
7 420
8 480