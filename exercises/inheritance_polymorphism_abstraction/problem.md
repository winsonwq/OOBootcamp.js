# Inheritance, Polymorphism and Abstraction

**TODO: define Super class `Animal`, Subclass `Snake` and `Horse`. So you need to create a `inherit` method which could make the inheritance relationship between two classes, They have some behaviors as below:**

  1. `Animal` has a `constructor` with only one argument called `name`, which mean the animal's name
  2. `Animal` has a `move` method with a number as argument. If you pass `10`, it means animal move 10 meters. Once this method is invoked, it will pirnt in format `"#{name} moved #{meters}m."`
  3. `Snake` inherit from `Animal`, also has a `move` method without any argument and it override the one in `Animal`, and add one more behavior that print "Slithering..." before moving. `Snake` object could move **5** meters once.
  4. `Horse` also inherit from `Animal`, has a `move` method without any argument and it override the one in `Animal`, and add one more behavior that print "Galloping..." before moving. But `Horse` object could move **45** meters once.

Then

  1. create a `snake` with name "small snake" and a `horce` with name "small horse" objects
  2. invoke the `snake.move()` and `horse.move()` methods.
