//  In javascript arr cana be of mixed value
let arr = ['Rohan' , true , 15]; 
console.log(arr);

console.log(typeof(arr[1]));

console.log(arr.length);

console.log(arr.indexOf(true));

console.log(arr.push('kumar')); // push / add element in last and return new length
console.log(arr);

console.log(arr.includes(30)); // check element present or not

console.log(arr.unshift('shift')); // add element in the begining and return new length
console.log(arr);

console.log(arr.pop()); // remove last element and return removed element
console.log(arr);

console.log(arr.shift()); // remove first element return removed element
console.log(arr);

arr.sort();
console.log(arr);

console.log(arr.slice(0 , 1)); // return part of an array which is unselected it not change in 
console.log(arr);

