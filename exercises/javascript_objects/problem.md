# Say Hello To JavaScript Native Objects

**TODO: create and invoke a `function` to print out the following stuff:**

  1. a simple object with key `workshop` and value `OOBootcamp.js`
  2. the value of PI
  3. a reversed string of "OOBootcamp.js"
  4. a boolean value of `!!""`
  5. the millisecond value since "2013-11-01" to "2014-01-01"
  6. the sum of numbers in array `[21, 55, 22, 77, 100, 10, 42, 54, -72]`
  7. the boolean value for checking if `1000` matches `/^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$/`

## Function

The **Function** constructor creates a new `Function` object. In JavaScript every function is actually a Function object.

```
new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

## Object

The Object constructor creates an object wrapper.

```
{ [ nameValuePair1 [, nameValuePair2 [, ...nameValuePairN] ] ] }
new Object( [ value ] )
```

## Number

The **Number** JavaScript object is a wrapper object allowing you to work with numerical values. A `Number` object is created using the `Number()` constructor.

```
new Number(value);
```

## String

The **String** global object is a constructor for strings, or a sequence of characters.

```
'string text'
"string text"
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어"
```

## Boolean

The **Boolean** object is an object wrapper for a boolean value.

```
new Boolean(value)
```

## Date

Creates a JavaScript **Date** instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.

```
new Date();
new Date(value);
new Date(dateString);
new Date(year, month [, day, hour, minute, second, millisecond]);
```

## Array

The JavaScript **Array** global object is a constructor for arrays, which are high-level, list-like objects.

```
[element0, element1, ..., elementN]
new Array(element0, element1, ..., elementN)
new Array(arrayLength)
```

## RegExp

The **RegExp** constructor creates a regular expression object for matching text with a pattern.

```
/pattern/flags;
new RegExp(pattern [, flags]);
```
