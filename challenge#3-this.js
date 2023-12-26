//In JavaScript, the this keyword refers to an object.Which object depends on how this is being invoked (used or called)
//value of this depends on who is calling it
//Question 1
let a = 5
//a is a variable declared with let, and it is not added as a property to the global object.
//The this keyword does not automatically create properties on the global object for variables declared with let or const.
//let and const are block scoped.it can't access globally
console.log(this.a); //undefined

//Question 2
//this keyword will always be the object where it is calling from
function myFunction() {
  console.log(this)
}
myFunction(); // window object


//Question 3
let user = {
  name: "Piyush",
  age: 24,
    getDetails() {
        console.log(this.name); 
    }
};

user.getDetails() //Piyush


//Question 4
let user1 = {
  name: "Piyush",
  age: 24,
    childObj:{
        newName:"Roadside Coder",
        getDetails() {
            console.log(this.newName, "and" ,this.name); //Roadside Coder and undefined
        }
    }
};

user1.childObj.getDetails()

//Question 5
let user2 = {
  name: "Piyush",
  age: 24,
    getDetails: () => {
        console.log(this.name);  //undefined
    }
};

user2.getDetails()

//Question 6
class user3 {
  constructor(n){
      this.name = n
  }
  getName(){
      console.log(this.name);
  }
}

const User = new user3("Piyush") // => This will generate a user object from the above class
User.getName();

//Question 7
const user4 = {
  firstName: 'Piyush!',
  getName() {
    const firstName = 'Jen!';
    return this.firstName;
  }
};
console.log(user4.getName()); // What is logged? Piyush

//Question 8
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user8 = makeUser();
console.log(user8.ref) //global

function makeUser2() {
  return {
    name: "John",
    ref: function(){
      return this
    }
  };
}

let user9 = makeUser2();
console.log(user9.ref()) //object

//Question 9
const user10 = { name: 'Piyush Agarwal!', logMessage() { console.log(this.name);  } }; 

setTimeout(user10.logMessage, 1000)


//Question 10
// let calculator={
//   read(){
//     this.a=+prompt('enter a number')
//     this.b=+prompt('enter a number')
//   },
//   sum(){
//     return this.a+this.b
//   },
//   mul(){
//     return this.a*this.b
//   }
// }

// calculator.read()
// console.log(calculator.sum())
// console.log(calculator.mul())

let obj1={
name: "John",
ref: this
}

console.log(obj1.ref)