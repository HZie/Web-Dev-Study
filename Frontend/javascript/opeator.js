// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);





// 2. Numeric operators
console.log(1 + 1);     // add
console.log(1 - 1);     // substract
console.log(1 / 1);     // divide
console.log(1 * 1);     // multiply
console.log(5 % 2);     // remainder
console.log(2 ** 3);    // exponentiation





// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement0}, counter: ${counter}`);





// 4. Assignment operators
let x = 3;
let y = 6;
x += y;     // x = x + y;
x -= y;
x *= y;
x /= y;





// 5. Comparison operators
console.log(10 < 6);    // less than
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater than
console.log(10 >= 6);   // greater or equal





// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;   // false

// --> heavy한 operation일수록 뒤에 놓는 것이 좋음

// || (or), finds the first truthy value
// 앞에 하나라도 true이면 뒤에 것은 수행하지 않음
// if value1 == true 이면 check()은 수행하지 않음
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first flasy value
// 앞에 하나라도 false이면 뒤에 것은 수행하지 않음
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null){
    nullableObject.something;
}

function check() {
    for (let i = 0; i < 10; i++){
        // wasting time
        console.log('hehe');
    }
    return true;
}

// ! (not)
console.log(!value1);





// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  // return true
console.log(stringFive != numberFive);  // return false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // return false
console.log(stringFive === numberFive); // return true

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);      // result: false
console.log(ellie1 === ellie2);     // result: false
console.log(ellie1 === ellie3);     // result: true

// equality - puzzler
console.log(0 == false);            // result: true
console.log(0 === false);           // result: false
console.log('' == false);           // result: true
console.log('' === false);          // result: false
console.log(null == undefined);     // result: true
console.log(null === undefined);    // result: false





// 8. Conditional operators: if
// if, else if , else
const name = 'ellie';
if(name === 'ellie') {
    console.log('Welcome Ellie!');
}
else if(name === 'coder') {
    console.log('You are amazing coder');
}
else {
    console.log('unknown');
}





// 9. Ternary operator: ?
// conditon ? (true) : (false);
console.log(name === 'ellie' ? 'yes' :' no');






// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}





// 11. Loops
// while loop, while the condition is true,
// body code is executed
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


// for loop, for (begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

// inline varable declaration
for (let i = 3; i > 0; i = i-2) {
    console.log(`inline variable for: ${i}`);    
}

// nested loops
// O(N^2)
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}