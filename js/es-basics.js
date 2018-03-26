***********************************************************************
1) FIRST ::::::::::::::
***********************************************************************

var x = 3;
function func(randomize) {
    var x;
    if (randomize) {
        x = Math.random();
        return x;
    }
    return x;
}
func(false); // undefined

-------------------------------------------------------------------------

let x = 3;
function func(randomize) {
    if (randomize) {
        let x = Math.random();
        return x;
    }
    return x;
}
func(false); // 3

************************************************************************
2) SECOND :::::
************************************************************************
(function () {  // open IIFE
    var tmp = ···;
    ···
}());  // close IIFE

console.log(tmp); // ReferenceError

-------------------------------------------------------------------------

{  // open block
    let tmp = ···;
    ···
}  // close block

console.log(tmp); // ReferenceError

***************************************************************************
3) THIRD :::::::
***************************************************************************

function UiComponent() {
    var _this = this; // (A)
    var button = document.getElementById('myButton');
    button.addEventListener('click', function () {
        console.log('CLICK');
        _this.handleClick(); // (B)
    });
}
--------------------------------------------------------------------------

function UiComponent() {
    var button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        console.log('CLICK');
        this.handleClick(); // (A)
    });
}
**************************************************************************
4) FOURTH  ::::::::
**************************************************************************

var matchObj =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');
var year = matchObj[1];
var month = matchObj[2];
var day = matchObj[3];

--------------------------------------------------------------------------

const [, year, month, day] =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');

**********************************************************************
5) FIFTH :::::::::
**********************************************************************

var obj = { foo: 123 };

var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
var writable = propDesc.writable;
var configurable = propDesc.configurable;

console.log(writable, configurable); // true true

-----------------------------------------------------------------------

const obj = { foo: 123 };

const {writable, configurable} =
    Object.getOwnPropertyDescriptor(obj, 'foo');

console.log(writable, configurable); // true true
{writable, configurable} is an abbreviation for:

{ writable: writable, configurable: configurable }

**********************************************************************
6) SIXTH  :::::::
**********************************************************************

var arr = ['a', 'b', 'c'];
for (var i=0; i<arr.length; i++) {
    var elem = arr[i];
    console.log(elem);
}
In ES5, you have the option of using the Array method forEach():

arr.forEach(function (elem) {
    console.log(elem);
});

-------------------------------------------------------------------------

const arr = ['a', 'b', 'c'];
for (const elem of arr) {
    console.log(elem);
}

for (const [index, elem] of arr.entries()) {
    console.log(index+'. '+elem);
}
**************************************************************************
7) SEVENTH ::::::::
**************************************************************************
In ES5, you specify default values for parameters like this:

function foo(x, y) {
    x = x || 0;
    y = y || 0;
    ···
}

function selectEntries(options) {
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;
    ···
}

function selectEntries(options) {
    options = options || {}; // (A)
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;
    ···
}

function logAllArguments() {
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

function format(pattern, ...args) {
    ···
}

------------------------------------------------------------------
ES6 has nicer syntax:

function foo(x=0, y=0) {
    ···
}

function selectEntries({ start=0, end=-1, step=1 }) {
    ···
}

function selectEntries({ start=0, end=-1, step=1 } = {}) {
    ···
}

function logAllArguments(...args) {  // Rest Params
    for (const arg of args) {
        console.log(arg);
    }
}

function format(pattern) {
    var args = [].slice.call(arguments, 1);
    ···
}
**************************************************************************
8) Eighth ::::::::
**************************************************************************

ES5 – apply():

> Math.max.apply(Math, [-1, 5, 11, 3])
11
ES6 – spread operator:

> Math.max(...[-1, 5, 11, 3])
11

**************************************************************************
9) Nineth ::::::::
**************************************************************************
ES5 – apply():

var arr1 = ['a', 'b'];
var arr2 = ['c', 'd'];

arr1.push.apply(arr1, arr2);
    // arr1 is now ['a', 'b', 'c', 'd']
ES6 – spread operator:

const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

arr1.push(...arr2);
    // arr1 is now ['a', 'b', 'c', 'd']


    ES5 – concat():

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

console.log(arr1.concat(arr2, arr3));
    // [ 'a', 'b', 'c', 'd', 'e' ]
ES6 – spread operator:

const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

console.log([...arr1, ...arr2, ...arr3]);
    // [ 'a', 'b', 'c', 'd', 'e' ]

    In ES5 object literals, methods are created like other properties. The property values are provided via function expressions.

var obj = {
    foo: function () {
        ···
    },
    bar: function () {
        this.foo();
    }, // trailing comma is legal in ES5
}
ES6 has method definitions, special syntax for creating methods:

const obj = {
    foo() {
        ···
    },
    bar() {
        this.foo();
    },
}

In ES5, you implement constructor functions directly:

function Person(name) {
    this.name = name;
}
Person.prototype.describe = function () {
    return 'Person called '+this.name;
};
In ES6, classes provide slightly more convenient syntax for constructor functions:

class Person {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return 'Person called '+this.name;
    }
}


Difference between Spread And Rest Operators
Rest Parameters                                    Spread Parameters
1) used while function declaration					1) used while function calling
2) combines unnamed arguments   					2) expands iterables into multiple elements



Subclassing is complicated in ES5, especially referring to super-constructors and super-properties. 
This is the canonical way of creating a sub-constructor Employee of Person:

function Employee(name, title) {
    Person.call(this, name); // super(name)
    this.title = title;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = function () {
    return Person.prototype.describe.call(this) // super.describe()
           + ' (' + this.title + ')';
};
ES6 has built-in support for subclassing, via the extends clause:

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    describe() {
        return super.describe() + ' (' + this.title + ')';
    }
}



The following ES5 code contains the function countWords that uses the object dict as a map:

var dict = Object.create(null);
function countWords(word) {
    var escapedWord = escapeKey(word);
    if (escapedWord in dict) {
        dict[escapedWord]++;
    } else {
        dict[escapedWord] = 1;
    }
}
function escapeKey(key) {
    if (key.indexOf('__proto__') === 0) {
        return key+'%';
    } else {
        return key;
    }
}
In ES6, you can use the built-in data structure Map and don’t have to escape keys. As a downside, incrementing values inside Maps is less convenient.

const map = new Map();
function countWords(word) {
    const count = map.get(word) || 0;
    map.set(word, count + 1);
}


*****************************************************************

*****************************************************************
if (str.indexOf('x') === 0) {} // ES5
if (str.startsWith('x')) {} // ES6

function endsWith(str, suffix) { // ES5
  var index = str.indexOf(suffix);
  return index >= 0
    && index === str.length-suffix.length;
}
str.endsWith(suffix); // ES6

if (str.indexOf('x') >= 0) {} // ES5
if (str.includes('x')) {} // ES6

new Array(3+1).join('#') // ES5
'#'.repeat(3) // ES6

> 'hello'.startsWith('hell')
true
> 'hello'.endsWith('ello')
true
> 'hello'.includes('ell')
true
> 'doo '.repeat(3)
'doo doo doo '


// String interpolation via template literals (in backticks)
const first = 'Jane';
const last = 'Doe';
console.log(`Hello ${first} ${last}!`);
    // Hello Jane Doe!

// Template literals also let you create strings with multiple lines
const multiLine = `
This is
a string
with multiple
lines`;

const str = 'x\uD83D\uDE80y';

// ES5: \uD83D\uDE80 are (incorrectly) reversed
console.log(str.split('').reverse().join(''));
    // 'y\uDE80\uD83Dx'

// ES6: order of \uD83D\uDE80 is preserved
console.log([...str].reverse().join(''));
    // 'y\uD83D\uDE80x'


 In ES5, Array.prototype.slice() was used to convert Array-like objects to Arrays. In ES6, you have Array.from():

var arr1 = Array.prototype.slice.call(arguments); // ES5
const arr2 = Array.from(arguments); // ES6

const arr1 = [...'abc'];
    // ['a', 'b', 'c']
const arr2 = [...new Set().add('a').add('b')];
    // ['a', 'b']

In ES5, you can use apply(), as a hack, to create in Array of arbitrary length that is filled with undefined:

// Same as Array(undefined, undefined)
var arr1 = Array.apply(null, new Array(2));
    // [undefined, undefined]
In ES6, fill() is a simpler alternative:

const arr2 = new Array(2).fill(undefined);
    // [undefined, undefined]

fill() is even more convenient if you want to create an Array that is filled with an arbitrary value:

// ES5
var arr3 = Array.apply(null, new Array(2))
    .map(function (x) { return 'x' });
    // ['x', 'x']

// ES6
const arr4 = new Array(2).fill('x');
    // ['x', 'x']

    //------ lib.js ------
var sqrt = Math.sqrt;
function square(x) {
    return x * x;
}
function diag(x, y) {
    return sqrt(square(x) + square(y));
}
module.exports = {
    sqrt: sqrt,
    square: square,
    diag: diag,
};

//------ main1.js ------
var square = require('lib').square;
var diag = require('lib').diag;

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main1.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
The syntax for importing modules as objects looks as follows (line A):

//------ main2.js ------
import * as lib from 'lib'; // (A)
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5
