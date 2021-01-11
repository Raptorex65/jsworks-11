#! /usr/bin/bash

# eecho komutu
# echo Merhaba!

# create a file and folder
#mkdir yeniKlasor
#touch "yeniKlasor/dosya.txt"
#echo "Dosya ve klasör tek satirda olusturuldu" >> "yeniKlasor/dosya.txt"
#echo "Islem tamamlandi"

# Variables
NAME="AHMET"
echo $NAME

# Get User Input
#read -p "enter your name" NAME
#echo $NAME

#Conditionals

CITY="Cenevre"
    if [ "$CITY" == "Cenevre" ]
        then
        echo "Dogru Tahmin"
    elif [ "$CITY" == "Zurih" ]
        then
        echo "Bu da Zurih olarak dogru"
    else 
        echo "Yanlis oldu"
    fi

nelerogreniyoruz() {
    echo "$1 ve $2 ogrendik, simdi $3 ogreniyoruz"
}
nelerogreniyoruz "HTML" "CSS" "JAVASCRIPT"

printsomething() {
    echo Merhaba $1
    return 0
}
printsomething 2021
echo Function has a return value $?