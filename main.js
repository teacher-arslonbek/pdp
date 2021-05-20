/**
 * Factory Functions
 */
// pascal notaion => CreateBox()
// camel notaion => createBox()

const box1 = createBox(20, 20, "First Box");
box1.jump();

/**Factory Function */
function createBox(width, height, name) {
  return {
    width,
    height: height,
    name: name,
    jump: function () {
      console.log(name + " Jumping. 😁");
      return "arslon";
    },
  };
}

/** Constructor Function */
function Box(width, height, name) {
  this.width = width;
  this.height = height;
  this.name = name;
  this.jump = function () {
    console.log(name + " Jumping. 😁");
  };
}

const box2 = new Box(50, 30, "Second Box");
box2.jump();

console.log(box1);
console.log(box2);
