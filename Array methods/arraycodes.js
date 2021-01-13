
//FINDING MAXIMUM VALUE
var arr = [1,2,3];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(max)
// SUMMING ELEMENTS OF ARRAY

var numArr = [10, 20, 30, 40] // sums to value = 100
var sum = 0;
for (var i = 0; i < numArr.length; i++) {
  sum += numArr[i]
}
console.log( "javascript- Sum of the array value is :- " + sum ); 

var numArr = [10, 20, 30, 40] // sums to value = 100
var sum = numArr.reduce(function(a, b){return a+b;})
console.log( "javascript- Sum of the array value is :- " + sum ); 


var numArr = [10, 20, 30, 40] // sums to value = 100
var sum = 0;
numArr.map(function(x){sum+=x})
console.log( "javascript- Sum of the array value is :- " + sum ); 












