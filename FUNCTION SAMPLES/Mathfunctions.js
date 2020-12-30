let sayilar = [13, 16, 56, 42, 11, 87,29, 66, 19, 8];

// Array dizisi içindeki sayıların karekökü

for (let a=0; a < sayilar.length; a++){
    let karekök = Math.sqrt(sayilar[a]);
    console.log('Dizi içindeki'+ (a+1) + '.inci sayinin karekökü' + karekök);
}

// Array dizisi içindeki sayıların karesi

for (let a=0; a < sayilar.length; a++){
    let kare = Math.pow(sayilar[a], 2);
    console.log('Dizi içindeki'+ (a+1) + '.inci sayinin karesi' + karesi);
}

// Array dizisi içindeki sayıların toplamı

let toplam = 0
for (let a=0; a < sayilar.length; a++){
    toplam += sayilar [a];
    console.log('Dizi içindeki sayiların toplami ='+ toplam);
}
// Array dizisi içindeki sayıların ortalaması

let average = toplam / sayilar.length;
console.log ('Dizi içindeki sayiların ortalaması = ' + average);

//En küçük ve en büyük sayıyı bulan program

min = sayilar[0];
mak = sayilar[0];

for (let i = 0; i < sayilar.length; i++){
    if (sayilar[i] > mak)
mak = sayilar[i];
{
if (sayilar[i] < min)
{
min = sayilar [i];
}
}
console.log('Dizi içindeki en büyük sayı' + mak);
}
