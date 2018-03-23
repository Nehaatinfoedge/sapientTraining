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



// Define an object with some properties and a method​
    // We will later pass the method as a callback function to another function​
    var clientData = {
    id: 094545,
    fullName: "Not Set",
    // setUserName is a method on the clientData object​
    setUserName: function (firstName, lastName)  {
    // this refers to the fullName property in this object​
    this.fullName = firstName + " " + lastName;
    }
    }
        function getUserInput (firstName, lastName, callback, callbackObj) {
            // The use of the Apply method below will set the "this" value to callbackObj​
            callback.apply (callbackObj, [firstName, lastName]);
        }
​
 // The clientData object will be used by the Apply method to set the "this" value​
    getUserInput ("Barack", "Obama", clientData.setUserName, clientData);
    // the fullName property on the clientData was correctly set​
    console.log (clientData.fullName); // Barack Obama​




       // global variable for demonstration​
        var avgScore = "global avgScore";
​
        //global function​
        function avg (arrayOfScores) {
            // Add all the scores and return the total​
            var sumOfScores = arrayOfScores.reduce (function (prev, cur, index, array) {
                return prev + cur;
            });
​
            // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply​
            this.avgScore = sumOfScores / arrayOfScores.length;
        }
​
        var gameController = {
            scores  :[20, 34, 55, 46, 77],
            avgScore:null​
        }
​
        // If we execute the avg function thus, "this" inside the function is bound to the global window object:​
        avg (gameController.scores);
        // Proof that the avgScore was set on the global window object​
        console.log (window.avgScore); // 46.4​
        console.log (gameController.avgScore); // null​
​
        // reset the global avgScore​
        avgScore = "global avgScore";
​
        // To set the "this" value explicitly, so that "this" is bound to the gameController,​
        // We use the call () method:​
        avg.call (gameController, gameController.scores);
​
        console.log (window.avgScore); //global avgScore​
        console.log (gameController.avgScore); // 46.4​




         // This data variable is a global variable​
            var data = [
                {name:"Samantha", age:12},
                {name:"Alexis", age:14}
            ]
​
            var user = {
                // local data variable​
                data    :[
                    {name:"T. Woods", age:37},
                    {name:"P. Mickelson", age:43}
                ],
                showData:function (event) {
                    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
​
                    console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
                }
​
            }
​
            // Assign the showData method of the user object to a variable​
            var showDataVar = user.showData;
​
            showDataVar (); // Samantha 12 (from the global data array, not from the local data array)​
​



        // Bind the showData method to the user object​
            var showDataVar = user.showData.bind (user);
​
            // Now the we get the value from the user object because the this keyword is bound to the user object​
            showDataVar (); // P. Mickelson 43​
        

        // Here we have a cars object that does not have a method to print its data to the console​
            var cars = {
                data:[
                    {name:"Honda Accord", age:14},
                    {name:"Tesla Model S", age:2}
                ]
​
            }
​
            // We can borrow the showData () method from the user object we defined in the last example.​
            // Here we bind the user.showData method to the cars object we just created.​
            cars.showData = user.showData.bind (cars);
            cars.showData (); // Honda Accord 14​



            //            <button>Get Random Person</button>​
​//        <input type="text">​
​
​
​var user = {
    data        :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    clickHandler:function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
​
        // This line is adding a random person from the data array to the text field​
        $ ("input").val (this.data[randomNum].name + " " + this.data[randomNum].age);
    }
​
}
​
​// Assign an eventHandler to the button's click event​
$ ("button").click (user.clickHandler);

$ ("button").click (user.clickHandler);


$ ("button").click (user.clickHandler.bind (user));


// Credit to Douglas Crockford for this bind method​
            if (!Function.prototype.bind) {
                Function.prototype.bind = function (oThis) {
                    if (typeof this !== "function") {
                        // closest thing possible to the ECMAScript 5 internal IsCallable function​
                        throw new TypeError ("Function.prototype.bind - what is trying to be bound is not callable");
                    }
​
                    var aArgs = Array.prototype.slice.call (arguments, 1),
                            fToBind = this,
                            fNOP = function () {
                            },
                            fBound = function () {
                                return fToBind.apply (this instanceof fNOP && oThis
                                        ? this​
                                        : oThis,
                                        aArgs.concat (Array.prototype.slice.call (arguments)));
                            };
​
                    fNOP.prototype = this.prototype;
                    fBound.prototype = new fNOP ();
​
                    return fBound;
                };
            }



    // An array-like object: note the non-negative integers used as keys​
    var anArrayLikeObj = {0:"Martin", 1:78, 2:67, 3:["Letta", "Marieta", "Pauline"], length:4 };

    // Make a quick copy and save the results in a real array:​
                // First parameter sets the "this" value​
    var newArray = Array.prototype.slice.call (anArrayLikeObj, 0);
​
    console.log (newArray); // ["Martin", 78, 67, Array[3]]​
  ​
    // Search for "Martin" in the array-like object​
    console.log (Array.prototype.indexOf.call (anArrayLikeObj, "Martin") === -1 ? false : true); // true​
  ​
    // Try using an Array method without the call () or apply ()​
    console.log (anArrayLikeObj.indexOf ("Martin") === -1 ? false : true); // Error: Object has no method 'indexOf'​
​
    // Reverse the object:​
    console.log (Array.prototype.reverse.call (anArrayLikeObj));
    // {0: Array[3], 1: 67, 2: 78, 3: "Martin", length: 4}​
​
    // Sweet. We can pop too:​
    console.log (Array.prototype.pop.call (anArrayLikeObj));
    console.log (anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, length: 3}​
​
    // What about push?​
    console.log (Array.prototype.push.call (anArrayLikeObj, "Jackie"));
    console.log (anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, 3: "Jackie", length: 4}​


var animals = ["cat","dog","fish"];
var lengths = [];
var item;
var count;
var loops = animals.length;
for (count = 0; count < loops; count++){
  item = animals[count];
  lengths.push(item.length);
}
console.log(lengths); //[3, 3, 4]
            
var animals = ["cat","dog","fish"];
var lengths = animals.map(function(animal) {
  return animal.length;
});
console.log(lengths); //[3, 3, 4]

var animals = ["cat","dog","fish"];
function getLength(word) {
  return word.length;
}
console.log(animals.map(getLength)); //[3, 3, 4]


var animals = ["cat","dog","fish"];
var total = 0;
var item;
for (var count = 0, loops = animals.length; count < loops; count++){
  item = animals[count];
  total += item.length;
}
console.log(total); //10

var animals = ["cat","dog","fish"];
var total = animals.reduce(function(sum, word) {
  return sum + word.length;
}, 0);
console.log(total);

var animals = ["cat","dog","fish"];
var addLength = function(sum, word) {
  return sum + word.length;
};
var total = animals.reduce(addLength, 0);
console.log(total);

var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];


function getFullName(item, index) {
    var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
}

function myFunction() {
    document.getElementById("demo").innerHTML = persons.map(getFullName);
}

var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});

// Consider:
['1', '2', '3'].map(parseInt);
// While one could expect [1, 2, 3]
// The actual result is [1, NaN, NaN]

// parseInt is often used with one argument, but takes two.
// The first is an expression and the second is the radix.
// To the callback function, Array.prototype.map passes 3 arguments: 
// the element, the index, the array
// The third argument is ignored by parseInt, but not the second one,
// hence the possible confusion. See the blog post for more details

function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
['1', '2', '3'].map( str => parseInt(str) );

// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number); // [1, 2, 3]
// but unlike `parseInt` will also return a float or (resolved) exponential notation:
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]



Polyfill

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function indexOf(member, startFrom) {
    /*
    In non-strict mode, if the `this` variable is null or undefined, then it is
    set to the window object. Otherwise, `this` is automatically converted to an
    object. In strict mode, if the `this` variable is null or undefined, a
    `TypeError` is thrown.
    */
    if (this == null) {
      throw new TypeError("Array.prototype.indexOf() - can't convert `" + this + "` to object");
    }

    var
      index = isFinite(startFrom) ? Math.floor(startFrom) : 0,
      that = this instanceof Object ? this : new Object(this),
      length = isFinite(that.length) ? Math.floor(that.length) : 0;

    if (index >= length) {
      return -1;
    }

    if (index < 0) {
      index = Math.max(length + index, 0);
    }

    if (member === undefined) {
      /*
        Since `member` is undefined, keys that don't exist will have the same
        value as `member`, and thus do need to be checked.
      */
      do {
        if (index in that && that[index] === undefined) {
          return index;
        }
      } while (++index < length);
    } else {
      do {
        if (that[index] === member) {
          return index;
        }
      } while (++index < length);
    }

    return -1;
  };
}



// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

  Array.prototype.map = function(callback/*, thisArg*/) {

    var T, A, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| 
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal 
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let A be a new array created as if by the expression new Array(len) 
    //    where Array is the standard built-in constructor with that name and 
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal 
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal 
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal 
        //     method of callback with T as the this value and argument 
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}

if (![].entries) {
   Array.prototype.values = function() {
       var k, a = [], nextIndex = 0, ary = this;
       k = ary.length;
       while (k > 0) a[--k] = [k,ary[k]];
       a.next = function(){
           return nextIndex < ary.length ?
               {value: [nextIndex++,ary[nextIndex]], done: false} :
               {done: true};
       };
   return a;
   };
}

if (![].keys) {
   Array.prototype.keys = function() {
       var k, a = [], nextIndex = 0, ary = this;
       k = ary.length;
       while (k > 0) a[--k] = k;
       a.next = function(){
           return nextIndex < ary.length ?
               {value: nextIndex++, done: false} :
               {done: true};
       };
   return a;
   };
}

if (![].values) {
   Array.prototype.values = function() {
       var k, a = [], nextIndex = 0, ary = this;
       k = ary.length;
       while (k > 0) a[--k] = ary[k];
       a.next = function(){
           return nextIndex < ary.length ?
               {value: ary[nextIndex++], done: false} :
               {done: true};
       };
   return a;
   };
}

The constructor object has its properties and methods defined with the keyword 'this' in front of it, whereas the literal version does not.
In the constructor object the properties/methods have their 'values' defined after an equal sign '=' whereas in the literal version, they are defined after a colon ':'.
The constructor function can have (optional) semi-colons ';' at the end of each property/method declaration whereas in the literal version if you have more than one property or method, they MUST be separated with a comma ',', and they CANNOT have semi-colons after them, otherwise JavaScript will return an error.
Defining Methods and Properties
Constructor version:

function myObject(){
    this.iAm = 'an object';
    this.whatAmI = function(){
        alert('I am ' + this.iAm);
    };
};
Literal version:

var myObject = {
    iAm : 'an object',
    whatAmI : function(){
        alert('I am ' + this.iAm);
    }
}