/* 
1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
6) Toplam balik stoku ne kadardir?
7) En pahali olan balik hangisidir? 
8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
*/



const fishFarm = [ 
    { 
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1),    // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway", 
        season: "Winter", 
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12),    // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan", 
        season: "Winter", 
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    { 
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),    
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom", 
        season: "Spring", 
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    { 
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),   
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland", 
        season: "Summer", 
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    { 
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),    
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France", 
        season: "Autumn", 
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Bluefish", 
        price: 13.70,
        entryDate: new Date(2021, 10, 11),  
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy", 
        season: "Winter", 
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    { 
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),    
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE", 
        season: "Summer", 
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    { 
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),  
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt", 
        season: "Summer", 
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    { 
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),   
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam", 
        season: "Summer", 
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),    
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain", 
        season: "Winter", 
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },  
]
// Stok miktari 500 kg uzerinde olan baliklar filtrelendi
let stockOverFıveHundred = fishFarm.filter(function(weight) {
    return weight.stockVolumeInKg > 500;
});

let filteredItems = stockOverFıveHundred.map((names) => {
    return names.fishType;
});
    console.log(`Stok Miktari 500 kg uzerinde olan baliklar: ${filteredItems}`);


//Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar listelendi
let fishBetweenPrice = fishFarm.filter(function(range){
    return 9 < range.price < 12;
});
let fishNames = fishBetweenPrice.map((names) => {
    return names.fishType;
});
    console.log(`Fiyati 9 ile 12 Fr arasinda olan baliklar: ${fishNames}`); 


// Sadece Bern'de ve kis sezonu satilan baliklar

let seasonFishes = fishFarm.filter((framed) => {
    return framed.season === "Winter" && framed.saleLocations.includes("BE")
});

let fnames= seasonFishes.map((names) => { return names.fishType;
});

console.log(`Sadece Bern'de ve kis sezonu satilan baliklar: ${fnames}`);

// Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)

function lastConsumeDate (date, days){
    const lastDate = new Date(Number(date));
    lastDate.setDate(date.getDate()+ days);
    return lastDate;
}

let endDate =() => { fishFarm.map(fish => {
    return { "name" : fish.fishType,
            "enddate": lastConsumeDate (fish.entryDate, fish.durationInDays)
    }
})
.sort((a, b) => a.enddate - b.enddate)
.map(a => {
    console.log(`Balik adi:${a.name} ==> Son Kullanma Tarihi ${a.enddate}`)
})
}

endDate()




// Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.

let fishPriceArray = []
let mostExpensiveFish = [];

let expensiveFish = () => { fishFarm.map(fprice => { fishPriceArray.push(fprice.price)})
    let max = Math.max.apply(Math, fishPriceArray)
    for (let index = 0; index < fishFarm.length; index++) {
        if (fishFarm[index].price == max) {
            mostExpensiveFish.push(fishFarm[index].fishType, max)
        }
    }
}

expensiveFish();

console.log(mostExpensiveFish);









































// Function 1- originCountry EU ulkeleri olan baliklari bul
// Function-2 originCountry EU ulkeleri olan ve fiyati 10 Frdan dusuk olanlari listele.

/* const euOrıgınFıshes = [];
const euCountries = []

function origin (name){
    euCountries.map fishFarm.originCountry 
}
 */



// Toplam balik stoku ne kadardir?
/* let stockTotal = 0;
for (let index = 0; index < fishFarm.length; index++) {
    for (let k = 0; k< stockVolumeInKg.length; k++) {
          stockTotal +=  fishFarm.stockVolumeInKg
    return stockTotal;
    }
  
}
console.log(stockTotal); */
/* let stockTotal = fishFarm.stockVolumeInKg.map((total) => total += fishFarm.stockVolumeInKg);
console.log(stockTotal); 
 */

