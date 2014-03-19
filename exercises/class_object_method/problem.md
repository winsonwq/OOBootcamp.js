# Using Class, Object and Method

**TODO: define a Class named `Geek`, and add following behaviors to it**

  1. has `name`, `age`, `gender` properties, and should be used as constructor arguments
  2. has a private `skills` properties which contains his/her technical skills
  3. could add / remove skill only by **public**
  4. has a public method called 'getSkills', which need a `iterator` function as parameter, so that you could traverse all skills
  5. has a public method called 'writeCode', which need a `code` string as parameter. When invoke this method, it would print in format "#{name} is writing code '#{code}'"

Then
  1. create a `Geek` object with name as "Lucy", age as "20", gender as "girl"
  2. add `javascript`, `ruby`, `C#`, `C++` to it using `addSkill` method
  3. remove `C++` using `removeSkill` method
  4. use `getSkills` to print out all skills
  5. invoke `writeCode` method to print out "Lucy is writing code 'console.log(1);'"

## Class

In JavaScript, you could define a class using `function` keyword.

```
function Clazz() {}
```

## Object

And easily create a object using `new` keyword

```
var object = new Clazz();
```

## Methods

### Private Method

A private method could be defined inside of `consturctor`. The private method could visit the private variable inside of `constructor`.

```
function Clazz() {
  var variable = '';
  function privateMethod() {
    console.log(variable);
  }
}

var object = new Clazz();
object.variable === undefined; // true
object.privateMethod(); // undefined is not a function
```

### Public Method

A public method could be defined in the `prototype` of `constructor`. A public method **cannot** visit the variables in side of `constructor`.

```
function Clazz(){
  var variable = '';
}

Clazz.prototype.publicMethod = function () {
  console.log(this.variable);
};

var object = new Clazz();
object.publicMethod(); // undefined
```

### Privilege Method

A privilege method is a public method which could visit private method. It's defined in `constructor`.

```
function Clazz(){
  var variable = '';
  this.privilegeMethod = function () {
    console.log(variable);
  };
}

var object = new Clazz();
object.privilegeMethod(); // ''
```
