
const bill = function(products, tax){
    let total = 0;
    for(let i =0; i < products.length; i++){
        total += products [i] + products [i] * tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2))

//* arrow function of the same
const bill = (products, tax) => {
    let total = 0;
    for(let i =0; i < products.length; i++){
        total += products [i] + products [i] * tax;
    }
    return total;
}

// callbacks & foreach method

let people = ['mario', 'luigi', 'ryu','shaun', 'chun-li'];

people.forEach((person, index) => {
    console.log(index,person);
});

// callback function with arrow functiıon with foreach method

let people = ['mario', 'luigi', 'ryu','shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log('${index}- hello ${person}');
};

people.forEach(logPerson);