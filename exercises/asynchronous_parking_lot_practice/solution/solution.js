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


var ParkingStrategy = {
  default: function (pf, cb) {
    var that = this;
    setTimeout(function () {
      cb.call(this, pf.filter(function (parkingLot) {
        return parkingLot.availableLots() > 0;
      })[0]);
    }, 2000);
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
  park: function (car, cb) {
    this.strategy(this.parkingLots, function (availableParkingLot) {
        cb(availableParkingLot ? availableParkingLot.park(car) : null);
    });

  },
  pickup: function (ticket, cb) {
    var that = this;
    setTimeout(function () {
      var car;
      for (var i = 0, len = that.parkingLots.length ; i < len ; i++) {
        if (car = that.parkingLots[i].pickup(ticket)) {
          break;
        }
      }
      cb(car);
    }, 2000);
  },
  /* abstraction */
  availableLots: function () {
    return this.parkingLots.reduce(function (sofar, curr) {
      if(!sofar) return curr;
      return sofar.availableLots() + curr.availableLots();
    }, null);
  }
};

var parkingLot = new ParkingLot(10);
var parkingBoy = new ParkingBoy(ParkingStrategy.default);
var car = new Car;

parkingBoy.addParkingLot(parkingLot);

parkingBoy.park(car, function (ticket) {
  parkingBoy.pickup(ticket, function (c) {
    console.log(c === car);
  });
});
