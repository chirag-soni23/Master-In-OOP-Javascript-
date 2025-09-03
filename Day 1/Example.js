// 1. Simple Object
console.log("====Simple Object=====")
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    startEngine: function(){
        console.log("Engine Started!")
    }
}
console.log(car.brand);
console.log(car['year']);
car.startEngine();

// 2. "this" keyword
console.log("\n====\'this'\ keyword====")
let Person = {
    firstName: "Chirag",
    lastName: "Soni",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(Person.firstName)
console.log(Person.lastName)
console.log(Person.fullName())


// 3. Function Returning another function
console.log("\n====Funtion returning another function====")
function outerFunction(name){
    return function(){
        // console.log(`Hello ${name}`)
        return `Hello ${name}`
    }
}
const greet = outerFunction("Chirag");
console.log(greet());