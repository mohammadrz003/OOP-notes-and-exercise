const _radius = Symbol();
const _draw = Symbol();
const _move = Symbol();

class Circle {
  constructor(radius) {
    // Private property with symbol
    this[_radius] = radius;
  }

  [_move]() {
    this[_draw]();
    console.log("move");
  }

  // Private method with symbol
  [_draw]() {
    console.log("draw");
  }
}

const c = new Circle(1);
