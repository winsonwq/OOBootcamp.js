function Animal(name) {
  this.name = name;
}

Animal.prototype = {
  constructor: Animal,
  move: function (meters) {
    console.log(this.name + ' moved ' + meters + 'm.');
  }
};


function Snake(name) {
  this.superConstructor.call(this, name);
}

inherit(Snake, Animal);
Snake.prototype.move = function () {
  console.log('Slithering...');
  this._super.move.call(this, 5);
};


function Horse(name) {
  this.superConstructor.call(this, name);
}

inherit(Horse, Animal);
Horse.prototype.move = function () {
  console.log('Galloping...');
  this._super.move.call(this, 45);
};

function inherit(subClass, superClass) {
  subClass.prototype = new superClass;
  subClass.prototype.constructor = subClass;
  subClass.prototype.superConstructor = superClass;
  subClass.prototype._super = superClass.prototype;
}

var snake = new Snake('small snake');
var horse = new Horse('small horse');

snake.move();
horse.move();
