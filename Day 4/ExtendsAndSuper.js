// parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }

  speak() {
    super.speak(); // call parent method
    console.log(`${this.name} barks and breed is ${this.breed}`);
  }
}

// const dog1 = new Animal("Tommy","Labrador");
const dog1 = new Dog("Tommy", "Labrador");
dog1.speak();
