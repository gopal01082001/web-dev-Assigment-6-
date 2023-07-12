// Q.9 Explain Class in JavaScript?
// In JavaScript, a class is a blueprint for creating objects that share similar properties and behavior. It is a fundamental construct introduced in ECMAScript 2015 (ES6) to support object-oriented programming (OOP) paradigms in JavaScript. Prior to ES6, JavaScript used prototype-based inheritance, but classes provide a more familiar syntax and a simpler way to define and instantiate objects.
// Here's an example of a class declaration in JavaScript:
// javascript
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }
// In the example above, Person is a class that represents a person. It has a constructor method defined using the constructor keyword, which is called when a new object is created from the class. The constructor is used to initialize the object's properties (name and age) based on the arguments passed during object instantiation.
// The class also defines a method called sayHello(), which is a regular function associated with the class. This method can be invoked on objects created from the Person class, allowing them to introduce themselves by logging a message to the console.
// To create an object from a class, you use the new keyword:
// javascript
// const john = new Person("John", 25);
// john.sayHello(); // Output: Hello, my name is John and I'm 25 years old.
// In this example, the new keyword is used to create a new Person object called john with the name "John" and age 25. The sayHello() method is then invoked on the john object, resulting in the message being logged to the console.
// Classes in JavaScript also support inheritance, where one class can extend another class to inherit its properties and methods. This is achieved using the extends keyword:
// javascript
// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age); // Call the parent class constructor
//     this.grade = grade;
//   }
//   study() {
//     console.log(`${this.name} is studying for the ${this.grade} grade.`);
//   }
// }
// In this example, the Student class extends

