class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
draw();

// function Circle() {
//   this.draw = function () {
//     console.log(this);
//   };
// }

// const c = new Circle();
// // Method call
// c.draw();

// const draw = c.draw;
// // Function call
// draw();
