var util = require("util");
var EventEmitter = require('events').EventEmitter;

function Ticket() {}

util.inherits(Seller, EventEmitter);
function Seller() {
  this.foods = [];
}

Seller.prototype.sellFood = function () {
  var that = this;
  var ticket = new Ticket;
  var food = new Food;

  that.foods.push([food, ticket]);

  food.on('ready', function () {
    that.emit('foodReady');
  });

  return ticket;
};

Seller.prototype.pickupFood = function (ticket) {
  var foodTicketPair = this.foods.filter(function (foodTicket) {
    return ticket === foodTicket[1];
  })[0];

  if(foodTicketPair && foodTicketPair[0].ready) {
    var idx = this.foods.indexOf(foodTicketPair);
    return this.foods.splice(idx, 1)[0][1];
  }

  return null;
};

util.inherits(Food, EventEmitter);
function Food() {
  var that = this;
  that.ready = false;
  EventEmitter.call(this);

  setTimeout(function () {
    that.ready = true;
    that.emit('ready', that);
  }, Math.random() * 10 * 1000);
}

function Buyer(name) {
  this.name = name;
}

var seller = new Seller();
var buyer1 = new Buyer('buyer1');
var buyer2 = new Buyer('buyer2');
var buyer3 = new Buyer('buyer3');
buyer1.ticket = seller.sellFood();
buyer2.ticket = seller.sellFood();
buyer3.ticket = seller.sellFood();

seller.on('foodReady', function () {
  [buyer1, buyer2, buyer3].forEach(function (buyer) {
    var food = seller.pickupFood(buyer.ticket);
    if(food) {
      buyer.food = food;
      console.log(buyer.name + ' got the food.');
    }
  });
});
