'use strict';
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

//  1. Function Declaration
// function name (param1, param2) { 
//   body... 
//   return;
// }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello');



// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);



// 3. Default Parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    /*
    예전엔 이렇게 했음
    if(from === undefined){
        from = 'unknown';
    }
    */
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');



// 4. Rest Parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie');



// 5. Local Scope
let globalMessage = 'global';   // global variable
function printMessage(){
    let message = 'hello';
    console.log(message);       // local variable
    console.log(globalMessage);

    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }

    // return undefined;
}
printMessage();



// 6. Return a Value
function sum(a, b){
    return a + b;
}
const result = sum(1,2);    // 3
console.log(`sum: ${sum(1,2)}`);



// 7. Early Return, Early Exit

// bad
function upgradeUser(user) {
    if(user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic...
}







// First-Class Function
// functions are treated like any other variable
// can be assigned as a value of variable
// can be passed as an argument to other functions
// can be returned by another funciton

// 1. Function Expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){   // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAbain = sum;
console.log(sumAgain(1,3));



// 2. Callback Function using Function Expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }
    else{
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('yes');
};

// named function
// better debugging in debugger's stack trace
// recursions (재귀)
const printNo = function print(){
    console.log('no');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow Function
// always anonymous
const simplePrint = function(){
    console.log('simplePrint');
};

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
function hello(){
    console.log('IIFE');
}
hello();

(function hello(){
    console.log('Real IIFE');
})();