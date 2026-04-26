"use strict";   // treat all js code as newer version

//alert(3+3)      // we are using node not browser

let name = "saini"
let age = 22
let isLoggedIn = false
let state

//number => 2 to power 53
// bigint => very large number
// string => "" ''
// boolean => true false
// null => standalone value
// undefined => value not assigned
// symbol => unique value
// object

console.log(typeof 33)
console.log(typeof undefined) //undefined
console.log(typeof null) //object


// 1. Objects
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(typeof person); // object
console.log(person.name);   // John
console.log(person.age);    // 30
console.log(person.city);   // New York

// 2. Arrays
const colors = ["red", "green", "blue"];
console.log(typeof colors); // object
console.log(colors[0]);     // red
console.log(colors.length); // 3

// 3. Functions
function greet(name) {
    return "Hello " + name;
}

console.log(typeof greet); // function
console.log(greet("saini"));      // Hello saini

// 4. Date objects
const now = new Date();
console.log(typeof now); // object
console.log(now.getFullYear()); // Current year
console.log(now)


// 5. Regular expressions
const pattern = /Hello/;
console.log(typeof pattern); // object
console.log(pattern.test("Hello world")); // true

// 6. Null
console.log(typeof null); // object (historically a bug in JavaScript)

// 7. Undefined
console.log(typeof undefined); // undefined

// 8. Symbols (unique identifiers)
const id = Symbol("id");
console.log(typeof id); // symbol

// 9. BigInt (for very large integers)
const bigNumber = 9007199254740991n;
console.log(typeof bigNumber); // bigint
console.log(typeof NaN)
