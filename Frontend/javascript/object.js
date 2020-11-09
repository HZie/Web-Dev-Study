'use strict';
// Objects
// one of the JavaScripts' data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

// 1. Literals and Properties
const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax
print(name, age);
function print(peron){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);


// 2. Computed Properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, value){
    //console.log(obj.key);
    console.log(obj[key]);
}
printValue(ellie,'name');


// 3. Property Value Shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);


// 4. Constructor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random)


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for(key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for(value of array){
    console.log(value);
}


// 7. Fun Cloning
// Object.assign(dest,[obj1, obj2, obj3, ...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.nmae = 'coder';
console.log(user);

// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// These days..
const user4 = {};
Object.assign(user4, user);
// or
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);   // blue
console.log(mixed.size);    // big
