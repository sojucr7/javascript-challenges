//Lexical scope is the ability for a function scope to access variables from the parent scope.

//Question 1
console.log('-------------Question 1 start')
//What will be the output for the following code snippet
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // Output 1?
  }
  console.log(count); // Output 0?
})();

//Explaination

// However, inside the conditional, another let count = 1 declares a local variable count, which overwrites count from outer the scope. The first console.log(count)logs 1.

// The second console.log(count) logs 0, since here count variable is accessed from the outer scope.

//Question 2
console.log('-------------Question 2 start')
//create a function named createBase to show the below functionality

function createBase(paramA){

    return function(paramB){
        return paramA+paramB
    }
}

var addSix = createBase(6);
console.log(addSix(10))
console.log(addSix(21))

//Question 3
console.log('-------------Question 3 start')
//optimise time using closures

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) { a[i]= i*i }

  return function(index){
    return a[index]
  }
}

const cachedFind=find()


console.log(cachedFind(6)); // this takes 37ms
console.log(cachedFind(12)); // this takes 135ms

//Question 4
console.log('-------------Question 4 start')
//What will be the output for the following

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(`Question 4 ${i}`); // What is logged 3,3,3?
    }, 1000);
}

//Question 5
console.log('-------------Question 5 start')
//use a closure to create a private counter

function counter(){
    var count=0

    function add(input){
        count+=input
        return count
    }

    function get(){
        return count
    }

    return {
        add,
        get
    }
}
let {add,get}=counter()
add(10)
add(10)
add(10)
console.log(`Question 5 ${get()}`)

//Question 6
console.log('-------------Question 6 start')
//module pattern

let module1=(function(){
  function privateMethod() {
    console.log('private method')
  }
  return {
    publicMethod: function() {
      privateMethod()
    }
  }
})()
module1.publicMethod()

//Question 7
console.log('-------------Question 7 start')
//Rewrite the function in such a way the output gets printed once even though the function is called multiple times.

let view
function subscribe(){
  let subscribed=false
   return function(){
    if(!subscribed){
      console.log('Subscribe to Roadside Coder')
      subscribed=true
    }else{
      console.log('Already Subscribed')
    }
   }
}

let isSubscribe = subscribe()

isSubscribe() // Subscribe to Roadside Coder
isSubscribe() // Already Subscribed

isSubscribe(); // Subscribe to Roadside Coder
isSubscribe(); // Subscribe to Roadside Coder

//Question 8
console.log('-------------Question 8 start')
//Write the polyfill for "_.once" method in lodash.
function once(func, context){ 
  return function(){
    if(func){
      func.call(context,...arguments)
    }    
    func=null
  }
}

const hello = once((a,b) => console.log(`hello ${a} ${b}`));

hello(1,3);
hello(2,5);

//o/p 1,3

//Question 9
console.log('-------------Question 9 start')

function memoize(func) {
  let res = {};

  return function(...args){
    if(!res[args.toString()]){
      console.log('----not found,computings')
      res[args.toString()]=func.call(this,...args)
      return res[args.toString()]
    }
    console.log('----found in cache')
    return res[args.toString()]
  }

}

const clumsysquare = memoize((num) => {
  for (let i = 1; i <= 100000000; i++) {}

  return num * 2;
});


console.log(clumsysquare(9467))
console.log(clumsysquare(9467))
console.log(clumsysquare(9467))
console.log(clumsysquare(9467))
console.log(clumsysquare(2))
console.log(clumsysquare(9467))
console.log(clumsysquare(2))