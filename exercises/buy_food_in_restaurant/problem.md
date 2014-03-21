# Buy Food in Restaurant

**TODO: finish the requirement step by step**

## Step 1

	1. Seller could sell food, and buyer could get a ticket.
	2. Buyer (has a name) could get the food by ticket.
	3. If the ticket is invalid, buyer cannot get food

## Step 2

	1. Food will be ready for a while (2000ms)
	2. Seller also give the ticket to buyer, but the food is not ready
	3. Buyer still could try to get the food by ticket, but he could not get that until the food is ready

## Step 3

	1. Food will be ready for a random time (`Math.random() * 10 * 1000`)
	2. Buyer could not get food until the food is ready, but the seller knows if the food is ready, and will notify buyers.
	3. **Three buyers** buy foods at same time, and they are waiting there. if one of foods is ready, one of the buyers could get the food.


## Tips:

	1. use `EventEmitter` to think about the step 3
	2. use `setTimeout(callback, duration)` to mock that cooking food takes time


### EventEmitter Example

```
var util = require('util');
var EventEmitter = require('events').EventEmitter;

util.inherits(Super, EventEmitter);
function Clazz() {
	EventEmitter.call(this);
}

var obj = new Clazz();
obj.on('custom-event', function () {
	console.log('custom event triggered!');
});

obj.emit('custom-event'); // 'custom event triggered!!'
```
