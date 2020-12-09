
const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
]

// forEach method= diğerlerinde oldugu gibi return gerekmez
items.forEach((item) => {
    console.log(item.name)
})


//map method
const itemNames = items.map((item) => {
    return item.name
})

//filter method

const filteredItems = items.filter((item) => {
    return item.price <= 100
})

const filteredItems = items.filter((item) => {
    return item.price
})

// find method
const foundItem = items.find((item) => {
    return item.name === 'Album'
})

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

const hasInexpensiveItems = items.every((item) => {
    return item.price <= 1000
})

// reduce method = toplamı bulmak için kullanabiliriz
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(itemNames);




