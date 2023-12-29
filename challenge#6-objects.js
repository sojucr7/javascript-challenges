//An object is a collection of related data and/or functionality.

const func = (function(a){ delete a; return a; })(5);

console.log(func);

let user={
    'like this video':true
}

const a = {}; const b = { key: 'b' }; const c = { key: 'c' };

a[b] = 123; a[c] = 456;

console.log(a); //a["object object"]=456

//why object is converted to string before storing in local storage,sending


const user2={
    name:'soju',
    address:{
        zip:123
    }
}

const {address:{zip='default'}}=user2

console.log(zip)

//why rest paramter is the last in the list

//object referencing


let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members); //{ name: 'Lydia' }






let obj1={name:1,age:25}

let obj2=obj1


obj1={name:3,age:43}

console.log(obj2)


function changeAgeAndReference(person) {
    person = {
      name: 'John',
      age: 50
    };

    return person;
}


const personObj1 = {
    name: 'Alex',
    age: 30
};


changeAgeAndReference(personObj1)

console.log(personObj1)


const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); //20
multiply(); // 20
multiply(value); //20
multiply(value); //40


const multiply2 = (x=value) => {
    console.log((x.number *= 2));
  };

multiply2(); //20
multiply2(); // 40
multiply2(value); //80
multiply2(value); //160