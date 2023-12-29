//The call(), apply(), and bind() methods in JavaScript are used to change the context of a function. 
//This means that you can use them to call a function with a different value for the this keyword.


var obj = {name : "Piyush"};

function sayHello(){
  return "Hello " + this.name;
}

//console.log(sayHello());// hello undefined


//console.log(sayHello.call(obj)) // hello Piyush


function sayHello2(day,status){
  return "Hello " + this.name + " today is " + day + " and feel "+ status;
}

var obj = {name: "Piyush"};


//console.log(sayHello2.apply(obj,['monday','good'])) // hello Piyush


function sayHello3(){
  return "Hello " + this.name;
}

var obj = {name: "Piyush"};

const helloFn = sayHello3.bind(obj);

//console.log(helloFn());



const person = { name: 'Piyush' };

function sayHi(age) {
  return `${this.name} is ${age} years`;
}

//console.log(sayHi.call(person, 24)); //piyush is 24 years
//console.log(sayHi.bind(person, 24)); //function

const age = 10;
var person3 = {
    name: "Piyush",
  age: 20,
  getAge: function(){
    return this.age;
  }
}

var person2 = {age:  24};
//console.log(person3.getAge.call(person2))


var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  //console.log(data.getStatus()); //🥑
  //console.log(data.getStatus.call(this)); //😎
}, 0);


const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
    this.print = function() {
      // console.log('#' + i + ' ' + this.species
      //             + ': ' + this.name);
    }
    this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i); 
}

var obj2 = {name : "Piyush"};

function sayHello2(){
  console.log(this.name)
  return "Hello 2 " + this.name;
}


//polyfill
Object.prototype.myCall=function(context,...args){

  context['XBEPEEE']=this
  const result=context['XBEPEEE'](...args)
  delete context['XBEPEEE']
  return result
}



Object.prototype.myApply=function(context,args){

  context['XBEPEEE']=this
  const result=context['XBEPEEE'](...args)
  delete context['XBEPEEE']
  return result
}

Object.prototype.myBind=function(context,...args){

  context['XBEPEEE']=this
  return function(...moreArgs){
    return result=context['XBEPEEE'](...args,...moreArgs)
    delete context['XBEPEEE']
    return result
  }
}


function sayHello3(num1,num2){
  console.log(this.name,num1,num2)
  return "Hello 2 " + this.name;
}
sayHello2.myCall(person, 24)
sayHello2.myApply(person, [24])

const partial=sayHello3.myBind(person,24)
partial(36)