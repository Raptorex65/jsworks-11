
// FUNCTION WITHIN OBJECT

const user = {
    name:'Ed',
    age: 25,
    sayName: function(){
        console.log(`My name is ${this.name}`);
        const fullName = () => {
                console.log(`My name is ${this.name} and my age is ${this.age}`);
        }
        fullName();
    }    
}

user.sayName();


// CONSTRUCTOR FUNCTION

class ShoppingList {
    constructor(items, nr) {
        this.items = items;
        this.nr = nr;
    }
    sayList() {
        console.log(this.items);
    }
}

const myList = new ShoppingList(["Milk, Choco, Redbull"], 3);

//myList.sayList();

// EXTENDING FUNCTION WITH NEW PARAMETERS
// Ustteki Shoopinlist classina extend yapip 
//items, nr parametrelerini super keyword ile tanimlayip geni;lettik

class Product extends ShoppingList {
    constructor(items, nr, amount, cost){
        super(items, nr);
        this.amount = amount;
        this.cost = cost;
    }
}

const product = new Product(["Redbull, Chocolate, Candy"], 3,5 ,45);

console.log(product);