const _radius = new WeakMap();
const _draw = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    // Private property with WeakMap
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log("move", this);
    });
  }

  // Private method with WeakMap
  draw() {
    _move.get(this)();
    console.log("draw");
  }
}

const c = new Circle(1);
