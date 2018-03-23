// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};

// Lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

square(2, 4, 7.5, 8, 11.5, 21); // returns: [4, 16, 56.25, 64, 132.25, 441]


function getCar(make, model, value) {
  return {
    make,
    model,

    _value: value,

    get value() {
      return this._value;
    },
    set value(value) {
      if (value < 0)
        throw new Error('invalid value');

      this._value = value;
    }
  };
}

let car = getCar('Kia', 'Sorento', 40000);

// output: 40000
console.log(car.value);

car.value = 30000;

// error thrown
car.value = -1;


//ES5
function getLaptop(make, model, year) {
    return {
        make: make,
        model: model,
        year: year
    }
}

getLaptop("Apple", "MacBook", "2015");// {make: "Apple", model: "MacBook", year: "2015"}

function getLaptop(make, model, year) {
   return {
       make,
       model,
       year
   }
}

getLaptop("Apple", "MacBook", "2015"); // {make: "Apple", model: "MacBook", year: "2015"}

//ES5
function getLaptop(make, model, year) {
    return {
       sayModel : function() {
            return model;
        }
    }
}

getLaptop("Apple", "MacBook", "2015").sayModel(); //"MacBook"

//ES5
function getLaptop(make, model, year) {
    return{
        sayModel() {
            return model;
        }
    }
}

getLaptop("Apple", "MacBook", "2015").sayModel(); //"MacBook"

-----------------------------------------------------------------
OBJECT DESTRUCTURING in ES6
------------------------------------------------------------------


Code in ES5 is below : 

var person = {name: "Sarah", country: "Nigeria", job: "Developer"};

var name = person.name;
var country = person.country;
var job = person.job;

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"

Code in ES6 is below:


var person = {name: "Sarah", country: "Nigeria", job: "Developer"};

var {name, country, job} = person;

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"

In ES6

var person = {name: "Sarah", country: "Nigeria", job: "Developer"}; 
var name, country, job;

{name, country, job} = person;

console.log(name);// Error : "Unexpected token ="

Wait!! What just happened? Ooh, we forgot to add () before the curly brackets. 
The ( ) around the assignment statement is required 
syntax when using object literal destructuring assignment without a declaration. 
This is because the {} on the left hand side is considered as a block and not an object literal. So let us get this right now.

var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
var name, country, job;

({name, country, job} = person);

console.log(name);//"Sarah"
console.log(job);//"Developer"
--------------------------------------------------------------

var person = {name: "Sarah", country: "Nigeria", job: "Developer"};

var {name, friends, job} = person;

console.log(name);//"Sarah"
console.log(friends);//undefined

----------------------------------------------------------
var person = {name: "Sarah", country: "Nigeria", job: "Developer"};

var {name: foo, job: bar} = person;

console.log(foo);//"Sarah"
console.log(bar);//"Developer"
----------------------------------------------------------

var person = {name: "Sarah", country: "Nigeria", job: "Developer"};

var {name = "myName", friend = "Annie"} = person;

console.log(name);//"Sarah"
console.log(friend);//"Annie"
----------------------------------------------------------

var person = {name: "Sarah", country: "Nigeria", job: "Developer"};

var {name:foo = "myName", friend: bar = "Annie"} = person;

console.log(foo);//"Sarah"
console.log(bar);//"Annie"
---------------------------------------------------------------

//Computed Property Name below

var prop = "name";

var {[prop] : foo} = {name: "Sarah", country: "Nigeria", job: "Developer"};

console.log(foo);//"Sarah"

-----------------------------------------------------------
Combining Arrays with Objects
-----------------------------------------------------------
var person = {name: "Sarah", country: "Nigeria", friends: ["Annie", "Becky"]};

var {name:foo, friends: bar} = person;

console.log(foo);//"Sarah"
console.log(bar);//["Annie", "Becky"]

-------------------------------------------------------------------
Nesting in Object Destructuring
-------------------------------------------------------------------
 var person = {
  name: "Sarah",
  place: {
      country: "Nigeria", 
      city: "Lagos" }, 
  friends : ["Annie", "Becky"]
  };

var {name:foo,
   place: {
       country : bar,
       city : x}
    } = person;

console.log(foo);//"Sarah"
console.log(bar);//"Nigeria"

----------------------------------------------------------------------
Rest in Object Destructuring
----------------------------------------------------------------------

var person = {name: "Sarah", country: "Nigeria", job: "Developer" friends: ["Annie", "Becky"]};

var {name, friends, ...others} = person;

console.log(name);//"Sarah"
console.log(friends);//["Annie", "Becky"]
console.log(others);// {country: "Nigeria", job: "Developer"}

-------------------------------------------------------------------------
Object Destructuring and Functions
-------------------------------------------------------------------------
function person({name: x, job: y} = {}) {
  console.log(x);
}

person({name: "Michelle"});//"Michelle"
person();//undefined
person(friend);//Error : friend is not defined

function person({name: x = "Sarah", job: y = "Developer"} = {}) {
    console.log(x);
}

person({name});//"Sarah"



-----------------------------------------------
Constants
-----------------------------------------------
ES6
const PI = 3.141593
PI > 3.0

ES5
//  only in ES5 through the help of object properties
//  and only in global context and not in a block scope
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
})
PI > 3.0;

-------------------------------------------------
SCOPING
-------------------------------------------------
-----------------Block Scopped Variables--------------

--------ES6----------

for (let i = 0; i < a.length; i++) {
    let x = a[i]
    …
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
    …
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4

--------ES5----------
var i, x, y;
for (i = 0; i < a.length; i++) {
    x = a[i];
    …
}
for (i = 0; i < b.length; i++) {
    y = b[i];
    …
}

var callbacks = [];
for (var i = 0; i <= 2; i++) {
    (function (i) {
        callbacks[i] = function() { return i * 2; };
    })(i);
}
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;



--------------------------Block Scopped functions-----------------


---------------ES6-------------------
{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}

----------------ES5--------------------------------
//  only in ES5 with the help of block-scope emulating
//  function scopes and function expressions
(function () {
    var foo = function () { return 1; }
    foo() === 1;
    (function () {
        var foo = function () { return 2; }
        foo() === 2;
    })();
    foo() === 1;
})();

----------------------------------------------------------------------
Arrow Functions
------------------------------------------------------------------------

-----------------ES6--------------------------

odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)

nums.forEach(v => {
   if (v % 5 === 0)
       fives.push(v)
})

this.nums.forEach((v) => {
    if (v % 5 === 0)
        this.fives.push(v)
})
-----------------ES5---------------------------

odds  = evens.map(function (v) { return v + 1; });
pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
nums  = evens.map(function (v, i) { return v + i; });

nums.forEach(function (v) {
   if (v % 5 === 0)
       fives.push(v);
});

//  variant 1
var self = this;
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        self.fives.push(v);
});

//  variant 2
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}, this);

//  variant 3 (since ECMAScript 5.1 only)
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}.bind(this));

--------------------------------------------------------------
Extended Parameter Handling
--------------------------------------------------------------

-----------------------ES6------------------------

function f (x, y = 7, z = 42) {   //Default parameter Values
    return x + y + z
}
f(1) === 50

function f (x, y, ...a) {   // Rest Parameter Values
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9


var params = [ "hello", true, 7 ]                          //Spread Operator
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, ...params) === 9

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]

---------------------ES5--------------------------

function f (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};
f(1) === 50;

function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f(1, 2, "hello", true, 7) === 9;


var params = [ "hello", true, 7 ];
var other = [ 1, 2 ].concat(params); // [ 1, 2, "hello", true, 7 ]

function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f.apply(undefined, [ 1, 2 ].concat(params)) === 9;

var str = "foo";
var chars = str.split(""); // [ "f", "o", "o" ]

--------------------------------------------------------------------
Template Literals
---------------------------------------------------------------------

-------ES6-------------
var customer = { name: "Foo" }            // String Interpolation
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`


get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`

function quux (strings, ...values) {
    strings[0] === "foo\n"
    strings[1] === "bar"
    strings.raw[0] === "foo\\n"
    strings.raw[1] === "bar"
    values[0] === 42
}
quux `foo\n${ 42 }bar`

String.raw `foo\n${ 42 }bar` === "foo\\n42bar"

-----ES5----------------
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = "Hello " + customer.name + ",\n" +
"want to buy " + card.amount + " " + card.product + " for\n" +
"a total of " + (card.amount * card.unitprice) + " bucks?";


get([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux);

No Equivalient of Raw String access

----------------------------------------------------------------------
Extended Literals
----------------------------------------------------------------------