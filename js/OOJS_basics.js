// Prototyping method in OOJS.

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


/** obsolete syntax **/
    
var Person = Class.create();
Person.prototype = {
  initialize: function(name) {
    this.name = name;
  },
  say: function(message) {
    return this.name + ': ' + message;
  }
};
    
var guy = new Person('Miro');
guy.say('hi');
// -> "Miro: hi"
    
var Pirate = Class.create();
// inherit from Person class:
Pirate.prototype = Object.extend(new Person(), {
  // redefine the speak method
  say: function(message) {
    return this.name + ': ' + message + ', yarr!';
  }
});
    
var john = new Pirate('Long John');
john.say('ahoy matey');
// -> "Long John: ahoy matey, yarr!"

/** new, preferred syntax **/
    
// properties are directly passed to `create` method
var Person = Class.create({
  initialize: function(name) {
    this.name = name;
  },
  say: function(message) {
    return this.name + ': ' + message;
  }
});
    
// when subclassing, specify the class you want to inherit from
var Pirate = Class.create(Person, {
  // redefine the speak method
  say: function($super, message) {
    return $super(message) + ', yarr!';
  }
});
    
var john = new Pirate('Long John');
john.say('ahoy matey');
// -> "Long John: ahoy matey, yarr!"

<?php
class Logger {
  public $log = array();
    
  function write($message) {
    $this->log[] = $message;
  }
}
    
$logger = new Logger;
$logger->write('foo');
$logger->write('bar');
$logger->log; // -> ['foo', 'bar']
?>

var Logger = Class.create({
  initialize: function() { },
  log: [],
  write: function(message) {
    this.log.push(message);
  }
});
    
var logger = new Logger;
logger.log; // -> []
logger.write('foo');
logger.write('bar');
logger.log; // -> ['foo', 'bar']
It works. But what if we make another instance of Logger?

var logger2 = new Logger;
logger2.log; // -> ['foo', 'bar']
    
// ... hey, the log should have been empty!