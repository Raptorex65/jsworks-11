// ***
// 1.  1-10 arası rastgele vagon numarası uretılır ve supheli bu vagonda saklanir.
// 2.  Kullanici maximum 4 denemede suphelinin oldugu vagonu bulmasi gerekecektir.
// 3.  Kullanıcıya ön vagon veya arka vagonda ifadeleri ile yonlendirme yapılarak hangi vagonda oldugunu daha kolay bulması icin yardım edilecektir.
// 4.  Kullanıcının kac defada bildiği  ve puani (100 üzerinden) consola yazdırılacaktir. 
//

    
const hidingWagoon = Math.floor((Math.random() * 10) + 1);
for (let ticket = 4, sayac = 1; ticket> 0; ticket--, sayac++){
  guess = Number(prompt('Vagon tahminini giriniz!'));
  if (hidingWagoon == guess){
    alert ('Congrats at ${sayac} time you found the suspect');
    alert ('Score: ${100-(20)*(sayac-1)}')
    break;
  } else if (hidingWagoon > guess){
    alert ('Enter a bigger number!');
  } else {
    alert ('Enter a smaller number!');
  }
  if (ticket == 1){
    alert ('You have no tickets left')
  }
}


        


