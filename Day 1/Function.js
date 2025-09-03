// functions Declaration
console.log("====Function Declation====");
function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Chirag");

// function expression
console.log("\n====Function Expression====")
const add = function (a, b) {
  return a + b;
};
console.log(add(5,3));

// Arrow Function
console.log("\n====Arrow Function====")
const multiply = (a,b) => a * b;
console.log(multiply(4,5));