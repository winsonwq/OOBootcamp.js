# Prototype-Based Programming

**TODO: define object `animal`**

  1. `animal` object has a property called `name`, which mean the animal's name
  2. `animal` object has a `move` method with a number as argument. If you pass `10`, it means animal move 10 meters. Once this method is invoked, it will pirnt in format `"#{name} moved #{meters}m."`

Then

  1. create a `snake` with name "small snake" and a `horce` with name "small horse" objects
  2. `snake` object inherit from `animal` object, also has a `move` method without any argument and it override the one in `Animal`, and add one more behavior that print "Slithering..." before moving. `Snake` object could move **5** meters once.
  3. `horse` object also inherit from `Animal`, has a `move` method without any argument and it override the one in `Animal`, and add one more behavior that print "Galloping..." before moving. But `Horse` object could move **45** meters once.
  4. invoke the `snake.move()` and `horse.move()` methods.

## Object.create API

```
Object.create(proto [, propertiesObject ])
```

### Example

```
// Example where we create an object with a couple of sample properties.
// (Note that the second parameter maps keys to *property descriptors*.)
o = Object.create(Object.prototype, {
  // foo is a regular "value property"
  foo: { writable:true, configurable:true, value: "hello" },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) { console.log("Setting `o.bar` to", value) }
}});
```
