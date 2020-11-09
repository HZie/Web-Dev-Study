'use strict';
// Java Script Reference: https://developer.mozilla.org/en-US/d...
// Object-Oriented Programming
// class: template
// object: instance of a class
// JavaScript classes
//   - introduced in ES6
//   = syntactical sugar over prototype-based interitance

// 1. Class Declaration
class Person {
    // constructor (생성자)
    contructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello`);
    }   
}

const ellie = new Person(ellie, 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter Setter
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(value) {
        // if(value < 0){
        //     throw Error('age can not be negative');
        // }
        // this._age = value;
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too Soon
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static Properties and Metods
// too soon
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNum){
        this.articleNum = articleNum;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance
// a way for one class to extend another class
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('tri');
    }
    getArea(){
        return this.width * this.height / 2;
    }
}

const rectangle = new Rectangle(20,20, 'blue');
console.log(rectangle.getArea());
rectangle.draw();
const triangle = new Triangle(20,20,'red');
console.log(triangle.getArea());

// 6. Class Checking: instanceof
console.log(rectangle instanceof Rectangle);    // true
console.log(triangle instanceof Rectangle);     // false
console.log(triangle instanceof Triangle);      // true
console.log(triangle instanceof Shape);         // true
console.log(triangle instanceof Object);        // true

console.log(triangle.toString());