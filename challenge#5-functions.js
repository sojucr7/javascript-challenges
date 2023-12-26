// First-class functions:

// In a language with first-class functions, functions are treated as first-class citizens. This means that functions can be assigned to variables, passed as arguments to other functions, and returned as values from other functions.

// Example of a first-class function
function greet(name) {
    return "Hello, " + name + "!";
}

// Assigning a function to a variable
var sayHello = greet;

// Using a function as an argument
function greetUser(greeterFunction, userName) {
    return greeterFunction(userName);
}

// Passing a function as an argument
var result = greetUser(sayHello, "John");
console.log(result); // Output: "Hello, John!"

// Higher-order functions:

// A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.

// Example of a higher-order function
function multiplier(factor) {
    // This is a higher-order function that returns a function
    return function (number) {
        return number * factor;
    };
}

// Using a higher-order function
var multiplyByTwo = multiplier(2);
var multiplyByFive = multiplier(5);

// Calling the functions returned by the higher-order function
console.log(multiplyByTwo(4)); // Output: 8
console.log(multiplyByFive(3)); // Output: 15



//IIFE stands for Immediately Invoked Function Expression. It is a design pattern in JavaScript where a function is defined and executed immediately after its creation.

// (function() {
//     var localVar = "I am a local variable";
//     console.log(localVar);
// })();

//hoisting
var x=21


function printX(){
    console.log(x) //undefined because of hoisting

    var x=30
}

printX()



//callback function is a function that is passed as an argument to another function which is invoked inside the high order function to complete some actions

//arrow function vs normal function

//1 syntax

//2 implicit return

//accessing argument keyword

//this keyword

 