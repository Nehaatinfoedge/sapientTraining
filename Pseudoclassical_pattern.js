//parent class Nut
class Nut {
  constructor(color, type) {
    this.color = color;
    this.type = type;
  }
  favNutType() {
    return `Are ${this.type}s your favorite type of nut?`;
  }
  sayHello() {
    return `Hello, I am a ${this.type}!`;
  }
}
//now the subclass Almond
class Almond extends Nut {
  constructor(color, type, shape) {
    super(color, type);
    this.shape = shape;
  }
  favNutType() {
    return `The ${this.type} looks like a ${this.shape}.`;
  }
}
const peeledAlmond = new Almond('white', 'almond', 'teardrop');
console.log(peeledAlmond.constructor);//Function, Almond constructor
console.log(peeledAlmond.sayHello());  //'Hello, I am a almond!'
console.log(peeledAlmond.favNutType());  //'The almond looks like a    teardrop.'