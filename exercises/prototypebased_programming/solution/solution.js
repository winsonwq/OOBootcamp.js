var animal = {
  name: '',
  move: function (meters) {
    console.log(this.name + ' moved ' + meters + 'm.');
  }
};

var snake = Object.create(animal, {
  name: {
    writable: false,
    value: 'small snake'
  },
  move: {
    writable: false,
    value: function () {
      console.log('Slithering...');
      this.__proto__.move.call(this, 5);
    }
  }
});

var horse = Object.create(animal, {
  name: {
    writable: false,
    value: 'small horse'
  },
  move: {
    writable: false,
    value: function () {
      console.log('Galloping...');
      this.__proto__.move.call(this, 45);
    }
  }
});

snake.move();
horse.move();
