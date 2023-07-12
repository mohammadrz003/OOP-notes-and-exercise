function Circle(radius) {
  // Instance members
  this.radius = radius;
}

// Circle.prototype === c1.__proto__;

// Prototype members
Circle.prototype.draw = function () {
  console.log("draw");
};

const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function () {
  return `Circle with radius ${this.radius}`;
};
