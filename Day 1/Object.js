// object literals
let person = {
    name:"Chirag soni",
    age: 20,
    isStudent: true
}

// using constructor function
let person2 = new Object();
person2.name = "Ravi",
person2.age = 28

// accesing data properties
console.log(person.name);
console.log(person.age);
console.log(person2.name)

// Adding/Update Properties
person.email = "csoni@gmail.com"
console.log(person.email)
person.age = 45

console.log(person.age)

person2.age = 89
console.log(person2.age)

console.log(person)
// Deleting Properties
delete person.isStudent
console.log(person)


