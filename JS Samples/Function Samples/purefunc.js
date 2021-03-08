const array = [1, 2, 3]

// Bu yapi yukardaki array yapisini bozmadan kullanmamizi sagliyor.
// Yeni bir array olusturarak yeni b'r eleman ekleyebiliriz
function addElementToArray(a, element){
    return [...a, element]
}

addElementToArray(array, 4)




//Nullish Coalescing
//Here ?? means if taxes are null or undefined use "0.05" else use taxes value

function calculatePrice(price, taxes, description){
    taxes = taxes ?? 0.05
    description = description ?? "Default item"
    const total = price*(1 + taxes)
    console.log(`${description} with tax: ${total}`)
}

calculatePrice(100, 0.07, "My item")
calculatePrice(100, 0, "My other item")
calculatePrice(100, undefined, "")