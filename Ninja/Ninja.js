

// regular function
const calcArea = function(radius){
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);

//

// arrow function

const calcArea = (radius) => {
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);
//

//kısa arrow function

const greet = () => 'hello, world';
const result = greet ();
console.log (result);