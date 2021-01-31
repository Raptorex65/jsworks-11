//Dunya genelinden sececeginiz 3 sehir icin saatleri gostermis olacak. 
//Listede olan sehir secildiginde o sehrin saatini gosterecek.

document.addEventListener('DOMContentLoaded', getCurrentTime);
document.getElementById("floatingSelect").addEventListener("change", getTokyoTime);
document.getElementById("floatingSelect").addEventListener("change", getIstanbulTime);
document.getElementById("floatingSelect").addEventListener("change", getNewYorkTime);

function getCurrentTime() { 
    let time = new Date(); 
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds(); 
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("default-clockdata").innerHTML =  hour + ":" + min + ":" + sec;
    setInterval(function(){ getCurrentTime() }, 1000);  /* setting timer */
// getCurrentTime function will be run 1000 milliseconds from when the setTimeout() method was called
// We can use both settimeout or setInterval method. setTimeout() triggers expression only once, 
// setInterval() keeps triggering expression again and again (unless you tell it to stop).
// Thus it is better to use setInterval for this kind of usage which needs triggering again and again.
}

function updateTime(k) {
// Dijital gosterge icinde Iki haneli rakamlarin onunde sifir olusturmak icin gereken fonksiyon.
// Bunu tum sehirler icin saat olusturan fonksiyonlar icinde kullaniyoruz..
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

function getTokyoTime(){
    clearInterval(getCurrentTime); // zaman döngüsünü durduran js fonksiyonu

    let time = new Date();
    let timeZoneFromDB = 9.00;
    //time zone value from database
    //get the timezone offset from local time in minutes
    let tzDifference = timeZoneFromDB * 60 + time.getTimezoneOffset();
    //convert the offset to milliseconds, add to targetTime, and make a new Date
    let offsettime = new Date(time.getTime() + tzDifference * 60 * 1000);

    let hour = offsettime.getHours(); 
    let min = offsettime.getMinutes(); 
    let sec = offsettime.getSeconds(); 
  
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    
    document.getElementById("second-clockdata").innerHTML = hour + ":" + min + ":" + sec;
    setInterval(function(){ getTokyoTime() }, 1000); // zaman sayacini yine baslat

}

function getIstanbulTime(){
  clearInterval(getTokyoTime); // zaman döngüsünü durduran js fonksiyonu

  let time = new Date();
  let timeZoneFromDB = 3.00;
  //time zone value from database
  //get the timezone offset from local time in minutes
  let tzDifference = timeZoneFromDB * 60 + time.getTimezoneOffset();
  //convert the offset to milliseconds, add to targetTime, and make a new Date
  let offsettime = new Date(time.getTime() + tzDifference * 60 * 1000);

  let hour = offsettime.getHours(); 
  let min = offsettime.getMinutes(); 
  let sec = offsettime.getSeconds(); 

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  
  document.getElementById("third-clockdata").innerHTML = hour + ":" + min + ":" + sec;
  setInterval(function(){ getIstanbulTime() }, 1000); // zaman sayacini yine baslat

}

function getNewYorkTime(){
  clearInterval(getIstanbulTime); // zaman döngüsünü durduran js fonksiyonu

  let time = new Date();
  let timeZoneFromDB = -5.00;
  //time zone value from database
  //get the timezone offset from local time in minutes
  let tzDifference = timeZoneFromDB * 60 + time.getTimezoneOffset();
  //convert the offset to milliseconds, add to targetTime, and make a new Date
  let offsettime = new Date(time.getTime() + tzDifference * 60 * 1000);

  let hour = offsettime.getHours(); 
  let min = offsettime.getMinutes(); 
  let sec = offsettime.getSeconds(); 

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  
  document.getElementById("fourth-clockdata").innerHTML = hour + ":" + min + ":" + sec;
  setInterval(function(){ getNewYorkTime() }, 1000); // zaman sayacini yine baslat
}