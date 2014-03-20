// Step 1

function Car () {}

function Ticket () {}

function ParkingLot(capacity) {
  this.capacity = capacity;
  this.cars = [];
}

ParkingLot.prototype.park = function (car) {
  if(this.cars.length < this.capacity) {
    var ticket = new Ticket
    this.cars.push([ticket, car]);
    return ticket;
  }
  return null;
};

ParkingLot.prototype.pickup = function (ticket) {
  var results = this.cars.filter(function (tcPair, i) {
    return tcPair[0] === ticket;
  });

  if (results.length > 0) {
    var idx = this.cars.indexOf(results[0]);
    return this.cars.splice(idx, 1)[0][1];
  }

  return null;
};

ParkingLot.prototype.availableLots = function () {
  return this.capacity - this.cars.length;
};

var parkingLot = new ParkingLot(10);
var car = new Car;
var car1 = new Car;
var ticket = parkingLot.park(car);
var ticket2 = parkingLot.park(car1);

console.log(car === parkingLot.pickup(ticket));
console.log(parkingLot.cars.length);

// Step 2 + Step 3 + Step 4

var ParkingStrategy = {
  _find: function (pf, lambda) {
    return pf.reduce(function (sofar, curr) {
      if(!sofar) return curr;
      if(curr.availableLots() === 0) return sofar;

      var available = lambda.call(this, sofar, curr);
      return available.availableLots() === 0 ? null : available;
    }, null);
  },
  default: function (pf) {
    return pf.filter(function (parkingLot) {
      return parkingLot.availableLots() > 0;
    })[0];
  },
  smart: function (pf) {
    return ParkingStrategy._find(pf, function (sofar, curr) {
      return sofar.availableLots() > curr.availableLots() ? sofar : curr;
    });
  },
  super_: function (pf) {
    return ParkingStrategy._find(pf, function (sofar, curr) {
      return sofar.availableLots() / sofar.capacity > curr.availableLots() / sofar.capacity ? sofar : curr;
    });
  },
  manager : {
    default: function (parkingPeople, parkingLots) {
      var pf = ParkingStrategy.default.call(this, parkingPeople);
      if (!pf) {
        pf = ParkingStrategy.smart.call(this, parkingLots);
      }
      return pf;
    }
  }
};

function ParkingBoy (parkingStrategy) {
  this.parkingLots = [];
  this.strategy = parkingStrategy || ParkingStrategy.default;
}

ParkingBoy.prototype = {
  constructor: ParkingBoy,
  addParkingLot: function (parkingLot) {
    this.parkingLots.push(parkingLot);
  },
  park: function (car) {
    var availableParkingLot = this.strategy(this.parkingLots);
    return availableParkingLot ? availableParkingLot.park(car) : null;
  },
  pickup: function (ticket) {
    var car;
    for (var i = 0, len = this.parkingLots.length ; i < len ; i++) {
      if (car = this.parkingLots[i].pickup(ticket)) {
        break;
      }
    }

    return car;
  },
  /* abstraction */
  availableLots: function () {
    return this.parkingLots.reduce(function (sofar, curr) {
      if(!sofar) return curr;
      return sofar.availableLots() + curr.availableLots();
    }, null);
  }

};

// -------------
// Step 2 result
// -------------

var parkingBoy = new ParkingBoy;
var parkingLot1 = new ParkingLot(0);
var parkingLot2 = new ParkingLot(1);
var car = new Car;

parkingBoy.addParkingLot(parkingLot1);
parkingBoy.addParkingLot(parkingLot2);

parkingBoy.park(car);

console.log(parkingLot1.cars.length);
console.log(parkingLot2.cars.length);

// -------------
// Step 3 result
// -------------
var smartParkingBoy = new ParkingBoy(ParkingStrategy.smart);
var parkingLot1 = new ParkingLot(5);
var parkingLot2 = new ParkingLot(4);

smartParkingBoy.addParkingLot(parkingLot1);
smartParkingBoy.addParkingLot(parkingLot2);
parkingLot1.park(new Car);
parkingLot1.park(new Car);

var car = new Car;
var ticket = smartParkingBoy.park(car);

console.log(parkingLot1.cars.length);
console.log(parkingLot2.cars.length);

// -------------
// Step 4 result
// -------------

var superParkingBoy = new ParkingBoy(ParkingStrategy.super_);
var parkingLot1 = new ParkingLot(5);
var parkingLot2 = new ParkingLot(4);

superParkingBoy.addParkingLot(parkingLot1);
superParkingBoy.addParkingLot(parkingLot2);
parkingLot1.park(new Car);
parkingLot2.park(new Car);

var car = new Car;
var ticket = superParkingBoy.park(car);

console.log(parkingLot1.cars.length);
console.log(parkingLot2.cars.length);

// -------------
// Step 5 result
// -------------

function ParkingManager(strategy) {
  this.superConstructor.call(this, strategy);
  this.parkingPeople = [];
}

inherit(ParkingManager, ParkingBoy);

ParkingManager.prototype.addParkingPeople = function (parkingPeople) {
  this.parkingPeople.push(parkingPeople);
};

ParkingManager.prototype.park = function (car) {
  var parkingFacilitator = this.strategy(this.parkingPeople, this.parkingLots);
  return parkingFacilitator ? parkingFacilitator.park(car) : null;
};

ParkingManager.prototype.pickup = function (ticket) {
  for(var i = 0, len = this.parkingPeople.length; i < len ; i++) {
    if (car = this.parkingPeople[i].pickup(ticket)) {
      break;
    }
  }

  if(!car) {
    car = this._super.pickup(ticket);
  }

  return car;
};


function inherit(subClass, superClass) {
  subClass.prototype = new superClass;
  subClass.prototype.constructor = subClass;
  subClass.prototype.superConstructor = superClass;
  subClass.prototype._super = superClass.prototype;
}

var parkingManager = new ParkingManager(ParkingStrategy.manager.default);
var parkingBoy1 = new ParkingBoy;
var parkingBoy2 = new ParkingBoy;

parkingManager.addParkingPeople(parkingBoy1);
parkingManager.addParkingPeople(parkingBoy2);

var parkingLot1 = new ParkingLot(5);
var parkingLot2 = new ParkingLot(4);

parkingManager.addParkingLot(parkingLot1);
parkingManager.addParkingLot(parkingLot2);

var car = new Car;
var ticket = parkingManager.park(car);
