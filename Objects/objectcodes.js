
// OBJECTS- FOR KEY
let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    console.log ( key );  // name, age, isAdmin
    // values for the keys
    console.log( user[key] ); // John, 30, true
  }

const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  
  // expected output:
  // "a: somestring"
  // "b: 42"
  // order is not guaranteed

  const obj = { foo: 'bar', baz: 42 };
  Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"


  let numbers = { a: 4, b: 0.5 , c: 0.35, d: 5 };

let arr = Object.values(numbers);
let min = Math.min(...arr);
let max = Math.max(...arr);

console.log( `Min value: ${min}, max value: ${max}` );

//SUMMING ARRAY OF OBJECTS

var numArr = [
    {  name: 'a', num: 50},
    {  name: 'b', num: 50},
    {  name: 'c', num: 75},
    {  name: 'd', num: 35},
    {  name: 'e', num: 25 },
];

var sum = 0;
for (var i = 0; i < numArr.length; i++) {
  sum += numArr[i].num
}
console.log( "javascript- Sum of the array value is :- " + sum ); 

var numArr = [
    {  name: 'a', num: 50},
    {  name: 'b', num: 50},
    {  name: 'c', num: 75},
    {  name: 'd', num: 35},
    {  name: 'e', num: 25 },
    {  name: 'f', num: 40 },
];

var sum = numArr.reduce(function (total, currentValue) {
    return total + currentValue.num;
}, 0);

console.log( "javascript- Sum of the array value is :- " + sum ); 

// summing some of the values of the object and recompose by for loop
var frame = [
    { 'name': 'P1', 'value': 150 },
    { 'name': 'P1', 'value': 150 },
    { 'name': 'P2', 'value': 200 },
    { 'name': 'P3', 'value': 450 }
];

var holder = {};

frame.forEach(function(d) {
  if (holder.hasOwnProperty(d.name)) {
    holder[d.name] = holder[d.name] + d.value;
  } else {
    holder[d.name] = d.value;
  }
});

var frame2 = [];

for (var prop in holder) {
  frame2.push({ name: prop, value: holder[prop] });
}

console.log(frame2);
//

// COMPARING OBJECTS

let A = [
  {name: 'a', age: 20},
  {name: 'b', age: 30},
  {name: 'c', age: 10},
]

let B = [
  {name: 'a', age: 20},
  {name: 'b', age: 40},
  {name: 'd', age: 10},
  {name: 'e', age: 20},
  {name: 'f', age: 10},
]

const compareName = (obj1, obj2)=>{
  return (obj1.name === obj2.name);
}

const compareAll = (obj1, obj2)=>{
  return (obj1.name === obj2.name && obj1.age=== obj2.age);
}

let output = B.filter(b=>{
  let indexFound = A.findIndex(a => compareName(a, b));
  return indexFound == -1;
})