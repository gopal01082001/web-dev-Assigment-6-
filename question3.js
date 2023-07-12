// Q.3 What’s Call Apply Bind Method & Difference Between them
// In JavaScript, the call, apply, and bind methods are used to manipulate the context (the value of this) of a function. They allow you to explicitly set the value of this when invoking a function and also provide a way to pass arguments to the function. Although they serve a similar purpose, there are differences in how they are used.
// call method:
// The call method is a built-in function in JavaScript that allows you to invoke a function and explicitly set the value of this. It also enables you to pass arguments to the function individually.
// Syntax:
// javascript
// functionName.call(thisArg, arg1, arg2, ...)
// The thisArg parameter specifies the value to be set as this inside the function. The subsequent arguments (arg1, arg2, etc.) are the individual arguments passed to the function.
// Example:
// javascript
// function sayHello() {
//   console.log("Hello, " + this.name);
// }
// const person = { name: "John" };
// sayHello.call(person); // Outputs: Hello, John
// apply method:
// Similar to call, the apply method is a built-in JavaScript function used to invoke a function and explicitly set the value of this. However, instead of passing arguments individually, it accepts an array-like object or an actual array of arguments.
// Syntax:
// javascript
// functionName.apply(thisArg, [arg1, arg2, ...])
// The thisArg parameter is the value to be set as this inside the function. The array [arg1, arg2, ...] contains the arguments to be passed to the function.
// Example:
// javascript
// function sayHello() {
//   console.log("Hello, " + this.name);
// }
// const person = { name: "John" };
// const args = ["arg1", "arg2"];
// sayHello.apply(person, args); // Outputs: Hello, John
// bind method:
// The bind method is also a built-in function in JavaScript, but it works slightly differently from call and apply. Instead of immediately invoking the function, it creates a new function with a bound context (this) and returns it. This allows you to store the function for later invocation.
// Syntax:
// javascript
// const newFunction = functionName.bind(thisArg, arg1, arg2, ...)
// The thisArg parameter sets the value of this inside the function, and the subsequent arguments (arg1, arg2, etc.) are the arguments to be passed to the function when it is invoked.
// Example:
// javascript
// function sayHello() {
//   console.log("Hello, " + this.name);
// }
// const person = { name: "John" };
// const boundFunction = sayHello.bind(person);
// boundFunction(); // Outputs: Hello, John
// The key difference between call, apply, and bind is that call and apply immediately invoke the function, while bind returns a new function with the bound context. This allows you to execute the function later.




