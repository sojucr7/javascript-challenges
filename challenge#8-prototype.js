const parent = {
  name: 'Stacey',
  age: 35,
  heritage: 'Irish'
}

const child=Object.create(parent)

child.name='ssss'
console.log(child)

//if property do not exist in child class it will delegate to parent object

//It is a mechanism that allows objects to inherit properties and methods from other objects.
function Animal (name, energy) {

  this.name = name
  this.energy = energy
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

const leo = new Animal('Leo', 7)


console.log(leo.prototype)

Object.prototype.createObj=function(obj){
  function fn(){

  }
  fn.prototype=obj
  return new fn()
}

const A = Object.createObj(leo)
//console.log(A.eat(5))
//console.log(prototype === Animal.prototype) // true

// class Animal2 {
//   constructor(name, energy) {
//     this.name = name
//     this.energy = energy
//   }
//   eat(amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
//   }
//   sleep(length) {
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
//   }
//   play(length) {
//     console.log(`${this.name} is playing.`)
//     this.energy -= length
//   }
//   static nextToEat(animals) {
//     const sortedByLeastEnergy = animals.sort((a,b) => {
//       return a.energy - b.energy
//     })

//     return sortedByLeastEnergy[0].name
//   }
// }

// const leo = new Animal('Leo', 7)
// leo.play()

// const leo2 = new Animal2('Leo', 7)
// const snoop2 = new Animal2('Snoop', 10)

// console.log(leo2.eat(3)) // Leo