//parent class Nut
var Nut = function(color, type) {
  this.color = color;
  this.type = type;
};
Nut.prototype.favNutType = function() {
  return 'Are ' + this.type + 's your favorite type of nut?';
};
Nut.prototype.sayHello = function() {
  return 'Hello, I am a '+ this.type + '!';
};
//now the subclass Almond
var Almond = function(color, type, shape) {
  Nut.call(this, color, type); //get some props set up by Nut
  this.shape = 'teardrop';
};
Almond.prototype = Object.create(Nut.prototype); //set inheritance
Almond.prototype.constructor = Almond; //set Almond constructor func
Almond.prototype.favNutType = function() {
  return 'The' + this.type + ' looks like a ' + this.shape + '.';
};
var peeledAlmond = new Almond('white', 'almond', 'teardrop');
console.log(peeledAlmond.constructor);//Function, Almond constructor
console.log(peeledAlmond.sayHello());  //'Hello, I am a almond!'
console.log(peeledAlmond.favNutType());  //'The almond looks like a    teardrop.'