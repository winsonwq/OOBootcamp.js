(function print() {
  console.log({ workshop: "OOBootcamp.js" });
  console.log(Math.PI);
  console.log("OOBootcamp.js".split('').reverse().join(''));
  console.log(!!"");
  console.log(new Date('2014-01-01').getTime() - new Date('2013-11-01').getTime());
  console.log([21, 55, 22, 77, 100, 10, 42, 54, -72].reduce(function (sofar, curr) { return sofar + curr; }));
  console.log((/^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$/).test(1000));
})();
