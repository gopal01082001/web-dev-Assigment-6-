// Q.2 Explain This Keyword and Its Purpose?
// The this keyword is a reference to the current object within a class or instance method. It represents the object that is currently being worked with or accessed. The purpose of the this keyword is to differentiate between instance variables and local variables or parameters that have the same name within a class.
// Here are some key points about the this keyword:
// Reference to Current Object: When a method is invoked on an object, the this keyword refers to that particular object. It allows you to access or modify the instance variables and methods of the current object.
// Avoiding Name Conflicts: The primary purpose of this is to disambiguate between instance variables and local variables or parameters that share the same name. It helps distinguish which variable or method is being referred to within the current object.
// Passing the Current Object: The this keyword can be used to pass the current object as an argument to other methods or constructors. This is useful when you want to invoke another method on the same object from within a method.
// Accessing Constructors: Inside a constructor, this can be used to invoke another constructor of the same class. This enables constructor chaining, where one constructor calls another to avoid code duplication.
// Returning the Current Object: By returning this from a method, you can allow method chaining. This is commonly used in builder patterns or fluent interfaces, where multiple method calls can be chained together on the same object.
// Accessing Inner Class Members: When working with inner classes, the this keyword can be used to refer to the enclosing object of the inner class. It allows you to access the members of the outer class within the inner class.
// Overall, the this keyword serves to identify and access the current object in the context of a class or instance method. It helps in avoiding naming conflicts and enables better control and manipulation of the object's state and behavior.




