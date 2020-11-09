'use strict';
// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index Position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]);
console.clear();

// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, coopy
// push: add an item to the end
fruits.push('strawberry', 'peach');

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('lemon');
fruits.unshift('blueberry');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0,'apple','watermelon');
console.log(fruits);

// combine two arrays
const fruits2 = ['pear','coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('coconut'));

// includes
console.log(fruits.includes('watermelon'));
confirm.log(fruits.includes('coconut'));

// lastIndexOf
console.clear();
fruit.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));