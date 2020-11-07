// 1. Use strict
// added in ES 5
// use this for Vanila Javascript
// 자바 스크립트의 유연성을 줄여주고자 하는 것
'use strict';





// 2. Variable: rw(read/write)
// let (added in ES6)
// let: 변수를 선언할 때 사용

// global scope
let glovalName = 'global name';
{
    // block scope
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
// name은 block scope때문에 출력되지 않음
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;
}
// 정상적으로 출력됨
console.log(age);





// 3. Constant: r(read only) 
// use const whenever possible
// only use let if variable needs to change
// favor immutable data type always (왠만하면 값을 변경하지 않음) for a few reasons:
//  - security
//  - thread safety
//  = reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes





// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function (function도 변수에 할당 가능함)

const count = 17;   // integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// numbaer - speicla numeeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinith = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinith);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// 숫자 끝에 n을 붙이면 bigInt형으로 됨 
// 아직은 크롬이랑 firefox만 지원
const bigInt = 1234567890123456789012345678901234567890n;    // over (-2^53 ~ 2^53)
console.log(`value: ${bigInt}, type: ${typeof bigIng}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  // template literals (string) ``사이에 ${변수이름}하면 그 값으로 대치됨
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // or let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// id라는 내용으로 만들었지만 symnol1과 symbol2는 다른 것으로 나타남
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   // result: false
// string이 똑같다면 같은 symbol인 것으로 만들고 싶을 땐 아래와 같이 쓴다
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);     // result: true
console.log(`value: ${symbol1}, type: ${typeof symbol1}`);  // error
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;





// 5. Dynamic typing: dynamically typed language
let text = 'hello';     // type: string
console.log(text.charAt(0));    // h
console.log(`value: ${text}, type: ${typeof text}`);  
text = 1;       // type: number
console.log(`value: ${text}, type: ${typeof text}`);    
text = '7' + 5;     // type: string
console.log(`value: ${text}, type: ${typeof text}`); 
text = '8' / '2';       // type: number
console.log(`value: ${text}, type: ${typeof text}`); 
console.log(text.charAt(0));    // error