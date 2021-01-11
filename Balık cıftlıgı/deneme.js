
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

const euCountries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Republic of Cyprus", "Czech Republic", 
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", 
    "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", 
    "Spain", "Sweden"];


function compareCountry (firstCountry) { 
    let euFishesandCountries = [];
    for (let index= 0; index < euCountries.length; index++){
            if (euCountries.value === fishFarm.originCountry){
                return firstCountry.fishType && firstCountry.originCountry
        }
    }
}
compareCountry();
console.log (firstCountry);





/* function priceComparison (range) {
    let nameFishes = [];
        for (let index=0 ; index <fishFarm.length; index++){
            if (fishFarm[index].price < 10){
                nameFishes.push(range.fishType + range.originCountry) 
            } 
            return nameFishes
        }
    }

priceComparison (); */

/* const fishesUnderCost = [];    
 */


document.querySelector("#containersecond").innerHTML= fishNames.join(",");
