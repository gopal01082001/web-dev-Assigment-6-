// Q.10 What’s Super Keyword & What it does?
// In JavaScript, the super keyword is used to call functions on an object's parent or superclass. It is commonly used in classes that extend or inherit from another class, allowing the derived class to invoke and access the functionalities of the parent class. The super keyword can be used in two contexts: within the constructor and within methods.
// Within the Constructor:
// When a class extends another class, its constructor can use the super keyword to call the constructor of the parent class and inherit its properties. This is done using the super() function call within the derived class's constructor. It allows the derived class to set up its own properties and perform additional initialization while reusing the parent class's constructor logic.
// Here's an example:
// javascript
// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Child extends Parent {
//   constructor(name, age) {
//     super(name); // Call the parent class constructor
//     this.age = age;
//   }
// }
// In the above example, the Child class extends the Parent class. Within the Child class's constructor, super(name) is used to call the constructor of the parent class and pass the name argument. This ensures that the name property from the parent class is properly initialized.
// Within Methods:
// The super keyword can also be used within methods of the derived class to call and invoke the corresponding method in the parent class. This allows the derived class to access and extend the behavior defined in the parent class while adding its own logic.
// Here's an example:
// javascript
// class Parent {
//   greet() {
//     console.log("Hello from the Parent class!");
//   }
// }
// class Child extends Parent {
//   greet() {
//     super.greet(); // Call the greet() method of the parent class
//     console.log("Hello from the Child class!");
//   }
// }
// In this example, both the Parent and Child classes define a greet() method. Within the Child class's greet() method, super.greet() is used to call the greet() method of the parent class. This allows the child class to first execute the parent class's greet() method and then add its own additional logic.
// The super keyword plays a crucial role in inheritance and allows derived classes to access and invoke the functionalities of their parent classes. It facilitates code reuse and promotes the extension of behavior in object-oriented programming in JavaScript.




