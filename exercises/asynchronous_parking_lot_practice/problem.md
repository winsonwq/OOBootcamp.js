# Asynchronous Parking Lot Practice

**TODO: Only Keep the requirement of Parking Lot and ParkingBoy, but need to change a little bit.**

Changes on Parking Boy

	1. parking boy could park the car, but not return the ticket immediately, he would spend a while (2000ms) to park the car, and return
	2. parking boy could pick up the car by a ticket, but the car is not returned immediately neither

You could use `setTimeout` to mock the time delay.

```
setTimeout(function () {
	console.log('executed.');
}, 2000);
```
