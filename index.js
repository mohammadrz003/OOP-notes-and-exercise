class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log("draw");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  move() {
    console.log("move");
  }
}

const c = new Circle("blue", 1);
