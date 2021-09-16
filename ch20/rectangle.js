// getter without setter

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get perimeter() {
    return this.width*2 + this.height*2;
  }
}

const rect = new Rectangle(2, 4);
rect.perimeter = 42;
console.log(rect.perimeter);
