function Circle(radius) {
  this.radius = radius;

  // private property
  let defaultLocation = { x: 0, y: 0 };

  // private method
  let computeOptimumLocation = function (factor) {
    console.log("compute location ran");
  };

  this.draw = function () {
    computeOptimumLocation(0.1);
    // defaultLocation;

    console.log("draw");
  };
}

const circle = new Circle(1);
circle.draw();
